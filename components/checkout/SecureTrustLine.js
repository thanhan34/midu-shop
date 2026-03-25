/* ─────────────────────────────────────────────
   SecureTrustLine
   Subtle trust cues at the bottom of the
   Order Summary panel.
   Design: muted, refined, integrated — not
   bank-like badges, just soft reassurance.
───────────────────────────────────────────── */

const TRUST_ITEMS = [
  {
    id: 'ssl',
    label: 'SSL Encrypted',
    color: '#6FAE7B',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}
        style={{ width: 13, height: 13 }}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: 'secure',
    label: 'Secure Checkout',
    color: '#8B7D74',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}
        style={{ width: 13, height: 13 }}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 'privacy',
    label: 'Privacy Protected',
    color: '#8B7D74',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}
        style={{ width: 13, height: 13 }}>
        <path strokeLinecap="round" strokeLinejoin="round"
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

export default function SecureTrustLine() {
  return (
    <div className="mt-6 pt-5 border-t border-[#EADDD3]">
      <div className="flex items-center justify-center gap-3 flex-wrap">
        {TRUST_ITEMS.map((item, i) => (
          <div key={item.id} className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span style={{ color: item.color }} className="flex-shrink-0">
                {item.icon}
              </span>
              <span className="text-[#8B7D74] text-[11px] font-light tracking-wide whitespace-nowrap">
                {item.label}
              </span>
            </div>
            {i < TRUST_ITEMS.length - 1 && (
              <div className="w-px h-3 bg-[#EADDD3] flex-shrink-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
