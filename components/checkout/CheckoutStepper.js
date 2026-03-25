/* ─────────────────────────────────────────────
   CheckoutStepper
   Refined multi-step progress indicator —
   luxury guided flow, not wizard form.
   Active: filled accent circle · Completed: ✓
   Connecting line transitions on step advance.
───────────────────────────────────────────── */

const STEPS = [
  { num: 1, label: 'Shipping' },
  { num: 2, label: 'Payment' },
  { num: 3, label: 'Confirm'  },
];

export default function CheckoutStepper({ step }) {
  return (
    <div className="py-8 md:py-10 border-b border-[#EADDD3]">
      <div className="page-container">
        <div className="flex items-start justify-center">
          {STEPS.map(({ num, label }, i) => {
            const done   = step > num;
            const active = step === num;

            return (
              <div key={num} className="flex items-start">

                {/* Step indicator + label */}
                <div className="flex flex-col items-center gap-2.5">

                  {/* Circle */}
                  <div
                    className={[
                      'w-10 h-10 rounded-full flex items-center justify-center',
                      'border-2 transition-all duration-300',
                      done
                        ? 'border-[#EFA67A] bg-[#EFA67A] shadow-[0_4px_14px_rgba(239,166,122,0.32)]'
                        : active
                          ? 'border-[#EFA67A] bg-white shadow-[0_0_0_4px_rgba(239,166,122,0.12)]'
                          : 'border-[#EADDD3] bg-white',
                    ].join(' ')}
                  >
                    {done ? (
                      /* Checkmark for completed steps */
                      <svg
                        style={{ width: 17, height: 17 }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        className="text-white"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <span
                        className={[
                          'font-sans text-sm font-medium transition-colors leading-none',
                          active ? 'text-[#EFA67A]' : 'text-[#8B7D74]',
                        ].join(' ')}
                      >
                        {num}
                      </span>
                    )}
                  </div>

                  {/* Label */}
                  <span
                    className={[
                      'text-[11px] tracking-[0.1em] uppercase font-medium transition-colors',
                      active || done ? 'text-[#1F1A17]' : 'text-[#8B7D74]',
                    ].join(' ')}
                  >
                    {label}
                  </span>
                </div>

                {/* Connector line (not after last step) */}
                {i < STEPS.length - 1 && (
                  <div
                    className={[
                      'h-px mx-3 sm:mx-5 mt-5',
                      'w-16 sm:w-24 md:w-36',
                      'transition-all duration-500',
                      step > num ? 'bg-[#EFA67A]' : 'bg-[#EADDD3]',
                    ].join(' ')}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
