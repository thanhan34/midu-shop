import Head from 'next/head';
import { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';

const sortOptions = [
  { label: 'Featured',          value: 'featured' },
  { label: 'Newest',            value: 'newest' },
  { label: 'Price: Low → High', value: 'price-asc' },
  { label: 'Price: High → Low', value: 'price-desc' },
  { label: 'Best Rated',        value: 'rating' },
];

/* ── Luxury Product Card ── */
function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [adding, setAdding] = useState(false);

  const handleAdd = (e) => {
    e.preventDefault();
    if (adding || !product.inStock) return;
    setAdding(true);
    addToCart(product, 'M', 1);
    setTimeout(() => setAdding(false), 1400);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link href={`/products/${product.id}`}>
      <a className="group block">
        {/* Image */}
        <div className="relative overflow-hidden rounded-xl bg-[#F8F1EB]" style={{ aspectRatio: '3/4' }}>
          {!product.inStock && (
            <div className="absolute inset-0 z-10 bg-[#FFFCF8]/70 flex items-center justify-center">
              <span className="text-[11px] uppercase tracking-[0.18em] text-[#8B7D74] font-medium bg-white px-3 py-1.5 rounded-full border border-[#EADDD3]">
                Sold Out
              </span>
            </div>
          )}
          {product.badge === 'Sale' && product.inStock && (
            <span className="absolute top-3 left-3 z-10 text-[10px] font-medium uppercase tracking-[0.12em] bg-[#1F1A17] text-white px-2.5 py-1 rounded-full">
              Sale
            </span>
          )}
          <img
            src={product.img}
            alt={product.title}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          {/* Add to bag overlay */}
          {product.inStock && (
            <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <button
                onClick={handleAdd}
                className={`w-full py-3 text-[12px] font-medium uppercase tracking-[0.14em] transition-colors duration-200 ${
                  adding
                    ? 'bg-[#5E5148] text-white'
                    : 'bg-[#1F1A17]/90 text-white hover:bg-[#EFA67A]'
                }`}
              >
                {adding ? '✓ Added to Bag' : 'Add to Bag'}
              </button>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="pt-4">
          <h3 className="text-[#1F1A17] text-sm font-light tracking-wide leading-snug group-hover:text-[#EFA67A] transition-colors duration-200">
            {product.title}
          </h3>
          <div className="flex items-center gap-2.5 mt-1.5">
            <span className="text-[#5E5148] text-sm font-light">
              ${product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <>
                <span className="text-[#8B7D74] text-xs line-through">
                  ${product.originalPrice.toLocaleString()}
                </span>
                <span className="text-[10px] font-medium text-[#EFA67A]">−{discount}%</span>
              </>
            )}
          </div>
        </div>
      </a>
    </Link>
  );
}

export default function Shop() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy]       = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (router.query.sort)     setSortBy(router.query.sort);
    if (router.query.category) setActiveCategory(router.query.category);
    if (router.query.search)   setSearchQuery(router.query.search);
  }, [router.query]);

  const filtered = useMemo(() => {
    let result = [...products];
    if (activeCategory !== 'all')
      result = result.filter((p) => p.category === activeCategory);
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) => p.title.toLowerCase().includes(q) ||
               p.description.toLowerCase().includes(q) ||
               p.category.toLowerCase().includes(q)
      );
    }
    switch (sortBy) {
      case 'price-asc':  result.sort((a, b) => a.price - b.price); break;
      case 'price-desc': result.sort((a, b) => b.price - a.price); break;
      case 'rating':     result.sort((a, b) => b.rating - a.rating); break;
      case 'newest':     result.sort((a, b) => b.id - a.id); break;
      default:           result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }
    return result;
  }, [activeCategory, sortBy, searchQuery]);

  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <Head>
        <title>Shop — LALLA</title>
        <meta name="description" content="Browse our full fashion collection" />
      </Head>

      <Header />

      <main className="max-w-[1320px] mx-auto px-5 md:px-10 lg:px-16 py-14">

        {/* ── Page header ── */}
        <div className="mb-12 animate-slide-up">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#EFA67A]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-[#8B7D74]">Collection</span>
          </div>
          <h1 className="font-serif font-light text-[#1F1A17]" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}>
            Shop All
          </h1>
        </div>

        {/* ── Filter + Sort Bar ── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 mb-10 pb-8 border-b border-[#EADDD3]">
          {/* Category pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-[12px] font-light tracking-wide transition-all duration-200 ${
                  activeCategory === cat.value
                    ? 'bg-[#1F1A17] text-white'
                    : 'bg-[#F8F1EB] text-[#5E5148] hover:bg-[#F6E7DD] hover:text-[#1F1A17] border border-[#EADDD3]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort + count */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <span className="text-[#8B7D74] text-[12px] font-light">
              {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="input-luxury !rounded-full !px-4 !py-2 !text-xs !bg-[#F8F1EB] cursor-pointer"
              style={{ width: 'auto', minHeight: '36px' }}
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* ── Search banner ── */}
        {searchQuery && (
          <div className="flex items-center justify-between mb-8 px-5 py-3 bg-[#F6E7DD] border border-[#EADDD3] rounded-xl">
            <p className="text-[#5E5148] text-sm font-light">
              Results for <span className="text-[#1F1A17] font-medium">"{searchQuery}"</span>
            </p>
            <button
              onClick={() => { setSearchQuery(''); router.replace('/shop'); }}
              className="text-[#8B7D74] hover:text-[#1F1A17] text-xs font-medium underline underline-offset-2"
            >
              Clear
            </button>
          </div>
        )}

        {/* ── Product Grid ── */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12 animate-fade-in">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="font-serif text-4xl text-[#EADDD3] mb-4">∅</p>
            <h3 className="font-serif text-xl text-[#1F1A17] font-light mb-3">No pieces found</h3>
            <p className="text-[#8B7D74] text-sm font-light mb-8">Try adjusting your filters or search query.</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); setSortBy('featured'); }}
              className="btn-outline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
