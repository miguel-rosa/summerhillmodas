import { urlObjectKeys } from 'next/dist/next-server/lib/utils';
import React from 'react';

import styles from './Product.module.css'
import { FaWhatsapp as WhatsappIcon} from 'react-icons/fa';

const Product = ({data}) => {
    
    return (
        <a href={`${data.url}?text="Olá, me interessei ${data.product ? 'pelo '+ data.product : 'por um produto no site'}, como posso compra-lo?"`} className={styles.product} style={{backgroundImage:`url(${data.image})`}}>
            <div className={styles.button}><WhatsappIcon className={styles.icon}/>Comprar</div>
        </a>
    )
}

export default Product