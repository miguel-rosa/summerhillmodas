import React, { useContext } from 'react';

import { CartContext } from '../services/CartContext';

import styles from './Product.module.css'
import { FaWhatsapp as WhatsappIcon} from 'react-icons/fa';

const Product = ({ data }, whatsapp) => {
    
    const {cartItems, addCartItem, setCartVisibility} = useContext(CartContext);
    
    function handleProductBuy(data){
        console.log('cartItems', cartItems)
        addCartItem(data)
        console.log('cartItems', cartItems)
        setCartVisibility(true);
    }

    return (
        <a  
            // href={`${data.url}?text=Olá, me interessei ${data.product ? 'pelo '+ data.product : 'por um produto no site'}, como posso compra-lo?`} 
            onClick={() => handleProductBuy(data)}
            className={styles.product} 
            style={{backgroundImage:`url(${data.image})`}}
        >
            <div className={styles.button}><WhatsappIcon className={styles.icon}/>Comprar</div>
        </a>
    )
}

export default Product