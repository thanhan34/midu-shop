export default function ContactHero() {
  return (
    <section className="page-container pt-24 pb-16 md:pt-36 md:pb-20">
      <div className="max-w-3xl mx-auto text-center">

        {/* ── Eyebrow ── */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="w-10 h-px bg-[#EFA67A] opacity-60" />
          <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#8B7D74]">
            We'd Love to Hear From You
          </span>
          <span className="w-10 h-px bg-[#EFA67A] opacity-60" />
        </div>

        {/* ── Headline ── */}
        <h1
          className="font-serif font-light leading-[1.05] tracking-[-0.02em] text-[#1F1A17] mb-8"
          style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
        >
          Every Conversation{' '}
          <em className="italic text-[#EFA67A]">Matters</em>
        </h1>

        {/* ── Thin divider ── */}
        <div className="flex items-center justify-center mb-8">
          <span className="w-16 h-px bg-[#EADDD3]" />
        </div>

        {/* ── Body copy ── */}
        <p className="text-[#5E5148] text-[17px] md:text-[18px] font-light leading-[1.85] max-w-xl mx-auto">
          Whether you have a question about your order, wish to collaborate,
          or simply want to share a thought — our team is always here for you.
        </p>

      </div>
    </section>
  );
}
