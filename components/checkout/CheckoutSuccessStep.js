/* ─────────────────────────────────────────────
   CheckoutSuccessStep
   Order confirmed — luxury editorial success.
   Refined warm, brand-consistent.
   No confetti, no excessive celebration —
   just a calm, trustworthy confirmation.
───────────────────────────────────────────── */
import Link from 'next/link';

const PAYMENT_LABELS = {
  cod:  'Cash on Delivery',
  bank: 'Bank Transfer',
  card: 'Credit / Debit Card',
};

export default function CheckoutSuccessStep({ form, paymentMethod, total }) {
  /* Generate a stable order number from timestamp */
  const orderNum = `LLA-${Date.now().toString().slice(-6)}`;

  const details = [
    {
      label: 'Delivering to',
      value: form.address
        ? `${form.address}${form.city ? `, ${form.city}` : ''}`
        : 'N/A',
    },
    {
      label: 'Payment method',
      value: PAYMENT_LABELS[paymentMethod] ?? paymentMethod,
    },
    {
      label: 'Order total',
      value: `$${total.toLocaleString()}`,
      accent: true,
    },
  ];

  return (
    <div className="flex-1 flex items-center justify-center px-5 py-20 md:py-28">
      <div
        className="
          bg-white border border-[#EADDD3]
          rounded-[28px]
          shadow-[0_8px_48px_rgba(31,26,23,0.07)]
          p-10 md:p-14
          text-center
          max-w-lg w-full
          animate-slide-up
        "
      >
        {/* ── Success icon ── */}
        <div
          className="
            w-20 h-20 mx-auto mb-8
            rounded-full
            border-2 border-[#EFA67A]
            bg-[rgba(239,166,122,0.07)]
            flex items-center justify-center
          "
        >
          <svg
            className="text-[#EFA67A]"
            style={{ width: 34, height: 34 }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Eyebrow */}
        <p className="section-label justify-center mb-4">Order Confirmed</p>

        {/* Title */}
        <h2
          className="font-serif text-[2.2rem] leading-tight
                     tracking-[-0.02em] text-[#1F1A17] mb-2"
        >
          Thank You{form.fullName ? `, ${form.fullName.split(' ')[0]}` : ''}
        </h2>

        {/* Accent line */}
        <span className="block w-10 h-px bg-[#EFA67A] mx-auto mb-6" />

        {/* Subtext */}
        <p className="text-[#8B7D74] text-sm font-light leading-relaxed mb-8 max-w-sm mx-auto">
          Your order has been placed and is being prepared with care.
          A confirmation will be sent to{' '}
          <span className="text-[#5E5148]">{form.email || 'your email'}</span>.
        </p>

        {/* Order number pill */}
        <div
          className="
            inline-block bg-[#FFF8F3] border border-[#EADDD3]
            rounded-[14px] px-7 py-4 mb-6
          "
        >
          <p className="text-[11px] text-[#8B7D74] uppercase tracking-[0.1em] font-medium mb-1.5">
            Order Reference
          </p>
          <p className="font-serif text-[1.5rem] tracking-widest text-[#EFA67A] leading-tight">
            {orderNum}
          </p>
        </div>

        {/* Order details */}
        <div
          className="
            bg-[#FFFCF8] border border-[#EADDD3]
            rounded-[16px] p-5 mb-8
            text-left flex flex-col gap-3.5
          "
        >
          {details.map(({ label, value, accent }) => (
            <div key={label} className="flex items-start justify-between gap-4">
              <span className="text-[#8B7D74] text-sm font-light flex-shrink-0">
                {label}
              </span>
              <span
                className={[
                  'text-sm font-medium text-right',
                  accent ? 'text-[#EFA67A]' : 'text-[#1F1A17]',
                ].join(' ')}
              >
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/shop">
            <a
              className="
                flex-1 inline-flex items-center justify-center gap-2
                bg-[#EFA67A] text-white
                text-sm font-medium tracking-[0.05em]
                px-6 py-4 rounded-[16px]
                shadow-[0_6px_24px_rgba(239,166,122,0.28)]
                hover:bg-[#E39B74]
                hover:-translate-y-0.5
                hover:shadow-[0_10px_32px_rgba(239,166,122,0.36)]
                active:translate-y-0
                transition-all duration-250
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EFA67A]/40
              "
            >
              Continue Shopping
            </a>
          </Link>
          <Link href="/">
            <a
              className="
                flex-1 inline-flex items-center justify-center gap-2
                border border-[#EADDD3] text-[#5E5148]
                text-sm font-medium tracking-wide
                px-6 py-4 rounded-[16px]
                transition-all duration-250
                hover:border-[#1F1A17] hover:text-[#1F1A17] hover:-translate-y-0.5
                active:translate-y-0
                focus-visible:outline-none
              "
            >
              Back to Home
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
