import React from 'react';
import Head from 'next/head'

const NoPage = () => {
    return (
        <>
        <Head>
          <title>Nada encontrado</title> 
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>Ops, não encontramos nada</div>
        </>
    )
}

export default NoPage;