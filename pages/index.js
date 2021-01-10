import Head from 'next/head'
import styles from '../styles/Home.module.css'

import NoPage from './nopage';

import Header from '../components/Header'
import Products from '../components/Products'

import { useRouter } from 'next/router';

import React, {useState, useEffect} from 'react';

import { CartStorage } from '../services/CartContext'
import { STORES_DATA } from '../data/store.json';

export default function Home() {

  const [PAGE_SLUG, setPAGE_SLUG] = useState();

  useEffect(()=>{
    setPAGE_SLUG(window.location.hostname.split('.')[0])
  },[])
  // const PAGE_SLUG = window.location.hostname.split('.')[0]
  
  // const router = useRouter();
  // const { slug:PAGE_SLUG } = router.query

  const [data, setData] = useState(null);

  useEffect(() => {
    setData(STORES_DATA.find( item => item.slug === PAGE_SLUG ))
  },[PAGE_SLUG])

  return (
  data ? (
    <CartStorage data={data}>
      <div className={styles.container}>
        <Head>
          <title>{data.name}</title> 
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Permanent+Marker&display=swap" rel="stylesheet"/>
        </Head>
        <Header data={data}/>
        <Products data={data}
          id="#products"/>
      </div>
    </CartStorage>
    )
    : <NoPage />
  )
}

