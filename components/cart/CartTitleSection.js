/* ─────────────────────────────────────────────
   CartTitleSection
   Luxury editorial page intro — eyebrow + serif
   title + optional subtext + "Clear Cart" ghost.
───────────────────────────────────────────── */

export default function CartTitleSection({ itemCount, onClearCart }) {
  return (
    <section className="py-12 md:py-16 border-b border-[#EADDD3]">
      <div className="page-container">

        {/* Eyebrow */}
        <p className="section-label mb-5">My Collection</p>

        {/* Title row */}
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1
              className="font-serif text-[clamp(2.4rem,5vw,3.75rem)]
                         leading-[1.08] tracking-[-0.02em] text-[#1F1A17]"
            >
              Shopping Cart
            </h1>

            {/* Accent line */}
            <span className="mt-4 block w-12 h-px bg-[#EFA67A]" />

            {/* Subtext — very subtle, tối giản */}
            <p className="mt-4 text-[#8B7D74] text-sm font-light tracking-wide">
              {itemCount === 1
                ? '1 piece curated for you'
                : `${itemCount} pieces curated for you`}
            </p>
          </div>

          {/* Clear Cart — muted text action */}
          {itemCount > 0 && (
            <button
              onClick={onClearCart}
              className="inline-flex items-center gap-1.5
                         text-[#8B7D74] text-xs font-medium tracking-[0.08em] uppercase
                         border-b border-transparent
                         hover:text-[#5E5148] hover:border-[#EADDD3]
                         transition-all duration-200 pb-0.5
                         focus-visible:outline-none"
              aria-label="Clear all items from cart"
            >
              <svg
                className="w-3.5 h-3.5 opacity-70"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              Clear all
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
