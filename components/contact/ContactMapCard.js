export default function ContactMapCard() {
  return (
    <div
      className="relative overflow-hidden rounded-[24px] p-8 flex-1 min-h-[260px] flex flex-col justify-between"
      style={{
        background: 'linear-gradient(135deg, #F8F1EB 0%, #F6E7DD 100%)',
      }}
    >
      {/* ── Ambient decorative circles ── */}
      <div
        className="absolute top-0 right-0 w-52 h-52 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(239,166,122,0.18) 0%, transparent 70%)',
          transform: 'translate(35%, -35%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-36 h-36 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(239,166,122,0.10) 0%, transparent 70%)',
          transform: 'translate(-35%, 35%)',
        }}
      />

      {/* ── Top content ── */}
      <div className="relative z-10">
        {/* Pin icon in soft white circle */}
        <div
          className="inline-flex items-center justify-center w-11 h-11 rounded-full text-[#EFA67A] mb-5"
          style={{
            background: 'rgba(255,255,255,0.75)',
            boxShadow: '0 2px 14px rgba(31,26,23,0.07)',
          }}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>

        {/* Eyebrow */}
        <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#8B7D74] mb-3">
          Our Atelier
        </p>

        {/* Address */}
        <h4
          className="font-serif font-light text-[#1F1A17] leading-tight mb-2"
          style={{ fontSize: 'clamp(1.2rem, 2vw, 1.45rem)' }}
        >
          12 Fashion Street
        </h4>
        <p className="text-[#5E5148] text-[14px] font-light">District 1, Ho Chi Minh City</p>
        <p className="text-[#8B7D74] text-[13px] font-light mt-0.5">Vietnam</p>
      </div>

      {/* ── Bottom CTA ── */}
      <div className="relative z-10 mt-8">
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-text text-[13px] text-[#5E5148] border-[#5E5148]/30 hover:text-[#EFA67A] hover:border-[#EFA67A]/50"
        >
          Open in Google Maps
          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>
      </div>
    </div>
  );
}
