/* ─────────────────────────────────────────────
   CartItemCard
   Premium cart item — editorial feel, refined
   surface, clean hierarchy, inline stepper.
───────────────────────────────────────────── */
import Link from 'next/link';
import QuantityStepper from './QuantityStepper';

export default function CartItemCard({ item, onRemove, onUpdateQuantity }) {
  const lineTotal = item.price * item.quantity;

  return (
    <article
      className="group flex items-start gap-5 md:gap-6
                 bg-white border border-[#EADDD3]
                 rounded-2xl
                 shadow-[0_2px_16px_rgba(31,26,23,0.04)]
                 hover:shadow-[0_6px_28px_rgba(31,26,23,0.07)]
                 hover:-translate-y-px
                 transition-all duration-300
                 p-5 md:p-6"
    >
      {/* ── Product Image ── */}
      <Link href={`/products/${item.id}`}>
        <a
          className="flex-shrink-0 relative overflow-hidden rounded-[14px]
                     bg-[#F8F1EB]"
          style={{ width: '96px', height: '118px' }}
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover object-center
                       group-hover:scale-[1.04]
                       transition-transform duration-500"
          />
        </a>
      </Link>

      {/* ── Details Column ── */}
      <div className="flex-1 min-w-0 flex flex-col justify-between gap-4">

        {/* Top row: name + remove */}
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            {/* Product name */}
            <Link href={`/products/${item.id}`}>
              <a
                className="font-serif text-[1.05rem] leading-snug tracking-[-0.01em]
                           text-[#1F1A17]
                           hover:text-[#EFA67A]
                           transition-colors duration-200
                           line-clamp-2 block"
              >
                {item.title}
              </a>
            </Link>

            {/* Metadata pills */}
            <div className="flex items-center gap-2 mt-2.5 flex-wrap">
              <span
                className="inline-flex items-center gap-1
                           text-[10px] font-medium tracking-[0.12em] uppercase
                           text-[#8B7D74] bg-[#F8F1EB]
                           px-2.5 py-1 rounded-full"
              >
                Size
                <span className="text-[#5E5148] font-semibold">{item.size}</span>
              </span>

              {item.color && (
                <span
                  className="inline-flex items-center
                             text-[10px] font-medium tracking-[0.12em] uppercase
                             text-[#8B7D74] bg-[#F8F1EB]
                             px-2.5 py-1 rounded-full"
                >
                  {item.color}
                </span>
              )}
            </div>
          </div>

          {/* Remove button — very subtle × */}
          <button
            type="button"
            onClick={() => onRemove(item.cartId)}
            aria-label={`Remove ${item.title} from cart`}
            className="flex-shrink-0 w-7 h-7 flex items-center justify-center
                       rounded-full text-[#EADDD3]
                       hover:text-[#8B7D74] hover:bg-[#F6E7DD]
                       transition-all duration-200
                       focus-visible:outline-none mt-0.5"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Bottom row: stepper + price */}
        <div className="flex items-center justify-between gap-3">
          {/* Quantity stepper */}
          <QuantityStepper
            quantity={item.quantity}
            onDecrease={() => onUpdateQuantity(item.cartId, item.quantity - 1)}
            onIncrease={() => onUpdateQuantity(item.cartId, item.quantity + 1)}
          />

          {/* Price block */}
          <div className="text-right flex-shrink-0">
            <p
              className="font-serif text-[1.15rem] leading-none
                         tracking-[-0.01em] text-[#1F1A17]"
            >
              ${lineTotal.toLocaleString()}
            </p>
            {item.quantity > 1 && (
              <p className="text-[#8B7D74] text-[11px] font-light mt-1">
                ${item.price.toLocaleString()} each
              </p>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
