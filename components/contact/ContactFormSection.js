import { useState } from 'react';
import ContactMapCard from './ContactMapCard';
import ContactSocialCard from './ContactSocialCard';

const subjectOptions = [
  { value: '', label: 'Select a topic…' },
  { value: 'order', label: 'Order & Shipping' },
  { value: 'return', label: 'Returns & Exchanges' },
  { value: 'product', label: 'Product Enquiry' },
  { value: 'collab', label: 'Collaboration' },
  { value: 'press', label: 'Press & Media' },
  { value: 'other', label: 'Other' },
];

/* ── Spinner icon ── */
function SpinnerIcon() {
  return (
    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </svg>
  );
}

/* ── Check icon ── */
function CheckIcon() {
  return (
    <svg className="w-6 h-6 text-[#EFA67A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

/* ── Chevron for select ── */
function ChevronIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 9l-7 7-7-7" />
    </svg>
  );
}

/* ── Refined form label ── */
function FieldLabel({ children, required }) {
  return (
    <label className="block text-[10px] font-medium uppercase tracking-[0.22em] text-[#8B7D74] mb-2">
      {children}
      {required && <span className="ml-1 text-[#EFA67A]">*</span>}
    </label>
  );
}

export default function ContactFormSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitted(true);
      setSubmitting(false);
    }, 1500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="page-container pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">

        {/* ══════════════════════════════════════
            Form Panel
        ══════════════════════════════════════ */}
        <div className="lg:col-span-3">
          <div
            className="bg-white border border-[#EADDD3] rounded-[28px] overflow-hidden"
            style={{ boxShadow: '0 4px 32px rgba(31,26,23,0.06)' }}
          >
            {/* ── Panel header strip ── */}
            <div className="px-8 md:px-10 pt-10 pb-8 border-b border-[#EADDD3]/60">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-px bg-[#EFA67A]" />
                <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#8B7D74]">
                  Send a Message
                </span>
              </div>
              <h2
                className="font-serif font-light text-[#1F1A17]"
                style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
              >
                We're Listening
              </h2>
              <p className="text-[#8B7D74] text-[14px] font-light mt-2 leading-relaxed">
                Share your thoughts and we'll respond within 24 hours.
              </p>
            </div>

            {/* ── Body ── */}
            <div className="px-8 md:px-10 py-8">
              {submitted ? (
                /* ── Success state ── */
                <div className="text-center py-10">
                  <div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-6"
                    style={{
                      background: 'rgba(239,166,122,0.10)',
                      border: '1px solid rgba(239,166,122,0.22)',
                    }}
                  >
                    <CheckIcon />
                  </div>

                  <h3
                    className="font-serif font-light text-[#1F1A17] mb-4"
                    style={{ fontSize: 'clamp(1.3rem, 2vw, 1.6rem)' }}
                  >
                    Message Received
                  </h3>

                  <div className="flex justify-center mb-5">
                    <span className="w-10 h-px bg-[#EFA67A]/40" />
                  </div>

                  <p className="text-[#5E5148] text-[14px] font-light leading-[1.85] max-w-xs mx-auto mb-8">
                    Thank you,{' '}
                    <span className="text-[#1F1A17]">{form.name}</span>. We'll
                    be in touch at{' '}
                    <span className="text-[#1F1A17]">{form.email}</span> very
                    soon.
                  </p>

                  <button onClick={handleReset} className="btn-outline">
                    Send Another Message
                  </button>
                </div>
              ) : (
                /* ── Form ── */
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <FieldLabel required>Full Name</FieldLabel>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="input-luxury"
                      />
                    </div>
                    <div>
                      <FieldLabel required>Email Address</FieldLabel>
                      <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="input-luxury"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <FieldLabel>Subject</FieldLabel>
                    <div className="relative">
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="input-luxury cursor-pointer appearance-none pr-10"
                      >
                        {subjectOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      {/* Custom chevron */}
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#8B7D74]">
                        <ChevronIcon />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <FieldLabel required>Your Message</FieldLabel>
                    <textarea
                      name="message"
                      placeholder="Tell us how we can help…"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="input-luxury resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-primary w-full justify-center py-4 text-[13px] tracking-[0.06em]"
                    >
                      {submitting ? (
                        <span className="flex items-center gap-2">
                          <SpinnerIcon />
                          Sending…
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                    <p className="text-center text-[11px] text-[#8B7D74] font-light mt-3 tracking-wide">
                      We typically respond within 24 hours
                    </p>
                  </div>

                </form>
              )}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            Sidebar: Map Card + Social Card
        ══════════════════════════════════════ */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          <ContactMapCard />
          <ContactSocialCard />
        </div>

      </div>
    </section>
  );
}
