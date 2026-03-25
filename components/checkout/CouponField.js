/* ─────────────────────────────────────────────
   CouponField
   Refined coupon input + apply action.
   Secondary action — compact, calm, not
   distracting from the order summary.
───────────────────────────────────────────── */
import { useState } from 'react';

export default function CouponField() {
  const [code, setCode]       = useState('');
  const [applied, setApplied] = useState(false);

  const handleApply = () => {
    if (!code.trim()) return;
    // placeholder: extend with real coupon logic
    setApplied(true);
  };

  return (
    <div className="border-t border-[#EADDD3] pt-5 mb-5">
      <p className="text-[11px] text-[#8B7D74] uppercase tracking-[0.1em] font-medium mb-3">
        Coupon Code
      </p>

      {applied ? (
        <div className="flex items-center justify-between
                        bg-[rgba(111,174,123,0.08)] border border-[rgba(111,174,123,0.25)]
                        rounded-xl px-4 py-2.5">
          <div className="flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-[#6FAE7B] flex-shrink-0" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-[#5E5148] text-xs font-medium tracking-wide">
              {code.toUpperCase()}
            </span>
          </div>
          <button
            type="button"
            onClick={() => { setCode(''); setApplied(false); }}
            className="text-[#8B7D74] text-[11px] hover:text-[#5E5148] transition-colors"
          >
            Remove
          </button>
        </div>
      ) : (
        <div className="flex gap-2">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleApply()}
            placeholder="Enter code"
            className="
              flex-1 px-4 py-2.5
              bg-white border border-[#EADDD3]
              text-[#1F1A17] text-sm font-light
              placeholder:text-[#C4B5AE]
              rounded-xl outline-none
              transition-all duration-200
              focus:border-[#EFA67A] focus:ring-2 focus:ring-[#EFA67A]/10
            "
          />
          <button
            type="button"
            onClick={handleApply}
            className="
              px-4 py-2.5 rounded-xl
              bg-[#F6E7DD] text-[#5E5148]
              text-[11px] font-medium tracking-[0.07em] uppercase
              border border-[#EADDD3]
              transition-all duration-200
              hover:bg-[#EFA67A] hover:text-white hover:border-[#EFA67A]
              focus-visible:outline-none
              whitespace-nowrap flex-shrink-0
            "
          >
            Apply
          </button>
        </div>
      )}
    </div>
  );
}
