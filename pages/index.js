import Head from 'next/head';
import Link from 'next/link';
import Banner from '../components/Banner';
import Carousels from '../components/Carousels';
import Collection from '../components/Collection';
import Feature from '../components/Feature';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <div>
      <Head>
        <title>LALLA — Fashion Collection</title>
        <meta name="description" content="Discover LALLA's curated fashion collection. Premium dresses and tops crafted with intention." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <Feature />
      <Collection />
      <Banner />
      <Carousels />
      <Newsletter />
      <Footer />
    </div>
  );
}
