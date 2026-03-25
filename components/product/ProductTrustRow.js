/* ProductTrustRow — refined trust indicators, no emoji, no heavy widget */

const BENEFITS = [
  {
    label: 'Free Delivery',
    sub: 'Orders over $500',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 3h15v13H1z" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    label: 'Easy Returns',
    sub: '30-day policy',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
      </svg>
    ),
  },
  {
    label: 'Secure Payment',
    sub: '256-bit encryption',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
];

export default function ProductTrustRow() {
  return (
    <div className="border-t border-[#EADDD3] pt-7 pb-2">
      <div className="grid grid-cols-3 gap-3">
        {BENEFITS.map((b) => (
          <div key={b.label} className="flex flex-col items-center text-center gap-2.5">
            {/* Icon circle */}
            <div className="w-9 h-9 rounded-full bg-[#F8F1EB] flex items-center justify-center text-[#8B7D74]">
              {b.icon}
            </div>
            {/* Text */}
            <div>
              <p className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#1F1A17] leading-tight mb-0.5">
                {b.label}
              </p>
              <p className="text-[10px] font-light text-[#8B7D74] tracking-[0.04em]">
                {b.sub}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
