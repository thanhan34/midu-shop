/* ProductDetailsAccordion — refined expand/collapse for product info */
import { useState } from 'react';

function getItems(description) {
  return [
    {
      id: 'about',
      label: 'About This Piece',
      content: description,
    },
    {
      id: 'materials',
      label: 'Materials & Care',
      content:
        'Crafted from 100% premium woven fabric with a naturally soft hand feel. Dry clean only. Store folded away from direct sunlight. Do not bleach, tumble dry, or iron at high heat. Handle with care to preserve the fabric integrity.',
    },
    {
      id: 'shipping',
      label: 'Shipping & Delivery',
      content:
        'Complimentary standard delivery on all orders over $500. Standard delivery arrives within 3–5 business days. Express delivery is available at checkout. International shipping is available to select countries — duties and taxes may apply.',
    },
    {
      id: 'returns',
      label: 'Returns & Exchanges',
      content:
        'We accept returns within 30 days of delivery. Items must be unworn, unwashed, and returned in original packaging with all tags attached. To begin a return or exchange, please contact our team. Exchanges are processed within 2–3 business days of receipt.',
    },
  ];
}

/* Plus / X toggle icon */
function ToggleIcon({ open }) {
  return (
    <span
      className={`w-4 h-4 flex-shrink-0 text-[#8B7D74] transition-transform duration-300 ${open ? 'rotate-45' : 'rotate-0'}`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 5v14M5 12h14" />
      </svg>
    </span>
  );
}

export default function ProductDetailsAccordion({ description }) {
  const [openId, setOpenId] = useState('about');
  const items = getItems(description);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <div className="mt-7">
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div key={item.id} className="border-b border-[#EADDD3]">

            {/* Header trigger */}
            <button
              type="button"
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between gap-4 py-4 text-left
                         group focus-visible:outline-none"
            >
              <span
                className={`text-[11px] font-medium tracking-[0.16em] uppercase
                            transition-colors duration-200
                            ${isOpen ? 'text-[#EFA67A]' : 'text-[#1F1A17] group-hover:text-[#5E5148]'}`}
              >
                {item.label}
              </span>
              <ToggleIcon open={isOpen} />
            </button>

            {/* Collapsible body */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out
                          ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="pb-5 text-sm font-light text-[#5E5148] leading-[1.8] tracking-[0.01em]">
                {item.content}
              </p>
            </div>

          </div>
        );
      })}
    </div>
  );
}
