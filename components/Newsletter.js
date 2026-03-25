import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section className="bg-[#F6E7DD] py-20 md:py-24">
      <div className="max-w-[1320px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="max-w-2xl mx-auto text-center">

          {/* Label */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-8 h-px bg-[#EFA67A]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#8B7D74]">
              Private Access
            </span>
            <span className="w-8 h-px bg-[#EFA67A]" />
          </div>

          <h2
            className="font-serif font-light text-[#1F1A17] leading-[1.1] mb-5"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
          >
            Join the inner circle.
          </h2>

          <p className="text-[#5E5148] text-[15px] font-light leading-relaxed mb-10 max-w-md mx-auto">
            Be the first to receive new arrivals, exclusive offers, and the quiet stories 
            behind each collection. No noise — only what matters.
          </p>

          {submitted ? (
            /* ── Success state ── */
            <div className="inline-flex items-center gap-3 bg-[#FFFCF8] border border-[#EADDD3] rounded-full px-8 py-4 shadow-soft">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EFA67A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span className="text-[#5E5148] text-sm font-light">
                You're in. Welcome to LALLA.
              </span>
            </div>
          ) : (
            /* ── Form ── */
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="input-luxury flex-1 !rounded-full !px-6 !bg-[#FFFCF8]"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          )}

          <p className="text-[#8B7D74] text-[11px] font-light tracking-wide mt-5">
            Unsubscribe at any time. No spam, ever.
          </p>
        </div>
      </div>
    </section>
  );
}
