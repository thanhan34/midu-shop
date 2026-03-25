import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

function CollectionItem({ id, title, img, price, badge, inStock = true, originalPrice }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const numericPrice = typeof price === 'string'
    ? parseFloat(price.replace(/[^0-9.]/g, ''))
    : price;

  const discount = originalPrice
    ? Math.round(((originalPrice - numericPrice) / originalPrice) * 100)
    : 0;

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (!inStock || added) return;
    addToCart({ id, title, img, price: numericPrice }, 'M', 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  };

  return (
    <div className="group cursor-pointer">
      {/* ── Image wrapper ── */}
      <Link href={`/products/${id}`}>
        <a className="block">
          <div className="relative overflow-hidden rounded-xl bg-[#F8F1EB]" style={{ aspectRatio: '3/4' }}>
            <img
              src={img}
              alt={title}
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />

            {/* Out of stock */}
            {!inStock && (
              <div className="absolute inset-0 bg-[#FFFCF8]/70 flex items-center justify-center">
                <span className="text-[11px] uppercase tracking-[0.18em] text-[#8B7D74] font-medium bg-white px-3 py-1.5 rounded-full border border-[#EADDD3]">
                  Sold Out
                </span>
              </div>
            )}

            {/* Badge — very minimal, only if needed */}
            {badge && inStock && badge === 'Sale' && (
              <span className="absolute top-3 left-3 text-[10px] font-medium uppercase tracking-[0.12em] bg-[#1F1A17] text-white px-2.5 py-1 rounded-full">
                Sale
              </span>
            )}

            {/* Add to Cart — appears on hover */}
            {inStock && (
              <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <button
                  onClick={handleAddToCart}
                  className={`w-full py-3 text-[12px] font-medium uppercase tracking-[0.14em] transition-colors duration-200 ${
                    added
                      ? 'bg-[#5E5148] text-white'
                      : 'bg-[#1F1A17]/90 text-white hover:bg-[#EFA67A]'
                  }`}
                >
                  {added ? '✓ Added to bag' : 'Add to Bag'}
                </button>
              </div>
            )}
          </div>
        </a>
      </Link>

      {/* ── Product Info ── */}
      <div className="pt-4 pb-1">
        <Link href={`/products/${id}`}>
          <a>
            <h3 className="text-[#1F1A17] text-sm font-light tracking-wide leading-snug hover:text-[#EFA67A] transition-colors duration-200">
              {title}
            </h3>
          </a>
        </Link>

        <div className="flex items-center gap-2.5 mt-1.5">
          <span className="text-[#5E5148] text-sm font-light">
            ${typeof price === 'number' ? price.toLocaleString() : price}
          </span>
          {originalPrice && (
            <>
              <span className="text-[#8B7D74] text-xs line-through">
                ${originalPrice.toLocaleString()}
              </span>
              <span className="text-[10px] font-medium text-[#EFA67A]">−{discount}%</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CollectionItem;
