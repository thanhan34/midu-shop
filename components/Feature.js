import Link from 'next/link';

export default function Feature() {
  return (
    <section className="bg-[#F8F1EB] py-20 md:py-28">
      <div className="max-w-[1320px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Image ── */}
          <div className="relative">
            {/* Main image */}
            <div className="overflow-hidden rounded-2xl bg-[#F6E7DD]" style={{ aspectRatio: '3/4' }}>
              <img
                src="/feature.jpg"
                alt="LALLA — Crafted with intention"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Accent small image */}
            <div
              className="absolute -top-6 -right-4 lg:right-[-2rem] w-28 lg:w-36 overflow-hidden rounded-xl border-4 border-[#F8F1EB] shadow-medium bg-[#F6E7DD]"
              style={{ aspectRatio: '1/1' }}
            >
              <img
                src="/feature2 (2).jpg"
                alt="Detail"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Stat card */}
            <div className="absolute bottom-8 -right-4 lg:-right-8 bg-[#FFFCF8] border border-[#EADDD3] rounded-2xl px-5 py-4 shadow-soft">
              <p className="font-serif text-3xl text-[#1F1A17] font-light">10k+</p>
              <p className="text-[11px] uppercase tracking-[0.15em] text-[#8B7D74] mt-0.5">Happy Clients</p>
            </div>
          </div>

          {/* ── Text ── */}
          <div className="flex flex-col gap-6">
            {/* Label */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[#EFA67A]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#8B7D74]">
                Our Philosophy
              </span>
            </div>

            <h2
              className="font-serif font-light text-[#1F1A17] leading-[1.1]"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
            >
              Fashion that
              <br />
              <em className="italic text-[#EFA67A]">endures</em> beyond
              <br />
              the season.
            </h2>

            {/* Thin divider */}
            <div className="w-10 h-px bg-[#EADDD3]" />

            <p className="text-[#5E5148] text-[15px] font-light leading-relaxed max-w-md">
              Each LALLA piece is conceived with a singular purpose: to move with you through 
              life without losing its beauty. We source only the finest natural fabrics, 
              shaped by hands that believe in craft over speed.
            </p>

            {/* Features — minimal list */}
            <ul className="flex flex-col gap-4 mt-2">
              {[
                { n: '01', text: 'Premium natural fabrics, responsibly sourced' },
                { n: '02', text: 'Silhouettes designed for every body, every occasion' },
                { n: '03', text: 'Timeless over trend — designed to be re-worn' },
              ].map((item) => (
                <li key={item.n} className="flex items-start gap-4">
                  <span className="font-serif text-[11px] text-[#EFA67A] mt-0.5 flex-shrink-0">
                    {item.n}
                  </span>
                  <span className="text-[#5E5148] text-sm font-light">{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link href="/about">
                <a className="btn-outline">
                  Read Our Story
                </a>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
