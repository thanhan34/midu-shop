/* ProductPrice — refined price hierarchy, no promo-box aggression */

export default function ProductPrice({ price, originalPrice }) {
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <div className="mb-8">

      {/* Price row */}
      <div className="flex items-baseline flex-wrap gap-x-4 gap-y-1">

        {/* Current price — serif, warm accent, never aggressive */}
        <span
          className="font-serif font-light text-[#EFA67A] leading-none tracking-[-0.01em]"
          style={{ fontSize: 'clamp(1.75rem, 3vw, 2.1rem)' }}
        >
          ${price.toLocaleString()}
        </span>

        {originalPrice && (
          <>
            {/* Original price — very muted */}
            <span className="text-[#8B7D74] text-base font-light line-through tracking-[0.01em]">
              ${originalPrice.toLocaleString()}
            </span>

            {/* Discount chip — subtle, not promotional */}
            <span
              className="inline-flex items-center px-2.5 py-0.5 rounded-full
                         bg-[#F6E7DD] text-[#8B7D74]
                         text-[10px] font-medium tracking-[0.14em] uppercase"
            >
              −{discount}%
            </span>
          </>
        )}
      </div>

      {/* Micro note */}
      <p className="text-[11px] font-light text-[#8B7D74] tracking-[0.05em] mt-2">
        All taxes included · Complimentary delivery on orders over $500
      </p>

    </div>
  );
}
