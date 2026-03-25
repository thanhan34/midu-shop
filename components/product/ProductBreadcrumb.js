import Link from 'next/link';

export default function ProductBreadcrumb({ category, title }) {
  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: category, href: `/shop?category=${category}` },
  ];

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-2.5 mb-10 md:mb-14 overflow-x-auto scrollbar-none"
    >
      {crumbs.map((crumb, i) => (
        <span key={crumb.href} className="flex items-center gap-2.5 flex-shrink-0">
          <Link href={crumb.href}>
            <a className="text-[11px] font-light tracking-[0.14em] uppercase text-[#8B7D74] hover:text-[#5E5148] transition-colors duration-200 whitespace-nowrap">
              {crumb.label}
            </a>
          </Link>
          <span className="text-[#EADDD3] text-[10px] select-none">—</span>
        </span>
      ))}
      <span className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#1F1A17] truncate max-w-[160px]">
        {title}
      </span>
    </nav>
  );
}
