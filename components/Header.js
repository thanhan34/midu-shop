import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCart } from '../context/CartContext';

const navLinks = [
  { name: 'Shop', href: '/shop' },
  { name: 'New Arrivals', href: '/shop?sort=newest' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

/* ── Thin Search Icon ── */
function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
    </svg>
  );
}

/* ── Thin Bag Icon ── */
function BagIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cartCount } = useCart();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* close mobile on route change */
  useEffect(() => { setMobileOpen(false); setSearchOpen(false); }, [router.pathname]);

  const isActive = (href) => {
    const path = href.split('?')[0];
    return router.pathname === path || (path !== '/' && router.pathname.startsWith(path));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <header className={`sticky top-0 z-50 glass-header transition-all duration-300 ${scrolled ? 'shadow-header' : ''}`}>
      {/* ── Main Bar ── */}
      <div className="max-w-[1320px] mx-auto flex items-center justify-between px-5 md:px-10 lg:px-16 h-16 md:h-20">

        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 group flex-shrink-0">
            {/* SVG wordmark icon */}
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 657 657">
              <g transform="translate(0,657) scale(0.1,-0.1)" fill="#1F1A17">
                <path d="M2242 3756 c-116 -212 -124 -247 -68 -314 52 -60 298 -200 506 -287 69 -29 165 -82 215 -119 55 -41 58 -39 28 15 -17 30 -54 97 -83 149 -29 52 -66 112 -82 133 -17 21 -96 82 -177 137 -171 116 -248 181 -267 227 -21 49 -18 137 7 184 11 23 19 42 17 44 -2 1 -45 -74 -96 -169z" />
                <path d="M492 3268 l3 -603 373 -3 372 -2 0 40 0 40 -335 0 -335 0 0 565 0 565 -40 0 -40 0 2 -602z" />
                <path d="M3420 3265 l0 -605 375 0 375 0 0 40 0 40 -337 2 -338 3 -3 563 -2 562 -35 0 -35 0 0 -605z" />
                <path d="M4280 3265 l0 -605 375 0 375 0 0 40 0 40 -335 0 -335 0 0 565 0 565 -40 0 -40 0 0 -605z" />
                <path d="M5587 3863 c-4 -6 -463 -1135 -484 -1189 -3 -8 8 -11 39 -10 l43 1 77 190 76 190 280 3 280 2 62 -157 c92 -232 93 -233 136 -233 34 0 36 2 30 25 -4 14 -78 206 -166 427 -87 222 -190 482 -228 578 l-69 175 -35 3 c-20 2 -38 -1 -41 -5z m173 -455 c59 -153 105 -280 102 -283 -7 -7 -477 -7 -484 0 -3 3 47 137 112 298 64 161 120 301 124 312 10 25 5 38 146 -327z" />
                <path d="M2685 3114 c-43 -35 -183 -90 -455 -181 -281 -95 -474 -170 -558 -219 -24 -14 -56 -44 -73 -67 -35 -48 -118 -200 -148 -271 l-21 -48 37 33 c66 57 190 107 411 164 260 67 776 209 856 236 150 51 257 139 236 196 -9 23 -100 90 -191 141 -65 37 -67 37 -94 16z" />
              </g>
            </svg>
            <span
              className="font-serif text-[22px] font-light tracking-[0.22em] text-[#1F1A17] group-hover:text-[#EFA67A] transition-colors duration-300 uppercase"
            >
              LALLA
            </span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className={`relative text-[13px] font-light tracking-[0.08em] transition-colors duration-200 group ${
                  isActive(link.href)
                    ? 'text-[#1F1A17]'
                    : 'text-[#8B7D74] hover:text-[#1F1A17]'
                }`}
              >
                {link.name}
                {/* Thin underline */}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-[#EFA67A] transition-all duration-300 ${
                    isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-1">
          {/* Search toggle */}
          <button
            onClick={() => { setSearchOpen(!searchOpen); setMobileOpen(false); }}
            className="w-10 h-10 flex items-center justify-center text-[#8B7D74] hover:text-[#1F1A17] transition-colors duration-200 rounded-full hover:bg-[#F6E7DD]"
            aria-label="Search"
          >
            {searchOpen
              ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
              : <SearchIcon />
            }
          </button>

          {/* Cart */}
          <Link href="/cart">
            <a
              className="relative w-10 h-10 flex items-center justify-center text-[#8B7D74] hover:text-[#1F1A17] transition-colors duration-200 rounded-full hover:bg-[#F6E7DD]"
              aria-label={`Cart (${cartCount})`}
            >
              <BagIcon />
              {cartCount > 0 && (
                <span className="absolute top-1.5 right-1.5 min-w-[16px] h-4 bg-[#EFA67A] text-white text-[9px] font-medium flex items-center justify-center rounded-full px-1 leading-none">
                  {cartCount > 9 ? '9+' : cartCount}
                </span>
              )}
            </a>
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => { setMobileOpen(!mobileOpen); setSearchOpen(false); }}
            className="md:hidden w-10 h-10 flex items-center justify-center text-[#8B7D74] hover:text-[#1F1A17] transition-colors rounded-full hover:bg-[#F6E7DD]"
            aria-label="Menu"
          >
            {mobileOpen
              ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
              : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3 12h18M3 6h18M3 18h18" /></svg>
            }
          </button>
        </div>
      </div>

      {/* ── Search Dropdown ── */}
      {searchOpen && (
        <div className="border-t border-[#EADDD3]/60 bg-[#FFFCF8]/98 px-5 md:px-10 lg:px-16 py-4 animate-fade-in">
          <form onSubmit={handleSearch} className="flex gap-3 max-w-lg mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for pieces…"
              className="input-luxury flex-1 !rounded-full !px-5"
              autoFocus
            />
            <button type="submit" className="btn-primary !px-6 !py-2.5 !text-xs">
              Search
            </button>
          </form>
        </div>
      )}

      {/* ── Mobile Nav ── */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#EADDD3]/60 bg-[#FFFCF8] px-5 py-4 animate-fade-in">
          <nav className="flex flex-col">
            <Link href="/">
              <a
                className={`py-3.5 border-b border-[#EADDD3]/50 text-sm font-light tracking-wide ${
                  router.pathname === '/' ? 'text-[#1F1A17]' : 'text-[#8B7D74]'
                }`}
              >
                Home
              </a>
            </Link>
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a
                  className={`py-3.5 border-b border-[#EADDD3]/50 text-sm font-light tracking-wide ${
                    isActive(link.href) ? 'text-[#1F1A17]' : 'text-[#8B7D74]'
                  }`}
                >
                  {link.name}
                </a>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
