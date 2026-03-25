/* ─────────────────────────────────────────────
   OrderSummaryCard
   Premium right-column summary panel:
   subtotal → shipping progress → total → CTA
   → payment trust row.
───────────────────────────────────────────── */
import { useRouter } from 'next/router';
import PaymentMethodsRow from './PaymentMethodsRow';

const SHIPPING_THRESHOLD = 500;
const SHIPPING_FEE = 50;

export default function OrderSummaryCard({ items, cartTotal }) {
  const router = useRouter();
  const totalQty = items.reduce((s, i) => s + i.quantity, 0);
  const shipping = cartTotal >= SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
  const orderTotal = cartTotal + shipping;
  const shippingProgress = Math.min((cartTotal / SHIPPING_THRESHOLD) * 100, 100);
  const amountLeft = SHIPPING_THRESHOLD - cartTotal;

  return (
    <div
      className="bg-[#FFF8F3] border border-[#EADDD3]
                 rounded-[24px]
                 shadow-[0_4px_32px_rgba(31,26,23,0.06)]
                 p-7 md:p-8
                 animate-slide-up"
    >
      {/* ── Panel heading ── */}
      <div className="mb-7">
        <p className="section-label mb-3">Summary</p>
        <h2
          className="font-serif text-[1.65rem] leading-tight
                     tracking-[-0.015em] text-[#1F1A17]"
        >
          Order Details
        </h2>
        <span className="mt-3 block w-8 h-px bg-[#EFA67A]" />
      </div>

      {/* ── Line items ── */}
      <div className="flex flex-col gap-3.5 mb-6">
        {/* Subtotal */}
        <div className="flex items-center justify-between">
          <span className="text-[#8B7D74] text-sm font-light tracking-wide">
            Subtotal
            <span className="ml-1.5 text-[11px] text-[#EADDD3] font-normal">
              ({totalQty} {totalQty === 1 ? 'item' : 'items'})
            </span>
          </span>
          <span className="text-[#1F1A17] text-sm font-medium">
            ${cartTotal.toLocaleString()}
          </span>
        </div>

        {/* Shipping */}
        <div className="flex items-center justify-between">
          <span className="text-[#8B7D74] text-sm font-light tracking-wide">
            Shipping
          </span>
          {shipping === 0 ? (
            <span
              className="text-[11px] font-medium tracking-[0.08em] uppercase
                         text-[#EFA67A] bg-[rgba(239,166,122,0.12)]
                         px-2.5 py-1 rounded-full"
            >
              Free
            </span>
          ) : (
            <span className="text-[#1F1A17] text-sm font-medium">
              ${shipping.toLocaleString()}
            </span>
          )}
        </div>

        {/* Free shipping progress bar */}
        {shipping > 0 && (
          <div className="mt-1 bg-[#FFF8F3] border border-[#F6E7DD] rounded-xl p-3.5">
            <p className="text-[11px] text-[#8B7D74] font-light mb-2.5 leading-snug">
              Add{' '}
              <span className="font-medium text-[#5E5148]">
                ${amountLeft.toLocaleString()}
              </span>{' '}
              more to unlock free shipping
            </p>
            <div className="w-full bg-[#F6E7DD] rounded-full h-1 overflow-hidden">
              <div
                className="bg-[#EFA67A] h-1 rounded-full transition-all duration-700 ease-out"
                style={{ width: `${shippingProgress}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* ── Divider ── */}
      <div className="border-t border-[#EADDD3] mb-5" />

      {/* ── Total ── */}
      <div className="flex items-baseline justify-between mb-7">
        <span
          className="text-[#1F1A17] text-sm font-medium tracking-wide uppercase
                     letter-spacing-[0.06em]"
        >
          Total
        </span>
        <div className="text-right">
          <span
            className="font-serif text-[2rem] leading-none
                       tracking-[-0.02em] text-[#EFA67A]"
          >
            ${orderTotal.toLocaleString()}
          </span>
          <p className="text-[10px] text-[#8B7D74] font-light mt-1">
            Taxes included
          </p>
        </div>
      </div>

      {/* ── Primary CTA ── */}
      <button
        onClick={() => router.push('/checkout')}
        className="w-full inline-flex items-center justify-center gap-2.5
                   bg-[#EFA67A] text-white
                   text-sm font-medium tracking-[0.05em]
                   px-6 py-4 rounded-[16px]
                   shadow-[0_6px_24px_rgba(239,166,122,0.30)]
                   hover:bg-[#E39B74]
                   hover:-translate-y-0.5
                   hover:shadow-[0_10px_32px_rgba(239,166,122,0.38)]
                   active:translate-y-0 active:shadow-[0_4px_16px_rgba(239,166,122,0.22)]
                   transition-all duration-250
                   focus-visible:outline-none focus-visible:ring-2
                   focus-visible:ring-[#EFA67A]/40"
      >
        Proceed to Checkout
        <svg
          className="w-4 h-4 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>

      {/* ── Payment trust row ── */}
      <PaymentMethodsRow />
    </div>
  );
}
