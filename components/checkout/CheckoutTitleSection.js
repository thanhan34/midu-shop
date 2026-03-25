/* ─────────────────────────────────────────────
   CheckoutTitleSection
   Luxury editorial page intro for Checkout —
   eyebrow · serif title · accent line · helper.
   Mirrors CartTitleSection aesthetic language.
───────────────────────────────────────────── */

export default function CheckoutTitleSection() {
  return (
    <section className="py-12 md:py-16 border-b border-[#EADDD3]">
      <div className="page-container">

        {/* Eyebrow */}
        <p className="section-label mb-5">Secure Checkout</p>

        {/* Title block */}
        <div>
          <h1
            className="font-serif text-[clamp(2.2rem,4.5vw,3.5rem)]
                       leading-[1.08] tracking-[-0.02em] text-[#1F1A17]"
          >
            Complete Your Order
          </h1>

          {/* Accent line */}
          <span className="mt-4 block w-12 h-px bg-[#EFA67A]" />

          {/* Subtext — very tối giản */}
          <p className="mt-4 text-[#8B7D74] text-sm font-light tracking-wide">
            Take your time — your selections are waiting.
          </p>
        </div>
      </div>
    </section>
  );
}
