/* SizeSelector — refined chips, not utility controls */

export default function SizeSelector({ sizes, selectedSize, onSelect, error }) {
  return (
    <div className="mb-8">

      {/* Label row */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span
            className={`text-[11px] font-medium tracking-[0.18em] uppercase transition-colors duration-200 ${
              error ? 'text-[#E39B74]' : 'text-[#1F1A17]'
            }`}
          >
            {error ? 'Please select a size to continue' : 'Select Size'}
          </span>
          {selectedSize && !error && (
            <span className="text-[11px] font-light text-[#8B7D74]">— {selectedSize}</span>
          )}
        </div>

        {/* Size guide link */}
        <button
          type="button"
          className="text-[11px] font-light text-[#8B7D74] tracking-[0.06em]
                     border-b border-[#EADDD3] pb-px
                     hover:text-[#5E5148] hover:border-[#8B7D74]
                     transition-all duration-200 focus-visible:outline-none"
        >
          Size Guide
        </button>
      </div>

      {/* Size chips */}
      <div className="flex flex-wrap gap-2.5">
        {sizes.map((size) => {
          const isSelected = selectedSize === size;
          return (
            <button
              key={size}
              type="button"
              onClick={() => onSelect(size)}
              className={`
                relative h-11 min-w-[52px] px-4 rounded-[14px]
                text-[11px] font-medium tracking-[0.12em] uppercase
                border transition-all duration-200
                focus-visible:outline-none
                ${isSelected
                  ? 'border-[#EFA67A] text-[#EFA67A] bg-[#EFA67A]/[0.07]'
                  : error
                    ? 'border-[#EFA67A]/30 text-[#8B7D74] bg-white hover:border-[#EFA67A]/50 hover:text-[#5E5148]'
                    : 'border-[#EADDD3] text-[#5E5148] bg-white hover:border-[#EFA67A]/40 hover:text-[#1F1A17]'
                }
              `}
              aria-pressed={isSelected}
            >
              {size}
              {/* Active dot */}
              {isSelected && (
                <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#EFA67A]" />
              )}
            </button>
          );
        })}
      </div>

    </div>
  );
}
