import Link from 'next/link';

const categories = [
  { src: '/C1.jpg',  label: 'Dresses',    slug: 'Dresses' },
  { src: '/C2.jpg',  label: 'Tops',       slug: 'Tops' },
  { src: '/C3.jpg',  label: 'Bottoms',    slug: 'Bottoms' },
  { src: '/C4.jpg',  label: 'Outerwear',  slug: 'Jackets' },
  { src: '/C5.jpg',  label: 'Accessories',slug: 'Accessories' },
  { src: '/C6.jpg',  label: 'Bags',       slug: 'Bags' },
];

export default function Carousels() {
  return (
    <section className="bg-[#FFFCF8] py-20 md:py-28">
      <div className="max-w-[1320px] mx-auto px-5 md:px-10 lg:px-16">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#EFA67A]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#8B7D74]">
                Explore
              </span>
            </div>
            <h2
              className="font-serif font-light text-[#1F1A17] leading-[1.1]"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}
            >
              Shop by Category
            </h2>
          </div>

          <Link href="/shop">
            <a className="btn-text self-start sm:self-auto pb-0.5">
              All Categories
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </Link>
        </div>

        {/* ── Category Grid — 6 items ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-5">
          {categories.map((cat) => (
            <Link key={cat.label} href={`/shop?category=${encodeURIComponent(cat.slug)}`}>
              <a className="group block">
                <div
                  className="relative overflow-hidden rounded-xl bg-[#F8F1EB] mb-3"
                  style={{ aspectRatio: '3/4' }}
                >
                  <img
                    src={cat.src}
                    alt={cat.label}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F1A17]/30 via-transparent to-transparent" />
                </div>
                <p className="text-[#1F1A17] text-[13px] font-light tracking-wide text-center group-hover:text-[#EFA67A] transition-colors duration-200">
                  {cat.label}
                </p>
              </a>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
