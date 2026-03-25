export default function BrandStorySection() {
  return (
    <section className="page-container section-pad">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 xl:gap-28 items-center">

        {/* ── Text column ── */}
        <div className="lg:col-span-6 xl:col-span-5 order-2 lg:order-1">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-[#EFA67A]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#8B7D74]">
              The Beginning
            </span>
          </div>

          {/* Heading */}
          <h2
            className="font-serif font-light leading-[1.1] text-[#1F1A17] mb-10"
            style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)' }}
          >
            From a Small Studio<br />
            to a Global Brand
          </h2>

          {/* Pull quote */}
          <blockquote className="border-l-2 border-[#EFA67A]/70 pl-5 mb-10">
            <p className="font-serif italic text-[19px] text-[#5E5148] leading-[1.7] font-light">
              &ldquo;Fashion should feel as good as it looks — beautiful,
              intentional, and deeply personal.&rdquo;
            </p>
            <cite className="text-[10px] uppercase tracking-[0.26em] text-[#8B7D74] mt-3 block not-italic">
              — Linh Tran, Founder
            </cite>
          </blockquote>

          {/* Body text */}
          <div className="flex flex-col gap-5 text-[#5E5148] text-[15px] font-light leading-[1.85]">
            <p>
              LALLA started in 2019 in a small studio in Ho Chi Minh City,
              where our founder Linh Tran sketched designs late into the night
              — driven by a vision of clothing that bridged Vietnamese
              craftsmanship with contemporary global fashion.
            </p>
            <p>
              What began as a collection of ten hand-crafted dresses has grown
              into a beloved brand worn by women across Southeast Asia and
              beyond. Each piece still carries the same DNA of thoughtful
              design, quality materials, and meticulous attention to detail.
            </p>
            <p>
              Today, LALLA stands for more than fashion — it&apos;s a community
              of women who believe in dressing with intention, supporting
              sustainable practices, and celebrating individuality in every
              form.
            </p>
          </div>
        </div>

        {/* ── Image column ── */}
        <div className="lg:col-span-6 xl:col-span-7 order-1 lg:order-2 relative">
          {/* Decorative background layer */}
          <div className="absolute -bottom-5 -right-5 w-[85%] h-[85%] bg-[#F6E7DD] rounded-[24px] pointer-events-none" />

          {/* Image */}
          <div className="relative overflow-hidden rounded-[24px] shadow-[0_12px_48px_rgba(31,26,23,0.08)]">
            <img
              src="/feature.jpg"
              alt="LALLA studio — where it all began"
              className="w-full aspect-[4/5] object-cover object-center"
            />
            {/* Subtle inner overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F1A17]/8 to-transparent" />
          </div>

          {/* Caption */}
          <p className="relative mt-4 text-[11px] uppercase tracking-[0.24em] text-[#8B7D74] text-right font-light">
            Our first studio &mdash; Ho Chi Minh City, 2019
          </p>
        </div>

      </div>
    </section>
  );
}
