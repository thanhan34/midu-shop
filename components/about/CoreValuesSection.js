const values = [
  {
    number: '01',
    title: 'Premium Quality',
    desc: 'Every piece is crafted with the finest materials, ensuring lasting quality and comfort you can feel in every stitch and silhouette.',
  },
  {
    number: '02',
    title: 'Sustainable Fashion',
    desc: 'We are committed to reducing our environmental footprint through ethical sourcing, eco-friendly packaging, and mindful production.',
  },
  {
    number: '03',
    title: 'Inclusive Style',
    desc: 'Fashion for every woman. Our collections celebrate all body types and empower each individual to express their unique identity.',
  },
  {
    number: '04',
    title: 'Community First',
    desc: 'We partner with local artisans and support communities worldwide — creating meaningful, lasting impact through the power of fashion.',
  },
];

export default function CoreValuesSection() {
  return (
    <section className="bg-[#F8F1EB] py-20 md:py-28">
      <div className="page-container">

        {/* ── Section header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 md:mb-20">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-7">
              <span className="w-8 h-px bg-[#EFA67A]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#8B7D74]">
                What We Stand For
              </span>
            </div>
            <h2
              className="font-serif font-light leading-[1.1] text-[#1F1A17]"
              style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)' }}
            >
              Our Core Values
            </h2>
          </div>
          <div className="lg:col-span-7 flex items-end">
            <p className="text-[#8B7D74] text-[15px] font-light leading-[1.8] max-w-lg">
              These principles guide every decision we make — from the materials
              we choose to the communities we support and the stories we tell.
            </p>
          </div>
        </div>

        {/* ── Values grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12 lg:gap-x-20 lg:gap-y-14">
          {values.map((v) => (
            <div key={v.number} className="flex gap-7 group">

              {/* Editorial number */}
              <span
                className="font-serif font-light text-[#EADDD3] leading-none flex-shrink-0 select-none transition-colors duration-300 group-hover:text-[#EFA67A]/40"
                style={{ fontSize: 'clamp(2.25rem, 3vw, 2.75rem)', marginTop: '2px' }}
              >
                {v.number}
              </span>

              {/* Content */}
              <div className="pt-1">
                <h3
                  className="font-serif font-light text-[#1F1A17] mb-3"
                  style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)' }}
                >
                  {v.title}
                </h3>
                {/* Accent underline */}
                <div className="w-8 h-px bg-[#EFA67A]/60 mb-4 transition-all duration-300 group-hover:w-12 group-hover:bg-[#EFA67A]" />
                <p className="text-[#8B7D74] text-[14px] font-light leading-[1.85]">
                  {v.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
