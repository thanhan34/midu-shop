/* ─────────────────────────────────────────────
   PaymentMethodsRow
   Subtle trust indicators below the CTA.
   Refined pill badges, not generic marketplace pills.
───────────────────────────────────────────── */

const METHODS = [
  {
    id: 'visa',
    label: 'Visa',
    icon: (
      <svg viewBox="0 0 38 24" className="w-7 h-auto" aria-hidden="true">
        <rect width="38" height="24" rx="4" fill="#F8F1EB" />
        <text
          x="19" y="16.5"
          textAnchor="middle"
          fontSize="9"
          fontWeight="700"
          fontFamily="Arial,sans-serif"
          fill="#1A1F71"
          letterSpacing="0.5"
        >
          VISA
        </text>
      </svg>
    ),
  },
  {
    id: 'mc',
    label: 'Mastercard',
    icon: (
      <svg viewBox="0 0 38 24" className="w-7 h-auto" aria-hidden="true">
        <rect width="38" height="24" rx="4" fill="#F8F1EB" />
        <circle cx="15" cy="12" r="6" fill="#EB001B" opacity="0.85" />
        <circle cx="23" cy="12" r="6" fill="#F79E1B" opacity="0.85" />
        <path d="M19 7.8a6 6 0 010 8.4A6 6 0 0119 7.8z" fill="#FF5F00" opacity="0.9" />
      </svg>
    ),
  },
  {
    id: 'paypal',
    label: 'PayPal',
    icon: (
      <svg viewBox="0 0 38 24" className="w-7 h-auto" aria-hidden="true">
        <rect width="38" height="24" rx="4" fill="#F8F1EB" />
        <text
          x="19" y="16"
          textAnchor="middle"
          fontSize="8.5"
          fontWeight="700"
          fontFamily="Arial,sans-serif"
          fill="#003087"
          letterSpacing="0.3"
        >
          PayPal
        </text>
      </svg>
    ),
  },
  {
    id: 'apple',
    label: 'Apple Pay',
    icon: (
      <svg viewBox="0 0 38 24" className="w-7 h-auto" aria-hidden="true">
        <rect width="38" height="24" rx="4" fill="#F8F1EB" />
        <text
          x="19" y="16"
          textAnchor="middle"
          fontSize="7.5"
          fontWeight="600"
          fontFamily="-apple-system,BlinkMacSystemFont,sans-serif"
          fill="#1F1A17"
          letterSpacing="0.2"
        >
           Pay
        </text>
      </svg>
    ),
  },
];

export default function PaymentMethodsRow() {
  return (
    <div className="mt-5 pt-5 border-t border-[#F6E7DD]">
      {/* Label */}
      <p
        className="text-center text-[10px] font-medium tracking-[0.18em] uppercase
                   text-[#8B7D74] mb-3"
      >
        Secure payment accepted
      </p>

      {/* Badges */}
      <div className="flex items-center justify-center gap-2.5 flex-wrap">
        {METHODS.map((m) => (
          <div
            key={m.id}
            title={m.label}
            className="flex items-center justify-center
                       border border-[#EADDD3] rounded-[8px]
                       bg-white shadow-[0_1px_4px_rgba(31,26,23,0.04)]
                       p-1.5
                       opacity-80 hover:opacity-100
                       transition-opacity duration-200"
          >
            {m.icon}
          </div>
        ))}
      </div>

      {/* Lock micro-label */}
      <div className="flex items-center justify-center gap-1.5 mt-3.5">
        <svg
          className="w-3 h-3 text-[#EADDD3]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
        <span className="text-[10px] text-[#8B7D74] font-light tracking-wide">
          SSL encrypted checkout
        </span>
      </div>
    </div>
  );
}
