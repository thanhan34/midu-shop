import Link from 'next/link';

const footerLinks = {
  Collection: [
    { name: 'New Arrivals', href: '/shop?sort=newest' },
    { name: 'Dresses', href: '/shop?category=Dresses' },
    { name: 'Tops', href: '/shop?category=Tops' },
    { name: 'Accessories', href: '/shop?category=Accessories' },
  ],
  Information: [
    { name: 'About LALLA', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Shipping & Returns', href: '#' },
    { name: 'Size Guide', href: '#' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ],
};

const socialLinks = [
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'Pinterest',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.598-.299-1.482c0-1.388.806-2.428 1.808-2.428.852 0 1.265.64 1.265 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.806 1.476 1.806 1.772 0 3.137-1.867 3.137-4.563 0-2.387-1.715-4.055-4.163-4.055-2.835 0-4.498 2.126-4.498 4.323 0 .856.33 1.773.741 2.273a.3.3 0 0 1 .069.286c-.076.313-.243.995-.276 1.134-.044.183-.146.222-.338.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.966-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.938.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2Z" />
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: '#',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.69a8.18 8.18 0 0 0 4.79 1.54V6.78a4.85 4.85 0 0 1-1.03-.09Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#F8F1EB] border-t border-[#EADDD3]">
      <div className="max-w-[1320px] mx-auto px-5 md:px-10 lg:px-16 pt-16 pb-10">

        {/* ── Top row ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 lg:gap-14 mb-14">

          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            {/* Logo */}
            <Link href="/">
              <a className="inline-flex items-center gap-2 mb-5 group">
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 657 657">
                  <g transform="translate(0,657) scale(0.1,-0.1)" fill="#1F1A17">
                    <path d="M2242 3756 c-116 -212 -124 -247 -68 -314 52 -60 298 -200 506 -287 69 -29 165 -82 215 -119 55 -41 58 -39 28 15 -17 30 -54 97 -83 149 -29 52 -66 112 -82 133 -17 21 -96 82 -177 137 -171 116 -248 181 -267 227 -21 49 -18 137 7 184 11 23 19 42 17 44 -2 1 -45 -74 -96 -169z" />
                    <path d="M492 3268 l3 -603 373 -3 372 -2 0 40 0 40 -335 0 -335 0 0 565 0 565 -40 0 -40 0 2 -602z" />
                    <path d="M3420 3265 l0 -605 375 0 375 0 0 40 0 40 -337 2 -338 3 -3 563 -2 562 -35 0 -35 0 0 -605z" />
                    <path d="M4280 3265 l0 -605 375 0 375 0 0 40 0 40 -335 0 -335 0 0 565 0 565 -40 0 -40 0 0 -605z" />
                    <path d="M5587 3863 c-4 -6 -463 -1135 -484 -1189 -3 -8 8 -11 39 -10 l43 1 77 190 76 190 280 3 280 2 62 -157 c92 -232 93 -233 136 -233 34 0 36 2 30 25 -4 14 -78 206 -166 427 -87 222 -190 482 -228 578 l-69 175 -35 3 c-20 2 -38 -1 -41 -5z m173 -455 c59 -153 105 -280 102 -283 -7 -7 -477 -7 -484 0 -3 3 47 137 112 298 64 161 120 301 124 312 10 25 5 38 146 -327z" />
                    <path d="M2685 3114 c-43 -35 -183 -90 -455 -181 -281 -95 -474 -170 -558 -219 -24 -14 -56 -44 -73 -67 -35 -48 -118 -200 -148 -271 l-21 -48 37 33 c66 57 190 107 411 164 260 67 776 209 856 236 150 51 257 139 236 196 -9 23 -100 90 -191 141 -65 37 -67 37 -94 16z" />
                  </g>
                </svg>
                <span className="font-serif text-lg font-light tracking-[0.2em] text-[#1F1A17] group-hover:text-[#EFA67A] transition-colors uppercase">
                  LALLA
                </span>
              </a>
            </Link>

            <p className="text-[#8B7D74] text-sm font-light leading-relaxed max-w-[260px] mb-6">
              Timeless fashion, crafted with intention. 
              Premium pieces for the modern woman.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full border border-[#EADDD3] bg-[#FFFCF8] flex items-center justify-center text-[#8B7D74] hover:text-[#EFA67A] hover:border-[#EFA67A]/40 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#1F1A17] mb-5">
                {heading}
              </h4>
              <ul className="flex flex-col gap-3.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>
                      <a className="text-[#8B7D74] text-sm font-light hover:text-[#5E5148] transition-colors duration-200">
                        {link.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom row ── */}
        <div className="pt-8 border-t border-[#EADDD3] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#8B7D74] text-[12px] font-light">
            © 2025 LALLA Fashion. All rights reserved.
          </p>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {['Visa', 'Mastercard', 'PayPal', 'Apple Pay'].map((pm) => (
              <span
                key={pm}
                className="px-2.5 py-1 bg-[#FFFCF8] border border-[#EADDD3] rounded-md text-[#8B7D74] text-[11px] font-light"
              >
                {pm}
              </span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
