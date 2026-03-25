/* ── Refined social icons — line style, brand-neutral ── */
function InstagramIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="w-3 h-3"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

const socials = [
  {
    platform: 'Instagram',
    handle: '@lalla.fashion',
    desc: 'Behind the scenes & new arrivals',
    icon: <InstagramIcon />,
    href: '#',
  },
  {
    platform: 'Facebook',
    handle: 'LALLA Fashion',
    desc: 'Community updates & events',
    icon: <FacebookIcon />,
    href: '#',
  },
  {
    platform: 'TikTok',
    handle: '@lalla.official',
    desc: 'Style films & campaign edits',
    icon: <TikTokIcon />,
    href: '#',
  },
];

export default function ContactSocialCard() {
  return (
    <div className="bg-white border border-[#EADDD3] rounded-[24px] p-7 shadow-[0_2px_20px_rgba(31,26,23,0.05)]">

      {/* ── Header ── */}
      <div className="mb-6 pb-5 border-b border-[#EADDD3]/60">
        <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#8B7D74] mb-2">
          Follow the Journey
        </p>
        <h4
          className="font-serif font-light text-[#1F1A17]"
          style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)' }}
        >
          Stay Connected
        </h4>
      </div>

      {/* ── Social items ── */}
      <div className="flex flex-col">
        {socials.map((s, i) => (
          <a
            key={s.platform}
            href={s.href}
            className={`flex items-center gap-4 py-4 group transition-all duration-200 hover:pl-1 ${
              i < socials.length - 1 ? 'border-b border-[#EADDD3]/50' : ''
            }`}
          >
            {/* Icon container */}
            <div className="w-9 h-9 rounded-xl bg-[#F8F1EB] border border-[#EADDD3] flex items-center justify-center text-[#8B7D74] group-hover:bg-[#F6E7DD] group-hover:text-[#EFA67A] group-hover:border-[#EFA67A]/30 transition-all duration-200 flex-shrink-0">
              {s.icon}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className="text-[#1F1A17] text-[14px] font-light group-hover:text-[#EFA67A] transition-colors duration-200 leading-tight">
                {s.platform}
              </p>
              <p className="text-[#8B7D74] text-[12px] font-light truncate mt-0.5">{s.handle}</p>
            </div>

            {/* Trailing arrow */}
            <span className="text-[#EADDD3] group-hover:text-[#EFA67A] transition-colors duration-200 flex-shrink-0">
              <ArrowIcon />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
