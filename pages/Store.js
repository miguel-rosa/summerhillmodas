import React from 'react';
import Head from 'next/head'

import styles from '../styles/Home.module.css'

import Header from '../components/Header'
import Products from '../components/Products'

import { CartStorage } from '../services/CartContext'

const Store = ({data}) => {

    console.log('data', data)
    return (
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
}

export default Store