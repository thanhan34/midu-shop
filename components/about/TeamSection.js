const team = [
  {
    name: 'Linh Tran',
    role: 'Founder & Creative Director',
    avatar: '/hero01.jpg',
    quote: 'Fashion should tell a story.',
  },
  {
    name: 'Mai Nguyen',
    role: 'Head of Design',
    avatar: '/hero02.jpg',
    quote: 'Every detail is intentional.',
  },
  {
    name: 'Anh Pham',
    role: 'Head of Operations',
    avatar: '/hero03.jpg',
    quote: 'Excellence in every step.',
  },
  {
    name: 'Bao Le',
    role: 'Brand & Marketing Lead',
    avatar: '/hero04.jpg',
    quote: 'Beauty speaks louder than words.',
  },
];

export default function TeamSection() {
  return (
    <section className="page-container section-pad">

      {/* ── Section header ── */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
        <div>
          <div className="flex items-center gap-3 mb-7">
            <span className="w-8 h-px bg-[#EFA67A]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#8B7D74]">
              The People
            </span>
          </div>
          <h2
            className="font-serif font-light leading-[1.1] text-[#1F1A17]"
            style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)' }}
          >
            The Minds Behind<br className="hidden md:block" /> LALLA
          </h2>
        </div>
        <p className="text-[#8B7D74] text-[14px] font-light leading-[1.8] max-w-sm md:text-right">
          Passionate creatives and dedicated artisans — united by a single
          vision of refined, purposeful fashion.
        </p>
      </div>

      {/* ── Team grid — editorial stagger ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
        {team.map((member, i) => (
          <div
            key={member.name}
            className={`group cursor-default ${
              i % 2 !== 0 ? 'md:mt-12' : ''
            }`}
          >
            {/* Portrait */}
            <div className="overflow-hidden rounded-[18px] md:rounded-[22px] bg-[#F8F1EB]">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-full aspect-[3/4] object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.045]"
              />
            </div>

            {/* Info */}
            <div className="mt-5 px-1">
              <h3
                className="font-serif font-light text-[#1F1A17] leading-snug"
                style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)' }}
              >
                {member.name}
              </h3>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#8B7D74] font-light mt-1.5 leading-relaxed">
                {member.role}
              </p>

              {/* Hover accent bar */}
              <div className="mt-3 h-px bg-[#EADDD3] relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-0 bg-[#EFA67A] transition-all duration-500 ease-out group-hover:w-full" />
              </div>

              {/* Quote — subtle, reveals on hover conceptually but always visible */}
              <p className="mt-3 text-[12px] font-light text-[#8B7D74]/70 italic font-serif leading-relaxed opacity-0 translate-y-1 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0">
                &ldquo;{member.quote}&rdquo;
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
