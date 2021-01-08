import React from 'react';


import styles from './Products.module.css';

import Product from './Product'
import Section from './Section'
import Title from './Title'
import { ProductsData }  from '../data/products.json';

const Products = () => {
    return (
        <Section>
            {/* <Title>
                Conheça nossos <br/> produtos
            </Title> */}
            <div className={styles.products}>
                {
                    ProductsData.map( (product, id) => (
                        <Product data={product} key={id} />
                    ))
                }
            </div>
        </Section>
    )
}

export default Products