/* ProductMeta — category label, editorial title, subtle rating */

function MiniStar({ filled }) {
  return (
    <svg
      className={`w-2.5 h-2.5 flex-shrink-0 ${filled ? 'text-[#EFA67A]' : 'text-[#EADDD3]'}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function ProductMeta({ category, title, rating, reviews }) {
  const rounded = Math.round(rating);

  return (
    <div className="mb-8">

      {/* Category label — uses design-system .section-label */}
      <div className="section-label mb-5 capitalize">{category}</div>

      {/* Product title — luxury serif, editorial weight */}
      <h1
        className="font-serif font-light text-[#1F1A17] leading-[1.06] tracking-[-0.015em] mb-6"
        style={{ fontSize: 'clamp(2.1rem, 4vw, 2.8rem)' }}
      >
        {title}
      </h1>

      {/* Rating — very subtle, secondary visual weight */}
      <div className="flex items-center gap-2.5">
        <div className="flex items-center gap-[3px]">
          {[1, 2, 3, 4, 5].map((s) => (
            <MiniStar key={s} filled={s <= rounded} />
          ))}
        </div>
        <span className="text-[#8B7D74] text-[11px] font-light tracking-[0.05em]">
          {rating}&ensp;·&ensp;{reviews} reviews
        </span>
      </div>

    </div>
  );
}
