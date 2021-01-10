import React, {useContext} from 'react';

import { FaWhatsapp as WhatsappIcon} from 'react-icons/fa';
import { FaShoppingBag as CartIcon} from 'react-icons/fa';

import { CartContext } from '../services/CartContext';

import styles from './HeaderDesktop.module.css';

const HeaderDesktop = ({data}) => {

    const { setCartVisibility } = useContext(CartContext);

    const {name} = data
    return (
        <header className={styles.header}>
            <div className={styles.column}>
                <p className={styles.logo}>
                    {name}
                </p>
            </div>
            <div style={{display:'none'}} className={styles.column}>
                <a className={styles.link}
                    href="#products">
                    Produtos
                </a>
                <a className={styles.link}
                    href="#location">
                    Onde estamos
                </a>
                <a  className={styles.link}
                    href="#about">
                    Sobre nós
                </a>
            </div>
            <div>
        

            </div>
            <div className={styles.column}>
                <div className={styles.cartIconWrapper}>
                    <CartIcon 
                        onClick={() => setCartVisibility(true)}
                        className={styles.cartIcon}
                    />   
                </div>
                {/* <a href="https://wa.me/5511950465529" className={styles.button}>
                    <span className={styles.text}>Entrar em contato</span>
                    <span className={styles.wrapperIcon}><WhatsappIcon className={styles.icon}/></span>
                </a> */}
            </div>
        </header>
    )
}

export default HeaderDesktop