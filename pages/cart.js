/* ═══════════════════════════════════════════════
   Cart Page — Luxury Redesign
   Stack: Next.js · Tailwind · DM Sans / Cormorant
   Palette: Soft warm white + Pastel orange
═══════════════════════════════════════════════ */
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartTitleSection from '../components/cart/CartTitleSection';
import CartItemList from '../components/cart/CartItemList';
import OrderSummaryCard from '../components/cart/OrderSummaryCard';
import EmptyCartState from '../components/cart/EmptyCartState';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart();

  /* ── Empty state ───────────────────────────── */
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#FFFCF8] flex flex-col">
        <Head>
          <title>Shopping Cart — LALLA</title>
          <meta name="description" content="Your LALLA shopping cart." />
        </Head>

        <Header />
        <EmptyCartState />
        <Footer />
      </div>
    );
  }

  /* ── Filled cart ───────────────────────────── */
  return (
    <div className="min-h-screen bg-[#FFFCF8] flex flex-col">
      <Head>
        <title>Cart ({items.length}) — LALLA</title>
        <meta name="description" content="Review your LALLA cart and proceed to checkout." />
      </Head>

      <Header />

      {/* ── Page intro / title ── */}
      <CartTitleSection
        itemCount={items.reduce((s, i) => s + i.quantity, 0)}
        onClearCart={clearCart}
      />

      {/* ── Main content ── */}
      <main className="flex-1">
        {/*
          Warm blush band behind the content area —
          gives the page a premium, editorial warmth.
        */}
        <div className="bg-[#FFFCF8] py-12 md:py-16">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] gap-8 xl:gap-12 items-start">

              {/* ── Left: item list ── */}
              <CartItemList
                items={items}
                onRemove={removeFromCart}
                onUpdateQuantity={updateQuantity}
              />

              {/* ── Right: order summary (sticky) ── */}
              <div className="lg:sticky lg:top-24">
                <OrderSummaryCard items={items} cartTotal={cartTotal} />
              </div>

            </div>
          </div>
        </div>
      </main>

      {/* ── Warm blush spacer before footer ── */}
      <div className="h-px bg-[#EADDD3]" />

      <Footer />
    </div>
  );
}
