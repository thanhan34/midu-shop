import { useState } from 'react';

const faqs = [
  {
    q: 'How long does shipping take?',
    a: 'Standard shipping within Vietnam takes 2–4 business days. International shipping typically takes 7–14 business days depending on your location.',
  },
  {
    q: 'What is your return policy?',
    a: "We offer a 30-day return policy for unworn items in their original condition. Simply contact our support team and we'll guide you through the process.",
  },
  {
    q: 'How do I find my size?',
    a: 'We have a detailed size guide on each product page. We recommend measuring yourself and comparing to our size chart for the best fit.',
  },
  {
    q: 'Do you offer gift wrapping?',
    a: 'Yes — you can add gift wrapping at checkout for a small additional fee. We also include a handwritten card if you provide a personal message.',
  },
  {
    q: 'Can I modify or cancel my order?',
    a: 'Orders can be modified or cancelled within 12 hours of placement. After that, our fulfilment team begins processing and changes may not be possible.',
  },
];

/* ── Expand/collapse icon ── */
function AccordionIcon({ open }) {
  return (
    <span
      className={`inline-flex items-center justify-center w-6 h-6 rounded-full border flex-shrink-0 transition-all duration-300 ${
        open
          ? 'border-[#EFA67A] bg-[#EFA67A]/10 text-[#EFA67A] rotate-180'
          : 'border-[#EADDD3] text-[#8B7D74]'
      }`}
    >
      <svg
        className="w-3 h-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 9l-7 7-7-7" />
      </svg>
    </span>
  );
}

export default function ContactFAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-[#F8F1EB] py-20 md:py-28">
      <div className="page-container">

        {/* ── Two-column header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-7">
              <span className="w-8 h-px bg-[#EFA67A]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#8B7D74]">
                Help Center
              </span>
            </div>
            <h2
              className="font-serif font-light leading-[1.1] text-[#1F1A17]"
              style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)' }}
            >
              Questions &{' '}
              <em className="italic text-[#EFA67A]">Answers</em>
            </h2>
          </div>
          <div className="lg:col-span-7 flex items-end">
            <p className="text-[#8B7D74] text-[15px] font-light leading-[1.8] max-w-md">
              Can't find what you're looking for? Use the form above to reach
              our team directly — we're always happy to help.
            </p>
          </div>
        </div>

        {/* ── Accordion ── */}
        <div className="max-w-3xl">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border-[#EADDD3] ${
                i === 0 ? 'border-t border-b' : 'border-b'
              }`}
            >
              {/* Trigger */}
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left group transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[#EFA67A]/30 rounded-sm"
              >
                <span
                  className={`text-[15px] font-light leading-snug pr-6 transition-colors duration-200 ${
                    open === i
                      ? 'text-[#EFA67A]'
                      : 'text-[#1F1A17] group-hover:text-[#5E5148]'
                  }`}
                >
                  {faq.q}
                </span>
                <AccordionIcon open={open === i} />
              </button>

              {/* Answer panel */}
              {open === i && (
                <div className="pb-7 animate-fade-in">
                  <p className="text-[#5E5148] text-[14px] font-light leading-[1.9] max-w-xl">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
