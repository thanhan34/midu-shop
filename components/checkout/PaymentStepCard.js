/* ─────────────────────────────────────────────
   PaymentStepCard
   Step 2: Refined payment method selection.
   Shipping address recap · method cards ·
   conditional card fields · CTA actions.
   All surfaces match the luxury form aesthetic.
───────────────────────────────────────────── */
import { FormInput } from './CheckoutFormFields';

/* ── Payment method data ──────────────────── */
const PAYMENT_METHODS = [
  {
    id: 'cod',
    label: 'Cash on Delivery',
    desc: 'Pay when your order arrives at your door',
    icon: (
      <svg
        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
        className="w-5 h-5"
      >
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    id: 'bank',
    label: 'Bank Transfer',
    desc: 'Transfer directly to our secure bank account',
    icon: (
      <svg
        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
        className="w-5 h-5"
      >
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
  {
    id: 'card',
    label: 'Credit / Debit Card',
    desc: 'Visa, Mastercard and major cards accepted',
    icon: (
      <svg
        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
        className="w-5 h-5"
      >
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
];

/* ── Component ────────────────────────────── */
export default function PaymentStepCard({
  form,
  paymentMethod,
  setPaymentMethod,
  onBack,
  onPlaceOrder,
  submitting,
  total,
}) {
  return (
    <div
      className="
        bg-white border border-[#EADDD3]
        rounded-[24px]
        shadow-[0_4px_32px_rgba(31,26,23,0.05)]
        p-8 md:p-10
        animate-fade-in
      "
    >
      {/* ── Section header ── */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div
            className="
              w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
              border border-[#EFA67A] bg-[rgba(239,166,122,0.08)]
            "
          >
            <span className="text-[#EFA67A] text-sm font-medium font-sans leading-none">
              2
            </span>
          </div>
          <p className="section-label">Payment</p>
        </div>
        <h2
          className="font-serif text-[1.75rem] leading-tight
                     tracking-[-0.015em] text-[#1F1A17]"
        >
          Payment Method
        </h2>
        <span className="mt-3 block w-8 h-px bg-[#EFA67A]" />
      </div>

      {/* ── Shipping address recap ── */}
      <div
        className="
          bg-[#FFF8F3] border border-[#EADDD3]
          rounded-[16px] p-5 mb-8
        "
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] text-[#8B7D74] uppercase tracking-[0.1em] font-medium mb-2">
              Delivering to
            </p>
            <p className="text-[#1F1A17] text-sm font-medium">
              {form.fullName}
            </p>
            <p className="text-[#5E5148] text-sm font-light mt-0.5">
              {form.address}{form.city ? `, ${form.city}` : ''}
            </p>
            <p className="text-[#5E5148] text-sm font-light">
              {form.email}
            </p>
          </div>
          <button
            type="button"
            onClick={onBack}
            className="
              text-[#EFA67A] text-xs font-medium tracking-wide
              border-b border-[#EFA67A]/30
              hover:border-[#EFA67A] transition-colors duration-200
              flex-shrink-0 focus-visible:outline-none pb-0.5
            "
          >
            Edit
          </button>
        </div>
      </div>

      {/* ── Payment method cards ── */}
      <div className="flex flex-col gap-3 mb-8">
        {PAYMENT_METHODS.map((pm) => {
          const isSelected = paymentMethod === pm.id;
          return (
            <button
              key={pm.id}
              type="button"
              onClick={() => setPaymentMethod(pm.id)}
              className={[
                'w-full flex items-center gap-4 p-5 rounded-[16px]',
                'border-2 text-left',
                'transition-all duration-250',
                isSelected
                  ? 'border-[#EFA67A] bg-[rgba(239,166,122,0.04)] shadow-[0_4px_16px_rgba(239,166,122,0.12)]'
                  : 'border-[#EADDD3] bg-white hover:border-[#EFA67A]/40 hover:bg-[#FFFCF8]',
              ].join(' ')}
            >
              {/* Radio dot */}
              <div
                className={[
                  'w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0',
                  'transition-all duration-200',
                  isSelected ? 'border-[#EFA67A]' : 'border-[#EADDD3]',
                ].join(' ')}
              >
                {isSelected && (
                  <div className="w-2.5 h-2.5 rounded-full bg-[#EFA67A]" />
                )}
              </div>

              {/* Icon */}
              <span
                className={[
                  'flex-shrink-0 transition-colors',
                  isSelected ? 'text-[#EFA67A]' : 'text-[#8B7D74]',
                ].join(' ')}
              >
                {pm.icon}
              </span>

              {/* Label + description */}
              <div className="flex-1 text-left">
                <p
                  className={[
                    'text-sm font-medium transition-colors',
                    isSelected ? 'text-[#1F1A17]' : 'text-[#5E5148]',
                  ].join(' ')}
                >
                  {pm.label}
                </p>
                <p className="text-[#8B7D74] text-xs font-light mt-0.5">
                  {pm.desc}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* ── Card fields (shown only if card selected) ── */}
      {paymentMethod === 'card' && (
        <div
          className="
            bg-[#FFF8F3] border border-[#EADDD3]
            rounded-[16px] p-6 mb-8
            flex flex-col gap-5
            animate-fade-in
          "
        >
          <FormInput
            label="Card Number"
            name="cardNum"
            placeholder="4242 4242 4242 4242"
            value=""
            onChange={() => {}}
          />
          <div className="grid grid-cols-2 gap-5">
            <FormInput
              label="Expiry Date"
              name="expiry"
              placeholder="MM / YY"
              value=""
              onChange={() => {}}
            />
            <FormInput
              label="CVV"
              name="cvv"
              placeholder="123"
              value=""
              onChange={() => {}}
            />
          </div>
          <FormInput
            label="Cardholder Name"
            name="cardName"
            placeholder="Name on card"
            value=""
            onChange={() => {}}
          />
        </div>
      )}

      {/* ── Separator ── */}
      <div className="border-t border-[#EADDD3] mb-7" />

      {/* ── CTA Actions ── */}
      <div className="flex flex-col sm:flex-row gap-3">

        {/* Back — secondary ghost */}
        <button
          type="button"
          onClick={onBack}
          className="
            flex-1 inline-flex items-center justify-center gap-2
            px-6 py-4 rounded-[16px]
            border border-[#EADDD3] text-[#5E5148]
            text-sm font-medium tracking-wide
            transition-all duration-250
            hover:border-[#1F1A17] hover:text-[#1F1A17] hover:-translate-y-0.5
            active:translate-y-0
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F1A17]/10
          "
        >
          <svg
            className="w-4 h-4 flex-shrink-0"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        {/* Place Order — primary accent */}
        <button
          type="button"
          onClick={onPlaceOrder}
          disabled={submitting}
          className="
            flex-1 inline-flex items-center justify-center gap-2.5
            bg-[#EFA67A] text-white
            text-sm font-medium tracking-[0.05em]
            px-6 py-4 rounded-[16px]
            shadow-[0_6px_24px_rgba(239,166,122,0.28)]
            hover:bg-[#E39B74]
            hover:-translate-y-0.5
            hover:shadow-[0_10px_32px_rgba(239,166,122,0.38)]
            active:translate-y-0 active:shadow-[0_4px_16px_rgba(239,166,122,0.20)]
            transition-all duration-250
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EFA67A]/40
            disabled:opacity-60 disabled:pointer-events-none disabled:translate-y-0
          "
        >
          {submitting ? (
            <>
              <svg
                className="w-4 h-4 animate-spin flex-shrink-0"
                fill="none" viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25" cx="12" cy="12" r="10"
                  stroke="currentColor" strokeWidth="4"
                />
                <path
                  className="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Placing Order…
            </>
          ) : (
            <>
              Place Order · ${total.toLocaleString()}
              <svg
                className="w-4 h-4 flex-shrink-0"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
