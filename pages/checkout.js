/* ═══════════════════════════════════════════════
   Checkout Page — Luxury Redesign
   Stack: Next.js · Tailwind · DM Sans / Cormorant
   Palette: Soft warm white + Pastel orange

   Architecture:
   ┌─────────────────────────────────────────┐
   │  Header                                 │
   │  CheckoutTitleSection                   │
   │  CheckoutStepper                        │
   │  ┌──────────────────┐  ┌─────────────┐  │
   │  │ Step 1: Shipping │  │  Order      │  │
   │  │ Step 2: Payment  │  │  Summary    │  │
   │  └──────────────────┘  └─────────────┘  │
   │  Footer                                 │
   └─────────────────────────────────────────┘
═══════════════════════════════════════════════ */
import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

/* ── Checkout-specific components ─────────── */
import CheckoutTitleSection  from '../components/checkout/CheckoutTitleSection';
import CheckoutStepper       from '../components/checkout/CheckoutStepper';
import ShippingFormCard      from '../components/checkout/ShippingFormCard';
import PaymentStepCard       from '../components/checkout/PaymentStepCard';
import CheckoutOrderSummary  from '../components/checkout/CheckoutOrderSummary';
import CheckoutSuccessStep   from '../components/checkout/CheckoutSuccessStep';
import CheckoutEmptyState    from '../components/checkout/CheckoutEmptyState';

/* ── Constants ────────────────────────────── */
const SHIPPING_THRESHOLD = 500;
const SHIPPING_FEE       = 50;

/* ══════════════════════════════════════════ */
export default function CheckoutPage() {
  const { items, cartTotal, clearCart } = useCart();

  /* step: 1 = Shipping · 2 = Payment · 3 = Success */
  const [step,          setStep]          = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [submitting,    setSubmitting]    = useState(false);

  const [form, setForm] = useState({
    fullName: '',
    email:    '',
    phone:    '',
    address:  '',
    city:     '',
    state:    '',
    zip:      '',
    country:  'Vietnam',
    note:     '',
  });

  /* Derived totals */
  const shipping = cartTotal >= SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
  const total    = cartTotal + shipping;

  /* Handlers */
  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    setStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setStep(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePlaceOrder = () => {
    setSubmitting(true);
    setTimeout(() => {
      clearCart();
      setStep(3);
      setSubmitting(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1800);
  };

  /* ── Guard: empty cart ──────────────────── */
  if (items.length === 0 && step !== 3) {
    return (
      <div className="min-h-screen bg-[#FFFCF8] flex flex-col">
        <Head>
          <title>Checkout — LALLA</title>
        </Head>
        <Header />
        <CheckoutEmptyState />
        <Footer />
      </div>
    );
  }

  /* ── Success state ──────────────────────── */
  if (step === 3) {
    return (
      <div className="min-h-screen bg-[#FFFCF8] flex flex-col">
        <Head>
          <title>Order Confirmed — LALLA</title>
        </Head>
        <Header />
        <CheckoutSuccessStep
          form={form}
          paymentMethod={paymentMethod}
          total={total}
        />
        <div className="h-px bg-[#EADDD3]" />
        <Footer />
      </div>
    );
  }

  /* ── Main checkout layout ───────────────── */
  return (
    <div className="min-h-screen bg-[#FFFCF8] flex flex-col">
      <Head>
        <title>Checkout — LALLA</title>
        <meta name="description" content="Complete your LALLA order securely." />
      </Head>

      <Header />

      {/* ── Page intro title ── */}
      <CheckoutTitleSection />

      {/* ── Step progress indicator ── */}
      <CheckoutStepper step={step} />

      {/* ── Main content ── */}
      <main className="flex-1 py-12 md:py-16">
        <div className="page-container">
          <div
            className="
              grid grid-cols-1
              lg:grid-cols-[1fr_380px]
              xl:grid-cols-[1fr_420px]
              gap-8 xl:gap-12
              items-start
            "
          >

            {/* ── Left column: step forms ── */}
            <div>
              {step === 1 && (
                <ShippingFormCard
                  form={form}
                  onChange={handleChange}
                  onSubmit={handleShippingSubmit}
                />
              )}

              {step === 2 && (
                <PaymentStepCard
                  form={form}
                  paymentMethod={paymentMethod}
                  setPaymentMethod={setPaymentMethod}
                  onBack={handleBack}
                  onPlaceOrder={handlePlaceOrder}
                  submitting={submitting}
                  total={total}
                />
              )}
            </div>

            {/* ── Right column: sticky order summary ── */}
            <div className="lg:sticky lg:top-24">
              <CheckoutOrderSummary
                items={items}
                cartTotal={cartTotal}
              />
            </div>

          </div>
        </div>
      </main>

      {/* ── Footer separator ── */}
      <div className="h-px bg-[#EADDD3]" />
      <Footer />
    </div>
  );
}
