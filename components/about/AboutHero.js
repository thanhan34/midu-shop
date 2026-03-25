import Link from 'next/link';

export default function AboutHero() {
  return (
    <section className="page-container pt-24 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-4xl mx-auto text-center">

        {/* ── Eyebrow ── */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="w-10 h-px bg-[#EFA67A] opacity-60" />
          <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#8B7D74]">
            Our Story
          </span>
          <span className="w-10 h-px bg-[#EFA67A] opacity-60" />
        </div>

        {/* ── Headline ── */}
        <h1
          className="font-serif font-light leading-[1.05] tracking-[-0.02em] text-[#1F1A17] mb-8"
          style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
        >
          Fashion with a{' '}
          <em className="italic text-[#EFA67A]">Purpose</em>
        </h1>

        {/* ── Divider ── */}
        <div className="flex items-center justify-center mb-8">
          <span className="w-16 h-px bg-[#EADDD3]" />
        </div>

        {/* ── Body copy ── */}
        <p className="text-[#5E5148] text-[17px] md:text-[18px] font-light leading-[1.8] max-w-2xl mx-auto mb-12">
          LALLA was born from a simple belief — that fashion should feel as good
          as it looks. We design timeless, thoughtful pieces for women who value
          both style and substance.
        </p>

        {/* ── CTAs ── */}
        <div className="flex items-center justify-center gap-6 flex-wrap">
          <Link href="/shop">
            <a className="btn-primary">Explore Collection</a>
          </Link>
          <Link href="/contact">
            <a className="btn-text">
              Get in Touch
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </Link>
        </div>

      </div>
    </section>
  );
}
