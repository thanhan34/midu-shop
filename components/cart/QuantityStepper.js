/* ─────────────────────────────────────────────
   QuantityStepper (inline cart variant)
   Refined, compact stepper — same DNA as
   product/QuantitySelector but sized for cart row.
───────────────────────────────────────────── */

export default function QuantityStepper({ quantity, onDecrease, onIncrease }) {
  return (
    <div
      className="inline-flex items-center border border-[#EADDD3] rounded-[12px]
                 bg-[#FFFCF8] overflow-hidden"
      style={{ height: '36px' }}
    >
      {/* Decrease */}
      <button
        type="button"
        onClick={onDecrease}
        disabled={quantity <= 1}
        aria-label="Decrease quantity"
        className="w-9 h-full flex items-center justify-center
                   text-[#8B7D74] text-base font-light
                   hover:text-[#1F1A17] hover:bg-[#F8F1EB]
                   disabled:opacity-30 disabled:cursor-not-allowed
                   transition-all duration-200 focus-visible:outline-none
                   select-none"
      >
        −
      </button>

      {/* Value */}
      <span
        className="w-9 text-center text-[#1F1A17] text-sm font-medium
                   border-x border-[#EADDD3] select-none leading-none
                   flex items-center justify-center h-full"
      >
        {quantity}
      </span>

      {/* Increase */}
      <button
        type="button"
        onClick={onIncrease}
        aria-label="Increase quantity"
        className="w-9 h-full flex items-center justify-center
                   text-[#8B7D74] text-base font-light
                   hover:text-[#1F1A17] hover:bg-[#F8F1EB]
                   transition-all duration-200 focus-visible:outline-none
                   select-none"
      >
        +
      </button>
    </div>
  );
}
