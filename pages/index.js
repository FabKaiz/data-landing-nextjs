import Head from 'next/head'
import styles from '../styles/Home.module.scss'

import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Features from '../components/Features'
import Traffic from '../components/Traffic'
import Framework from '../components/Framework'
import Business from '../components/Business'
import Online from '../components/Online'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Data Processing - FabKaiz</title>
        <meta
          name="description"
          content="Landing page concept for data processing company made with nextjs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.bgGradient}>
        <Navbar />
        <Header />
      </div>
      <Traffic />
      <Framework />
      <Business />
      <Online />
      <Newsletter />
      <Footer />
    </div>
  )
}
