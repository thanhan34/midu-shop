/* ─────────────────────────────────────────────
   CheckoutOrderSummary
   Right sidebar: premium order summary panel.
   Items preview · coupon · totals hierarchy ·
   trust signals. Refined, editorial, warm.
───────────────────────────────────────────── */
import CouponField from './CouponField';
import SecureTrustLine from './SecureTrustLine';

const SHIPPING_THRESHOLD = 500;
const SHIPPING_FEE = 50;

export default function CheckoutOrderSummary({ items, cartTotal }) {
  const shipping = cartTotal >= SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
  const total = cartTotal + shipping;
  const totalQty = items.reduce((s, i) => s + i.quantity, 0);

  return (
    <div
      className="
        bg-[#FFF8F3] border border-[#EADDD3]
        rounded-[24px]
        shadow-[0_4px_32px_rgba(31,26,23,0.06)]
        p-7 md:p-8
        animate-slide-up
      "
    >
      {/* ── Panel heading ── */}
      <div className="mb-6">
        <p className="section-label mb-3">Your Order</p>
        <h3
          className="font-serif text-[1.5rem] leading-tight
                     tracking-[-0.015em] text-[#1F1A17]"
        >
          Order Summary
        </h3>
        <span className="mt-3 block w-8 h-px bg-[#EFA67A]" />
      </div>

      {/* ── Items list ── */}
      <div
        className="
          flex flex-col gap-4 mb-6
          max-h-56 overflow-y-auto pr-1 scrollbar-none
        "
      >
        {items.map((item) => (
          <div key={item.cartId} className="flex items-start gap-3.5">

            {/* Product thumbnail */}
            <div
              className="
                relative flex-shrink-0 w-14 h-[68px]
                rounded-[10px] overflow-hidden
                bg-[#F8F1EB]
              "
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover object-center"
              />
              {/* Quantity badge */}
              <span
                className="
                  absolute -top-1 -right-1 z-10
                  w-5 h-5 rounded-full
                  bg-[#EFA67A] text-white
                  text-[9px] font-medium
                  flex items-center justify-center
                "
              >
                {item.quantity}
              </span>
            </div>

            {/* Product info */}
            <div className="flex-1 min-w-0 pt-0.5">
              <p className="text-[#1F1A17] text-sm font-medium leading-snug truncate">
                {item.title}
              </p>
              <p className="text-[#8B7D74] text-xs font-light mt-0.5">
                Size {item.size}
              </p>
            </div>

            {/* Line price */}
            <p className="text-[#5E5148] text-sm font-medium flex-shrink-0 pt-0.5">
              ${(item.price * item.quantity).toLocaleString()}
            </p>
          </div>
        ))}
      </div>

      {/* ── Divider ── */}
      <div className="border-t border-[#EADDD3] mb-5" />

      {/* ── Coupon field ── */}
      <CouponField />

      {/* ── Subtotal & Shipping ── */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="text-[#8B7D74] text-sm font-light">
            Subtotal
            <span className="ml-1.5 text-[11px] text-[#EADDD3]">
              ({totalQty} {totalQty === 1 ? 'item' : 'items'})
            </span>
          </span>
          <span className="text-[#1F1A17] text-sm font-medium">
            ${cartTotal.toLocaleString()}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[#8B7D74] text-sm font-light">Shipping</span>
          {shipping === 0 ? (
            <span
              className="
                text-[11px] font-medium tracking-[0.08em] uppercase
                text-[#EFA67A] bg-[rgba(239,166,122,0.12)]
                px-2.5 py-1 rounded-full
              "
            >
              Free
            </span>
          ) : (
            <span className="text-[#1F1A17] text-sm font-medium">
              ${shipping.toLocaleString()}
            </span>
          )}
        </div>
      </div>

      {/* ── Total ── */}
      <div className="border-t border-[#EADDD3] mt-5 pt-5">
        <div className="flex items-baseline justify-between">
          <span className="text-[#1F1A17] text-sm font-medium uppercase tracking-[0.07em]">
            Total
          </span>
          <div className="text-right">
            <span
              className="font-serif text-[1.9rem] leading-none
                         tracking-[-0.02em] text-[#EFA67A]"
            >
              ${total.toLocaleString()}
            </span>
            <p className="text-[10px] text-[#8B7D74] font-light mt-0.5">
              Taxes included
            </p>
          </div>
        </div>
      </div>

      {/* ── Trust signals ── */}
      <SecureTrustLine />
    </div>
  );
}
