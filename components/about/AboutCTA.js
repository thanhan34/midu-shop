import Link from 'next/link';

export default function AboutCTA() {
  return (
    <section className="page-container pb-24 md:pb-32">
      {/* ── Soft luxury invitation panel ── */}
      <div
        className="relative overflow-hidden rounded-[32px] px-8 md:px-16 lg:px-24 py-20 md:py-28 text-center"
        style={{
          background:
            'linear-gradient(135deg, #F8F1EB 0%, #F6E7DD 45%, #F8F1EB 100%)',
        }}
      >
        {/* ── Decorative ambient circles ── */}
        <div
          className="absolute top-0 right-0 w-72 h-72 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(239,166,122,0.12) 0%, transparent 70%)',
            transform: 'translate(30%, -30%)',
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-56 h-56 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(239,166,122,0.09) 0%, transparent 70%)',
            transform: 'translate(-30%, 30%)',
          }}
        />

        {/* ── Content ── */}
        <div className="relative z-10 max-w-lg mx-auto">

          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-9">
            <span className="w-10 h-px bg-[#EFA67A] opacity-50" />
            <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#8B7D74]">
              Discover LALLA
            </span>
            <span className="w-10 h-px bg-[#EFA67A] opacity-50" />
          </div>

          {/* Headline */}
          <h2
            className="font-serif font-light leading-[1.1] text-[#1F1A17] mb-6"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
          >
            Where Every Piece{' '}
            <em className="italic text-[#EFA67A]">Tells a Story</em>
          </h2>

          {/* Thin accent line */}
          <div className="flex justify-center mb-7">
            <span className="w-10 h-px bg-[#EFA67A]/40" />
          </div>

          {/* Body */}
          <p className="text-[#5E5148] text-[15px] font-light leading-[1.85] mb-10 max-w-sm mx-auto">
            Explore our latest collection and discover pieces crafted with
            intention — worn with confidence, remembered forever.
          </p>

          {/* CTA */}
          <div className="flex items-center justify-center gap-5 flex-wrap">
            <Link href="/shop">
              <a className="btn-primary">Explore the Collection</a>
            </Link>
            <Link href="/contact">
              <a className="btn-text text-[#5E5148] border-[#5E5148]/30 hover:text-[#EFA67A] hover:border-[#EFA67A]/50">
                Contact Us
              </a>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
