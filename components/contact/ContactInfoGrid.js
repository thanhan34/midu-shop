/* ── Line icons — thin, refined, brand-consistent ── */
function LocationIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

const info = [
  {
    icon: <LocationIcon />,
    label: 'Visit Us',
    primary: '12 Fashion Street, District 1',
    secondary: 'Ho Chi Minh City, Vietnam',
  },
  {
    icon: <MailIcon />,
    label: 'Email Us',
    primary: 'hello@lalla.fashion',
    secondary: 'support@lalla.fashion',
  },
  {
    icon: <PhoneIcon />,
    label: 'Call Us',
    primary: '+84 (0) 28 1234 5678',
    secondary: 'Mon–Sat · 9:00 – 18:00',
  },
  {
    icon: <ClockIcon />,
    label: 'Store Hours',
    primary: 'Monday – Saturday',
    secondary: '9:00 AM – 8:00 PM',
  },
];

export default function ContactInfoGrid() {
  return (
    <section className="page-container pb-20">
      {/* ── Editorial info strip ── */}
      <div className="border-t border-b border-[#EADDD3] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#EADDD3] lg:divide-x lg:divide-y-0">
        {info.map((item) => (
          <div
            key={item.label}
            className="group px-8 py-10 flex flex-col gap-2 transition-all duration-300 hover:bg-[#FFFCF8]/80 first:pl-0 last:pr-0 md:first:pl-4 md:last:pr-4 lg:first:pl-0 lg:last:pr-0"
          >
            {/* Accent icon */}
            <div className="text-[#EFA67A] mb-3 transition-transform duration-300 group-hover:-translate-y-0.5">
              {item.icon}
            </div>

            {/* Eyebrow label */}
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#8B7D74]">
              {item.label}
            </p>

            {/* Accent micro-line */}
            <div className="w-6 h-px bg-[#EFA67A]/50 transition-all duration-300 group-hover:w-10 group-hover:bg-[#EFA67A]" />

            {/* Primary info */}
            <p className="text-[#1F1A17] font-light text-[15px] leading-relaxed mt-1">
              {item.primary}
            </p>

            {/* Secondary info */}
            <p className="text-[#8B7D74] text-[13px] font-light">
              {item.secondary}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
