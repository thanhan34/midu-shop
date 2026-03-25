/* ─────────────────────────────────────────────
   ShippingFormCard
   Step 1: Luxury shipping information form.
   Premium surface · refined fields · airy grid.
   Mirrors the calm + trustworthy form aesthetic
   expected of a luxury fashion brand checkout.
───────────────────────────────────────────── */
import Link from 'next/link';
import { FormInput, FormTextarea } from './CheckoutFormFields';

export default function ShippingFormCard({ form, onChange, onSubmit }) {
  return (
    <div
      className="
        bg-white border border-[#EADDD3]
        rounded-[24px]
        shadow-[0_4px_32px_rgba(31,26,23,0.05)]
        p-8 md:p-10
        animate-fade-in
      "
    >
      {/* ── Section header ── */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div
            className="
              w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
              border border-[#EFA67A] bg-[rgba(239,166,122,0.08)]
            "
          >
            <span className="text-[#EFA67A] text-sm font-medium font-sans leading-none">
              1
            </span>
          </div>
          <p className="section-label">Delivery Details</p>
        </div>
        <h2
          className="font-serif text-[1.75rem] leading-tight
                     tracking-[-0.015em] text-[#1F1A17]"
        >
          Shipping Information
        </h2>
        <span className="mt-3 block w-8 h-px bg-[#EFA67A]" />
      </div>

      {/* ── Form ── */}
      <form onSubmit={onSubmit} noValidate>
        <div className="flex flex-col gap-5">

          {/* Row 1: Full Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FormInput
              label="Full Name"
              name="fullName"
              placeholder="Your full name"
              value={form.fullName}
              onChange={onChange}
              required
              autoComplete="name"
            />
            <FormInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={form.email}
              onChange={onChange}
              required
              autoComplete="email"
            />
          </div>

          {/* Row 2: Phone + Country */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <FormInput
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="+84 123 456 789"
              value={form.phone}
              onChange={onChange}
              required
              autoComplete="tel"
            />
            <FormInput
              label="Country"
              name="country"
              placeholder="Vietnam"
              value={form.country}
              onChange={onChange}
              required
              autoComplete="country-name"
            />
          </div>

          {/* Row 3: Street Address (full width) */}
          <FormInput
            label="Street Address"
            name="address"
            placeholder="123 Example Street, District 1"
            value={form.address}
            onChange={onChange}
            required
            autoComplete="street-address"
          />

          {/* Row 4: City + State + ZIP */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <FormInput
              label="City"
              name="city"
              placeholder="Ho Chi Minh City"
              value={form.city}
              onChange={onChange}
              required
              autoComplete="address-level2"
            />
            <FormInput
              label="State / Province"
              name="state"
              placeholder="Ho Chi Minh"
              value={form.state}
              onChange={onChange}
              autoComplete="address-level1"
            />
            <FormInput
              label="ZIP / Postal Code"
              name="zip"
              placeholder="70000"
              value={form.zip}
              onChange={onChange}
              autoComplete="postal-code"
            />
          </div>

          {/* Row 5: Order Note */}
          <FormTextarea
            label="Order Note"
            name="note"
            placeholder="Any special instructions for your order or delivery…"
            value={form.note}
            onChange={onChange}
            rows={3}
            optional
          />
        </div>

        {/* ── Separator ── */}
        <div className="border-t border-[#EADDD3] mt-8 mb-7" />

        {/* ── CTA Actions ── */}
        <div className="flex flex-col sm:flex-row gap-3">

          {/* Back to Cart — secondary ghost */}
          <Link href="/cart">
            <a
              className="
                flex-1 inline-flex items-center justify-center gap-2
                px-6 py-4 rounded-[16px]
                border border-[#EADDD3] text-[#5E5148]
                text-sm font-medium tracking-wide
                transition-all duration-250
                hover:border-[#1F1A17] hover:text-[#1F1A17] hover:-translate-y-0.5
                active:translate-y-0
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F1A17]/10
              "
            >
              <svg
                className="w-4 h-4 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Cart
            </a>
          </Link>

          {/* Continue to Payment — primary accent */}
          <button
            type="submit"
            className="
              flex-1 inline-flex items-center justify-center gap-2.5
              bg-[#EFA67A] text-white
              text-sm font-medium tracking-[0.05em]
              px-6 py-4 rounded-[16px]
              shadow-[0_6px_24px_rgba(239,166,122,0.28)]
              hover:bg-[#E39B74]
              hover:-translate-y-0.5
              hover:shadow-[0_10px_32px_rgba(239,166,122,0.38)]
              active:translate-y-0 active:shadow-[0_4px_16px_rgba(239,166,122,0.20)]
              transition-all duration-250
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EFA67A]/40
            "
          >
            Continue to Payment
            <svg
              className="w-4 h-4 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
