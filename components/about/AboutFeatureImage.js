export default function AboutFeatureImage() {
  return (
    <section className="page-container pb-16 md:pb-20">
      {/* ── Campaign image frame ── */}
      <div className="relative overflow-hidden rounded-[28px] md:rounded-[32px]">
        <div
          className="aspect-[16/7] md:aspect-[21/8] overflow-hidden"
          style={{ borderRadius: 'inherit' }}
        >
          <img
            src="/feature2 (2).jpg"
            alt="LALLA — SS Collection 2025"
            className="w-full h-full object-cover object-center scale-[1.01]"
          />
          {/* Very subtle warm vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F1A17]/12 via-transparent to-transparent" />
        </div>
      </div>

      {/* ── Editorial caption row ── */}
      <div className="flex items-center justify-between mt-4 px-1">
        <span className="text-[11px] uppercase tracking-[0.24em] text-[#8B7D74] font-light">
          LALLA — SS Collection 2025
        </span>
        <span className="text-[11px] uppercase tracking-[0.24em] text-[#8B7D74] font-light">
          Ho Chi Minh City
        </span>
      </div>
    </section>
  );
}
