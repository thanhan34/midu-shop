import { useState } from 'react';

const BADGE_STYLES = {
  New:        { label: 'New Arrival',  cls: 'bg-[#1F1A17] text-white' },
  Bestseller: { label: 'Bestseller',   cls: 'bg-[#F6E7DD] text-[#5E5148]' },
  Sale:       { label: 'Sale',         cls: 'bg-white border border-[#EADDD3] text-[#8B7D74]' },
  Limited:    { label: 'Limited Edit', cls: 'bg-[#F6E7DD] text-[#5E5148]' },
};

export default function ProductGallery({ img, title, badge, inStock }) {
  const [zoomed, setZoomed] = useState(false);
  const [activeThumb, setActiveThumb] = useState(0);

  const badgeCfg = badge ? (BADGE_STYLES[badge] || { label: badge, cls: 'bg-[#F6E7DD] text-[#5E5148]' }) : null;

  /* Simulate 3 product angles (all same image for now) */
  const thumbs = [img, img, img];

  return (
    <div className="animate-fade-in select-none">

      {/* ── Main Image ── */}
      <div className="relative">

        {/* Badge */}
        {badgeCfg && (
          <div className="absolute top-5 left-5 z-20">
            <span
              className={`inline-flex items-center px-3.5 py-1.5 rounded-full
                          text-[10px] font-medium tracking-[0.2em] uppercase ${badgeCfg.cls}`}
            >
              {badgeCfg.label}
            </span>
          </div>
        )}

        {/* Out-of-stock veil */}
        {!inStock && (
          <div className="absolute inset-0 z-20 bg-[#FFFCF8]/75 backdrop-blur-[3px]
                          flex items-center justify-center rounded-2xl md:rounded-[28px]">
            <span className="px-6 py-2.5 bg-white border border-[#EADDD3] rounded-full
                             text-[11px] font-medium tracking-[0.2em] uppercase text-[#8B7D74]">
              Currently Unavailable
            </span>
          </div>
        )}

        {/* Image container */}
        <div
          onClick={() => setZoomed(!zoomed)}
          className={`relative overflow-hidden bg-[#F8F1EB] rounded-2xl md:rounded-[28px]
                      transition-all duration-300
                      ${zoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
          style={{ aspectRatio: '3 / 4' }}
        >
          <img
            src={thumbs[activeThumb]}
            alt={title}
            className={`w-full h-full object-cover object-center
                        transition-transform duration-700
                        ${zoomed ? 'scale-[1.12]' : 'scale-100 hover:scale-[1.04]'}`}
          />

          {/* Soft vignette edges — purely cosmetic */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl md:rounded-[28px]"
               style={{ boxShadow: 'inset 0 0 60px rgba(248,241,235,0.3)' }} />
        </div>

        {/* Zoom hint */}
        <div className="absolute bottom-4 right-4 z-10 pointer-events-none">
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/85 backdrop-blur-sm
                          rounded-full border border-[#EADDD3]/60">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none"
                 stroke="#8B7D74" strokeWidth="2" strokeLinecap="round">
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
            </svg>
            <span className="text-[#8B7D74] text-[9px] tracking-[0.12em] uppercase">
              {zoomed ? 'Reset' : 'Zoom'}
            </span>
          </div>
        </div>
      </div>

      {/* ── Thumbnail Strip ── */}
      <div className="flex gap-3 mt-3.5">
        {thumbs.map((src, i) => (
          <button
            key={i}
            onClick={() => { setActiveThumb(i); setZoomed(false); }}
            className={`relative flex-1 overflow-hidden rounded-xl
                        transition-all duration-200 focus-visible:outline-none
                        ${activeThumb === i
                          ? 'ring-1 ring-[#EFA67A]/60 ring-offset-2 ring-offset-[#FFFCF8]'
                          : 'opacity-45 hover:opacity-70'}`}
            style={{ aspectRatio: '3 / 4' }}
            aria-label={`View angle ${i + 1}`}
          >
            <img src={src} alt={`${title} view ${i + 1}`}
                 className="w-full h-full object-cover object-center" />
          </button>
        ))}
      </div>

    </div>
  );
}
