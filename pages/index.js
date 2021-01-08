import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from '../components/Header'
import Products from '../components/Products'
import Cart from '../components/Cart';

import { CartStorage } from '../services/CartContext'
import { CartVisibility } from '../services/CartVisibilityContext'



export default function Home() {
  return (

    <CartStorage>
      {/* <CartVisibility> */}
      <div className={styles.container}>
        <Head>
          <title>Summer Hill Modas</title>
          <meta name="google-site-verification" content="M3dM7HGFRCGYVdDEHKOirldW57YgFi63GJR5hIFBmFo" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Permanent+Marker&display=swap" rel="stylesheet"/>
        </Head>
        <Header />
        <Products id="#products"/>
      </div>
      {/* </CartVisibility> */}
    </CartStorage>
  )
}

