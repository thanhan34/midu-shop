import Head from 'next/head'
import Banner from '../components/Banner'
import BestSeller from '../components/BestSeller'
import Carousels from '../components/Carousels'
import Collection from '../components/Collection'
import Feature from '../components/Feature'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Newsletter from '../components/Newsletter'
import Partner from '../components/Partner'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>LALLA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Feature />

      {/* <BestSeller /> */}
      <Collection />
      <Banner />
      <Carousels />
      {/* <Partner /> */}
      <Newsletter />
      <Footer />
    </div>
  )
}
