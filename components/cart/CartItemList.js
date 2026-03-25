/* ─────────────────────────────────────────────
   CartItemList
   Animated list of CartItemCards + continue
   shopping secondary CTA at the bottom.
───────────────────────────────────────────── */
import Link from 'next/link';
import CartItemCard from './CartItemCard';

export default function CartItemList({ items, onRemove, onUpdateQuantity }) {
  return (
    <div className="flex flex-col gap-3 animate-fade-in">
      {/* ── Item Cards ── */}
      {items.map((item, idx) => (
        <div
          key={item.cartId}
          style={{ animationDelay: `${idx * 60}ms` }}
          className="animate-slide-up"
        >
          <CartItemCard
            item={item}
            onRemove={onRemove}
            onUpdateQuantity={onUpdateQuantity}
          />
        </div>
      ))}

      {/* ── Continue Shopping ── */}
      <div className="pt-4">
        <Link href="/shop">
          <a
            className="inline-flex items-center gap-2
                       text-[#5E5148] text-sm font-medium tracking-wide
                       border-b border-[#EADDD3]
                       hover:text-[#EFA67A] hover:border-[#EFA67A]
                       transition-all duration-200 pb-0.5
                       focus-visible:outline-none"
          >
            {/* Left arrow — refined */}
            <svg
              className="w-4 h-4 opacity-70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.6}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m0 0l6-6m-6 6l6 6" />
            </svg>
            Continue Shopping
          </a>
        </Link>
      </div>
    </div>
  );
}
