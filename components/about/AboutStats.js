const stats = [
  { value: '5+',   label: 'Years of\ncraftsmanship' },
  { value: '10K+', label: 'Happy clients\nworldwide' },
  { value: '200+', label: 'Unique designs\neach season' },
  { value: '15+',  label: 'Countries\nwe ship to' },
];

/*
  Border logic for 2-col mobile / 4-col desktop grid:
  i=0: border-r  + border-b (desktop: no bottom)
  i=1: border-b  (desktop: no bottom + add border-r)
  i=2: border-r  (no border-b)
  i=3: no borders
*/
const borderClass = [
  'border-r border-b border-[#EADDD3] md:border-b-0',
  'border-b border-[#EADDD3] md:border-b-0 md:border-r',
  'border-r border-[#EADDD3]',
  '',
];

export default function AboutStats() {
  return (
    <section className="bg-[#F8F1EB] py-16 md:py-20">
      <div className="page-container">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-6 md:px-10 lg:px-14 py-10 md:py-12 text-center ${borderClass[i]}`}
            >
              {/* Value */}
              <p
                className="font-serif font-light text-[#EFA67A] leading-none mb-4"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)' }}
              >
                {s.value}
              </p>
              {/* Label */}
              <p className="text-[#8B7D74] text-[13px] font-light leading-[1.7] whitespace-pre-line">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
