import React, {useContext} from 'react';

import { FaShoppingBag as Icon} from 'react-icons/fa';
import styles from './CartIcon.module.css'

import { CartContext } from '../services/CartContext';

const CartIcon = () => {
    
    const { cartItems, setCartVisibility } = useContext(CartContext);

    return (
        <div className={styles.wrapper}>
            {cartItems.items.length > 0 && <span className={styles.items}>{cartItems.items.length}</span>}
            <Icon 
                onClick={() => setCartVisibility(true)}
                className={styles.icon}
            />
        </div>
    )
}

export default CartIcon