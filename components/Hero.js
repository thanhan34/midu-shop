import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-[#FFFCF8] overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[88vh] items-center gap-8 lg:gap-16 py-16 lg:py-0">

          {/* ── Text Column ── */}
          <div className="flex flex-col justify-center order-2 lg:order-1 animate-slide-up">

            {/* Label */}
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-[#EFA67A]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#8B7D74]">
                Spring / Summer 2025
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif font-light text-[#1F1A17] leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
              Dressed in
              <br />
              <em className="italic" style={{ color: '#EFA67A' }}>quiet</em>
              <br />
              luxury.
            </h1>

            {/* Thin divider */}
            <div className="w-12 h-px bg-[#EADDD3] mb-6" />

            {/* Subtext */}
            <p className="text-[#5E5148] text-base font-light leading-relaxed max-w-[380px] mb-10">
              Timeless silhouettes, refined fabrics, and a palette that speaks before you do. 
              Designed for the woman who dresses with intention.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-5 flex-wrap">
              <Link href="/shop">
                <a className="btn-primary">
                  Explore the Edit
                </a>
              </Link>
              <Link href="/about">
                <a className="btn-text pb-0.5">
                  Our Story
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </Link>
            </div>

            {/* Social proof — minimal */}
            <div className="flex items-center gap-4 mt-12 pt-8 border-t border-[#EADDD3]">
              <div className="flex -space-x-2.5">
                {['/hero01.jpg', '/hero03.jpg', '/hero05.jpg'].map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt=""
                    className="w-7 h-7 rounded-full object-cover border-2 border-[#FFFCF8]"
                  />
                ))}
              </div>
              <p className="text-[#8B7D74] text-xs font-light tracking-wide">
                <span className="text-[#1F1A17] font-medium">10 000+</span> clients satisfaits
              </p>
            </div>
          </div>

          {/* ── Image Column ── */}
          <div className="order-1 lg:order-2 relative animate-fade-in">
            {/* Main large image */}
            <div className="relative overflow-hidden rounded-2xl bg-[#F8F1EB]"
              style={{ aspectRatio: '4/5' }}>
              <img
                src="/hero01.jpg"
                alt="LALLA Summer Collection"
                className="w-full h-full object-cover object-center"
              />
              {/* Warm overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1A17]/10 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Small floating accent image */}
            <div
              className="absolute -bottom-4 -left-4 lg:-left-8 w-32 lg:w-40 overflow-hidden rounded-xl border-4 border-[#FFFCF8] shadow-medium bg-[#F8F1EB]"
              style={{ aspectRatio: '3/4' }}
            >
              <img
                src="/hero04.jpg"
                alt="Detail"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating label badge */}
            <div className="absolute top-6 -right-2 lg:right-4 bg-[#FFFCF8] border border-[#EADDD3] rounded-xl px-4 py-3 shadow-soft">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#8B7D74] mb-0.5">New Season</p>
              <p className="font-serif text-[#1F1A17] text-sm font-light">SS 2025</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
