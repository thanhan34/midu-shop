/* ─────────────────────────────────────────────
   EmptyCartState
   Luxury empty cart — editorial, refined,
   brand-consistent. No playful illustrations,
   no generic ecommerce messaging.
───────────────────────────────────────────── */
import Link from 'next/link';

export default function EmptyCartState() {
  return (
    <div className="flex-1 flex items-center justify-center px-6 py-24 md:py-32">
      <div
        className="text-center max-w-sm mx-auto
                   animate-slide-up"
      >
        {/* Icon — refined bag outline */}
        <div
          className="w-16 h-16 mx-auto mb-8
                     flex items-center justify-center
                     border border-[#EADDD3] rounded-[18px]
                     bg-[#FFF8F3]"
        >
          <svg
            className="w-7 h-7 text-[#EADDD3]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </div>

        {/* Eyebrow */}
        <p className="section-label justify-center mb-4">Your Cart</p>

        {/* Heading */}
        <h2
          className="font-serif text-[2rem] leading-tight
                     tracking-[-0.02em] text-[#1F1A17] mb-4"
        >
          Nothing here yet
        </h2>

        {/* Accent line */}
        <span className="block w-10 h-px bg-[#EFA67A] mx-auto mb-6" />

        {/* Subtext */}
        <p className="text-[#8B7D74] text-sm font-light leading-relaxed mb-10">
          Your bag is empty — but every great look starts with one perfect piece.
          Explore the collection.
        </p>

        {/* CTA */}
        <Link href="/shop">
          <a className="btn-primary inline-flex">
            Discover the Collection
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </Link>

        {/* Secondary */}
        <div className="mt-5">
          <Link href="/">
            <a
              className="text-[#8B7D74] text-xs font-light tracking-wide
                         hover:text-[#5E5148] transition-colors duration-200"
            >
              Return to homepage
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
