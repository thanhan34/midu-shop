import Link from 'next/link';
import CollectionItem from './CollectionItem';

const items = [
  { id: 'product01', title: 'Linen Wrap Dress', img: '/product01.jpg', price: 189, badge: 'New' },
  { id: 'product02', title: 'Silk Slip Skirt', img: '/product02.jpg', price: 145, originalPrice: 195 },
  { id: 'product03', title: 'Cotton Blazer', img: '/product03.jpg', price: 220 },
  { id: 'product04', title: 'Fluid Wide-Leg Trousers', img: '/product04.jpg', price: 165 },
  { id: 'product05', title: 'Cropped Linen Shirt', img: '/product05.jpg', price: 98, badge: 'Sale', originalPrice: 135 },
  { id: 'product06', title: 'Midi Slip Dress', img: '/product06.jpg', price: 175 },
];

export default function Collection() {
  return (
    <section className="bg-[#FFFCF8] py-20 md:py-28">
      <div className="max-w-[1320px] mx-auto px-5 md:px-10 lg:px-16">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#EFA67A]" />
              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#8B7D74]">
                Curated for You
              </span>
            </div>
            <h2
              className="font-serif font-light text-[#1F1A17] leading-[1.1]"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}
            >
              The Current Edit
            </h2>
          </div>

          <Link href="/shop">
            <a className="btn-text self-start sm:self-auto whitespace-nowrap pb-0.5">
              View All Pieces
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </Link>
        </div>

        {/* ── Product Grid — 3 cols desktop, 2 tablet, 1 mobile ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-12">
          {items.map((item) => (
            <CollectionItem key={item.id} {...item} />
          ))}
        </div>

        {/* ── CTA row ── */}
        <div className="text-center mt-16">
          <Link href="/shop">
            <a className="btn-outline">
              Discover the Full Collection
            </a>
          </Link>
        </div>

      </div>
    </section>
  );
}
