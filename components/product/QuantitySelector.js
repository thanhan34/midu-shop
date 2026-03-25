/* QuantitySelector — minimal stepper, not a utility widget */

export default function QuantitySelector({ quantity, onChange }) {
  return (
    <div className="mb-8">

      <span className="block text-[11px] font-medium tracking-[0.18em] uppercase text-[#1F1A17] mb-4">
        Quantity
      </span>

      <div
        className="inline-flex items-center border border-[#EADDD3] rounded-[14px]
                   bg-white overflow-hidden"
        style={{ height: '44px' }}
      >
        {/* Decrease */}
        <button
          type="button"
          onClick={() => onChange(Math.max(1, quantity - 1))}
          disabled={quantity <= 1}
          aria-label="Decrease quantity"
          className="w-11 h-full flex items-center justify-center
                     text-[#8B7D74] text-lg font-light
                     hover:text-[#1F1A17] hover:bg-[#F8F1EB]
                     disabled:opacity-30 disabled:cursor-not-allowed
                     transition-all duration-200 focus-visible:outline-none"
        >
          −
        </button>

        {/* Value */}
        <span
          className="w-11 text-center text-[#1F1A17] text-sm font-medium
                     border-x border-[#EADDD3] select-none leading-none
                     flex items-center justify-center h-full"
        >
          {quantity}
        </span>

        {/* Increase */}
        <button
          type="button"
          onClick={() => onChange(quantity + 1)}
          aria-label="Increase quantity"
          className="w-11 h-full flex items-center justify-center
                     text-[#8B7D74] text-lg font-light
                     hover:text-[#1F1A17] hover:bg-[#F8F1EB]
                     transition-all duration-200 focus-visible:outline-none"
        >
          +
        </button>
      </div>

    </div>
  );
}
