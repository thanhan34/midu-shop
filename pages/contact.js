import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactHero from '../components/contact/ContactHero';
import ContactInfoGrid from '../components/contact/ContactInfoGrid';
import ContactFormSection from '../components/contact/ContactFormSection';
import ContactFAQ from '../components/contact/ContactFAQ';
import ContactCTA from '../components/contact/ContactCTA';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <Head>
        <title>Contact — LALLA</title>
        <meta
          name="description"
          content="Get in touch with the LALLA team. We are here for every question, collaboration, and conversation."
        />
      </Head>

      <Header />

      <main>
        {/* Brand invitation opener */}
        <ContactHero />

        {/* Editorial contact info strip */}
        <ContactInfoGrid />

        {/* Luxury form + map/social sidebar */}
        <ContactFormSection />

        {/* Refined FAQ accordion */}
        <ContactFAQ />

        {/* Soft invitation CTA */}
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}
