import React, { useContext } from 'react';

import { CartContext } from '../services/CartContext';
// import { CartVisibilityContext } from '../services/CartVisibilityContext';

import styles from './Product.module.css'
import { FaWhatsapp as WhatsappIcon} from 'react-icons/fa';

const Product = ({ data }) => {
    
    const {cartItems, updateCartItems, setCartVisibility} = useContext(CartContext);
    // const { setCartVisibility } = useContext(CartVisibilityContext);

    function handleProductBuy(){
        // console.log('inside handle')
        // console.log('cartItems', cartItems)
        // console.log('data', data)
        // console.log('cartItems.find( item => (item.id !== data.id))', cartItems.find( item => (item.id !== data.id)))
        console.log('cartItems', cartItems)
        const updatedItems = cartItems.items;
        updatedItems.push(data)
        // cartItems.push(data)
        updateCartItems(updatedItems)
        
        // setCartItems(updatedItems)
        setCartVisibility(true);
        
        // console.log('test', test)
    }

    return (
        <a  
            // href={`${data.url}?text=Olá, me interessei ${data.product ? 'pelo '+ data.product : 'por um produto no site'}, como posso compra-lo?`} 
            onClick={() => handleProductBuy()}
            className={styles.product} 
            style={{backgroundImage:`url(${data.image})`}}
        >
            <div className={styles.button}><WhatsappIcon className={styles.icon}/>Comprar</div>
        </a>
    )
}

export default Product