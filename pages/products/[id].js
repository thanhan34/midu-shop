import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductBreadcrumb from '../../components/product/ProductBreadcrumb';
import ProductGallery from '../../components/product/ProductGallery';
import ProductMeta from '../../components/product/ProductMeta';
import ProductPrice from '../../components/product/ProductPrice';
import SizeSelector from '../../components/product/SizeSelector';
import QuantitySelector from '../../components/product/QuantitySelector';
import ProductActions from '../../components/product/ProductActions';
import ProductTrustRow from '../../components/product/ProductTrustRow';
import ProductDetailsAccordion from '../../components/product/ProductDetailsAccordion';
import RelatedProducts from '../../components/product/RelatedProducts';
import { getProductById, getRelatedProducts } from '../../data/products';
import { useCart } from '../../context/CartContext';

/* ─────────────────────────────────────────────
   Not-Found state — inline, no sub-component
───────────────────────────────────────────── */
function ProductNotFound() {
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <Header />
      <div className="min-h-[65vh] flex items-center justify-center px-5 py-20">
        <div className="text-center max-w-sm">
          {/* Icon */}
          <div className="w-16 h-16 mx-auto mb-7 flex items-center justify-center
                          rounded-full bg-[#F6E7DD]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                 stroke="#EFA67A" strokeWidth="1.4" strokeLinecap="round">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>

          {/* Heading */}
          <div className="section-label justify-center mb-4">404</div>
          <h2 className="font-serif font-light text-[#1F1A17] text-3xl mb-4 leading-tight">
            Piece Not Found
          </h2>
          <p className="text-[#8B7D74] text-sm font-light leading-relaxed mb-9">
            This item may have been removed or is no longer available in our collection.
          </p>

          <Link href="/shop">
            <a className="btn-primary">Return to Shop</a>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Product Detail Page
───────────────────────────────────────────── */
export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const product = id ? getProductById(id) : null;
  const related = product ? getRelatedProducts(id, product.category) : [];

  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity]         = useState(1);
  const [adding, setAdding]             = useState(false);
  const [sizeError, setSizeError]       = useState(false);

  /* ── Guards ── */
  if (!product && id) return <ProductNotFound />;
  if (!product) return null;

  /* ── Handlers ── */
  const requireSize = () => {
    if (!selectedSize) {
      setSizeError(true);
      setTimeout(() => setSizeError(false), 2500);
      return false;
    }
    return true;
  };

  const handleAddToCart = () => {
    if (!requireSize() || !product.inStock || adding) return;
    setAdding(true);
    addToCart(product, selectedSize, quantity);
    setTimeout(() => setAdding(false), 1400);
  };

  const handleBuyNow = () => {
    if (!requireSize()) return;
    addToCart(product, selectedSize, quantity);
    router.push('/cart');
  };

  /* ── Render ── */
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <Head>
        <title>{product.title} — LALLA</title>
        <meta name="description" content={product.description} />
      </Head>

      <Header />

      <main className="max-w-[1320px] mx-auto px-5 md:px-10 lg:px-16 pt-10 md:pt-14 pb-0">

        {/* ── Breadcrumb ── */}
        <ProductBreadcrumb category={product.category} title={product.title} />

        {/* ── Two-column product grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 xl:gap-20 items-start">

          {/* Left column — image gallery (sticky on large screens) */}
          <div className="lg:sticky lg:top-24">
            <ProductGallery
              img={product.img}
              title={product.title}
              badge={product.badge}
              inStock={product.inStock}
            />
          </div>

          {/* Right column — all product information */}
          <div className="animate-slide-up lg:pt-2 pb-16">

            {/* Category + Title + Rating */}
            <ProductMeta
              category={product.category}
              title={product.title}
              rating={product.rating}
              reviews={product.reviews}
            />

            {/* Divider */}
            <div className="h-px bg-[#EADDD3] mb-8" />

            {/* Price */}
            <ProductPrice
              price={product.price}
              originalPrice={product.originalPrice}
            />

            {/* Size */}
            <SizeSelector
              sizes={product.sizes}
              selectedSize={selectedSize}
              onSelect={(s) => { setSelectedSize(s); setSizeError(false); }}
              error={sizeError}
            />

            {/* Quantity */}
            <QuantitySelector quantity={quantity} onChange={setQuantity} />

            {/* CTA buttons */}
            <ProductActions
              onAddToCart={handleAddToCart}
              onBuyNow={handleBuyNow}
              inStock={product.inStock}
              adding={adding}
            />

            {/* Trust indicators */}
            <ProductTrustRow />

            {/* Details accordion */}
            <ProductDetailsAccordion description={product.description} />

          </div>
        </div>

        {/* ── Related / Curated section ── */}
        <RelatedProducts products={related} />

      </main>

      <Footer />
    </div>
  );
}
