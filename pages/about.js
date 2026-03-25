import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutHero from '../components/about/AboutHero';
import AboutFeatureImage from '../components/about/AboutFeatureImage';
import AboutStats from '../components/about/AboutStats';
import BrandStorySection from '../components/about/BrandStorySection';
import CoreValuesSection from '../components/about/CoreValuesSection';
import TeamSection from '../components/about/TeamSection';
import AboutCTA from '../components/about/AboutCTA';

export default function About() {
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <Head>
        <title>About Us — LALLA</title>
        <meta
          name="description"
          content="The story, values, and people behind LALLA — a fashion brand built on purpose, craft, and timeless style."
        />
      </Head>

      <Header />

      <main>
        {/* Brand purpose & editorial opening */}
        <AboutHero />

        {/* Campaign feature image */}
        <AboutFeatureImage />

        {/* Premium metrics strip */}
        <AboutStats />

        {/* Brand narrative — the origin story */}
        <BrandStorySection />

        {/* Brand values — editorial numbered layout */}
        <CoreValuesSection />

        {/* Creative team — staggered fashion editorial grid */}
        <TeamSection />

        {/* Soft luxury invitation CTA */}
        <AboutCTA />
      </main>

      <Footer />
    </div>
  );
}
