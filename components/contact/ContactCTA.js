import Link from 'next/link';

export default function ContactCTA() {
  return (
    <section className="page-container py-20 md:py-28">
      {/* ── Soft luxury invitation panel ── */}
      <div
        className="relative overflow-hidden rounded-[32px] px-8 md:px-16 lg:px-24 py-20 md:py-28 text-center"
        style={{
          background: 'linear-gradient(135deg, #F8F1EB 0%, #F6E7DD 45%, #F8F1EB 100%)',
        }}
      >
        {/* ── Ambient decorative circles ── */}
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(239,166,122,0.12) 0%, transparent 70%)',
            transform: 'translate(35%, -35%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-60 h-60 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(239,166,122,0.09) 0%, transparent 70%)',
            transform: 'translate(-35%, 35%)',
          }}
        />

        {/* ── Content ── */}
        <div className="relative z-10 max-w-md mx-auto">

          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-9">
            <span className="w-10 h-px bg-[#EFA67A] opacity-50" />
            <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#8B7D74]">
              Continue Exploring
            </span>
            <span className="w-10 h-px bg-[#EFA67A] opacity-50" />
          </div>

          {/* Headline */}
          <h2
            className="font-serif font-light leading-[1.1] text-[#1F1A17] mb-6"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.75rem)' }}
          >
            Discover the{' '}
            <em className="italic text-[#EFA67A]">Collection</em>
          </h2>

          {/* Accent line */}
          <div className="flex justify-center mb-7">
            <span className="w-10 h-px bg-[#EFA67A]/40" />
          </div>

          {/* Body */}
          <p className="text-[#5E5148] text-[15px] font-light leading-[1.85] mb-10 max-w-xs mx-auto">
            Explore our curated edit — pieces crafted with intention,
            designed to be worn for a lifetime.
          </p>

          {/* CTAs */}
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <Link href="/shop">
              <a className="btn-primary">Explore Our Edit</a>
            </Link>
            <Link href="/about">
              <a className="btn-text text-[#5E5148] border-[#5E5148]/30 hover:text-[#EFA67A] hover:border-[#EFA67A]/50">
                Our Story
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
