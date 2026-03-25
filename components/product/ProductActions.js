/* ProductActions — luxury CTA area: Add to Bag + Purchase Now */

/* Thin bag icon */
function BagIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

/* Thin check icon */
function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function ProductActions({ onAddToCart, onBuyNow, inStock, adding }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 mb-8">

      {/* ── Primary: Add to Bag ── */}
      <button
        type="button"
        onClick={onAddToCart}
        disabled={!inStock || adding}
        className={`
          flex-1 flex items-center justify-center gap-2.5
          h-[54px] rounded-[18px]
          text-[12px] font-medium tracking-[0.12em] uppercase
          transition-all duration-300
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EFA67A]/40
          ${!inStock
            ? 'bg-[#F8F1EB] text-[#8B7D74] cursor-not-allowed'
            : adding
              ? 'bg-[#E39B74] text-white shadow-[0_6px_20px_rgba(239,166,122,0.32)] cursor-default'
              : 'bg-[#EFA67A] text-white hover:bg-[#E39B74] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(239,166,122,0.38)] active:translate-y-0 active:shadow-none'
          }
        `}
      >
        {adding ? (
          <>
            <CheckIcon />
            <span>Added to Bag</span>
          </>
        ) : (
          <>
            <BagIcon />
            <span>{inStock ? 'Add to Bag' : 'Unavailable'}</span>
          </>
        )}
      </button>

      {/* ── Secondary: Purchase Now ── */}
      <button
        type="button"
        onClick={onBuyNow}
        disabled={!inStock}
        className={`
          flex-1 flex items-center justify-center
          h-[54px] rounded-[18px]
          text-[12px] font-medium tracking-[0.12em] uppercase
          border transition-all duration-300
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F1A17]/20
          ${inStock
            ? 'border-[#1F1A17] text-[#1F1A17] hover:bg-[#1F1A17] hover:text-white hover:-translate-y-0.5 active:translate-y-0'
            : 'border-[#EADDD3] text-[#8B7D74] cursor-not-allowed'
          }
        `}
      >
        Purchase Now
      </button>

    </div>
  );
}
