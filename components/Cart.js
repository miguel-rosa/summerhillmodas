import React, { useContext, useEffect } from 'react';

import { CartContext } from '../services/CartContext';
// import { CartVisibilityContext } from '../services/CartVisibilityContext';

import styles from './Cart.module.css'
import { FiX as CloseIcon } from 'react-icons/fi';
import Icon from './Icon';

const Cart = () => {

    const { cartItems, updateCartItems, cartVisibility, setCartVisibility } = useContext(CartContext);
    
    const handleRemoveItemFromCart = id => {
        if(cartItems.items.find( item => item.id === id)){
            const updatedItems = cartItems.items.filter( item => item.id !== id);
            updateCartItems(updatedItems);
        }
    }
    return (
        cartVisibility ? (
            <div className={styles.cart}>
                <header className={styles.cartHeader}>
                    <p className={styles.cartTitle} >Seus produtos</p>
                    <Icon>
                        <CloseIcon 
                            onClick={ () => setCartVisibility(false)}
                            className={styles.closeIcon} />
                    </Icon>

                </header>
                <ul className={styles.cartItems}>
                    {
                        cartItems.items.length !== 0 ?
                            (
                                cartItems.items.map( (item, index) => (
                                    <li 
                                        className={styles.item} 
                                        key={index}
                                    >
                                        <div
                                            className={styles.itemImage}
                                            style={{backgroundImage:`url(${item.image})`}}
                                        />
                                        <div className={styles.itemInfo}>
                                            <p className={styles.itemName}>
                                                {item.name}
                                            </p>
                                            <CloseIcon className={styles.removeIcon}
                                                    onClick={() => handleRemoveItemFromCart(item.id)}
                                                />
                                        </div>
                                    </li>
                                )
                            ))
                        : (
                            <p className={styles.cartMessage}>
                                Seu carrinho está vazio, adicione algum item para ver aqui!
                            </p>
                        )
                    }
                </ul>
                <footer className={styles.cartFooter}>
                    <a  href={`https://wa.me/5511950465529/?text=Olá, gostaria de comprar os seguintes itens: ${cartItems.items.map( item => item.name).join(',\r\n ')} `}
                        className={styles.button}>
                        Finalizar compra
                    </a>
                </footer>
            </div>
         ) : null
    )
}

export default Cart