import { createContext, useContext, useReducer, useEffect, useState } from 'react';

const CartContext = createContext(null);

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const cartId = `${action.payload.id}-${action.payload.size}`;
      const existingIndex = state.items.findIndex(
        (item) => item.cartId === cartId
      );
      if (existingIndex >= 0) {
        const updatedItems = [...state.items];
        updatedItems[existingIndex] = {
          ...updatedItems[existingIndex],
          quantity: updatedItems[existingIndex].quantity + action.payload.quantity,
        };
        return { ...state, items: updatedItems };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, cartId }],
      };
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.cartId !== action.payload),
      };
    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(
            (item) => item.cartId !== action.payload.cartId
          ),
        };
      }
      return {
        ...state,
        items: state.items.map((item) =>
          item.cartId === action.payload.cartId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    }
    case 'CLEAR_CART':
      return { ...state, items: [] };
    case 'LOAD_CART':
      return { ...state, items: action.payload };
    default:
      return state;
  }
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const [toast, setToast] = useState(null);
  const [hydrated, setHydrated] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('lalla-cart');
      if (savedCart) {
        dispatch({ type: 'LOAD_CART', payload: JSON.parse(savedCart) });
      }
    } catch (e) {}
    setHydrated(true);
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem('lalla-cart', JSON.stringify(state.items));
    } catch (e) {}
  }, [state.items, hydrated]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const addToCart = (product, size = 'M', quantity = 1) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { ...product, size, quantity },
    });
    showToast(`${product.title} added to cart!`);
  };

  const removeFromCart = (cartId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: cartId });
    showToast('Item removed from cart.', 'info');
  };

  const updateQuantity = (cartId, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { cartId, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const cartCount = state.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = state.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal,
        toast,
      }}
    >
      {children}
      {/* Global Toast */}
      {toast && (
        <div
          className={`fixed bottom-6 right-6 z-[9999] flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl text-white text-sm font-medium transition-all duration-300 ${
            toast.type === 'success'
              ? 'bg-[#fc5d01] accent-glow'
              : 'bg-gray-700'
          }`}
        >
          {toast.type === 'success' ? (
            <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
          {toast.message}
        </div>
      )}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};
