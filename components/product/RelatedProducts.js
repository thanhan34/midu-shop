/* RelatedProducts — editorial curated feel, not "more upsells" widget */
import Link from 'next/link';

export default function RelatedProducts({ products }) {
  if (!products || products.length === 0) return null;

  return (
    <section className="py-20 md:py-28 border-t border-[#EADDD3]">

      {/* ── Section header ── */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-12 md:mb-16">
        <div>
          <div className="section-label mb-4">Curated for You</div>
          <h2
            className="font-serif font-light text-[#1F1A17] leading-[1.05] tracking-[-0.01em]"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}
          >
            You May Also Like
          </h2>
        </div>

        <Link href="/shop">
          <a className="btn-text text-[11px] tracking-[0.12em] self-start sm:self-auto whitespace-nowrap">
            View All Pieces
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </Link>
      </div>

      {/* ── Product grid ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
        {products.map((p) => (
          <Link key={p.id} href={`/products/${p.id}`}>
            <a className="group block focus-visible:outline-none">

              {/* Image frame */}
              <div
                className="relative overflow-hidden bg-[#F8F1EB] rounded-xl md:rounded-2xl mb-4"
                style={{ aspectRatio: '3 / 4' }}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover object-center
                             transition-transform duration-700 group-hover:scale-[1.05]"
                />

                {/* Hover tint */}
                <div className="absolute inset-0 bg-[#1F1A17]/0 group-hover:bg-[#1F1A17]/[0.04]
                                transition-colors duration-500 rounded-xl md:rounded-2xl" />

                {/* CTA pill — appears on hover */}
                <div
                  className="absolute inset-x-4 bottom-4
                              opacity-0 translate-y-2
                              group-hover:opacity-100 group-hover:translate-y-0
                              transition-all duration-300"
                >
                  <div className="bg-white/92 backdrop-blur-sm rounded-full py-2.5 text-center
                                  border border-[#EADDD3]/50">
                    <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#1F1A17]">
                      View Piece
                    </span>
                  </div>
                </div>
              </div>

              {/* Product info */}
              <div className="space-y-1.5">
                <p className="text-[10px] font-light tracking-[0.14em] uppercase text-[#8B7D74]">
                  {p.category}
                </p>
                <h3 className="font-serif font-light text-[1.05rem] text-[#1F1A17]
                               group-hover:text-[#5E5148] transition-colors duration-200 leading-tight">
                  {p.title}
                </h3>
                <p className="text-[#EFA67A] text-sm font-light tracking-[0.03em]">
                  ${p.price.toLocaleString()}
                </p>
              </div>

            </a>
          </Link>
        ))}
      </div>

    </section>
  );
}
