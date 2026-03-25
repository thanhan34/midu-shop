import Link from 'next/link';

export default function Banner() {
  return (
    <section className="bg-[#F6E7DD] py-20 md:py-24 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Image ── */}
          <div className="relative order-2 lg:order-1">
            <div
              className="overflow-hidden rounded-2xl bg-[#F8F1EB]"
              style={{ aspectRatio: '4/3' }}
            >
              <img
                src="/banner.jpg"
                alt="Selected Pieces — Seasonal Offer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating offer pill */}
            <div className="absolute top-5 left-5 bg-[#FFFCF8] border border-[#EADDD3] rounded-full px-5 py-2.5 shadow-soft flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EFA67A] flex-shrink-0" />
              <span className="text-[11px] uppercase tracking-[0.18em] text-[#5E5148] font-medium">
                Private Sale
              </span>
            </div>
          </div>

          {/* ── Text ── */}
          <div className="order-1 lg:order-2 flex flex-col gap-6">
            {/* Label */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-[#EFA67A]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#8B7D74]">
                Seasonal Edit
              </span>
            </div>

            <h2
              className="font-serif font-light text-[#1F1A17] leading-[1.1]"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
            >
              Selected Pieces,
              <br />
              <em className="italic text-[#EFA67A]">thoughtfully</em>
              <br />
              reduced.
            </h2>

            <div className="w-10 h-px bg-[#EADDD3]" />

            <p className="text-[#5E5148] text-[15px] font-light leading-relaxed max-w-sm">
              A curated selection of past-season pieces, now available at considerate prices. 
              Each item chosen because it remains as beautiful today as the day it was designed.
            </p>

            {/* Offer details — subtle */}
            <div className="flex items-center gap-6 py-5 border-y border-[#EADDD3]">
              {[
                { value: 'Up to 30%', label: 'Off selected styles' },
                { value: 'Free', label: 'Shipping on all orders' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-serif text-xl text-[#1F1A17] font-light">{item.value}</p>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-[#8B7D74] mt-0.5">{item.label}</p>
                </div>
              ))}
            </div>

            <div>
              <Link href="/shop?sort=price-asc">
                <a className="btn-primary">
                  Shop the Edit
                </a>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
