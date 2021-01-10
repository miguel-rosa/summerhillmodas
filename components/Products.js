import React, { useEffect, useState } from 'react';


import styles from './Products.module.css';

import Product from './Product'
import Section from './Section'
import Title from './Title'
import { ProductsData }  from '../data/products.json';

const Products = ({data}) => {
        
    const { contacts:{whatsapp}, products } = data
    
    return (
        <Section>
            {/* <Title>
                Conheça nossos <br/> produtos
            </Title> */}
            <div className={styles.products}>
                {
                    products.map( (product, id) => (
                        <Product data={product} key={id} whatsapp={whatsapp}/>
                    ))
                }
            </div>
        </Section>
    )
}

export default Products