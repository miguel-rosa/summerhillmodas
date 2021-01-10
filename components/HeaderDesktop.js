import React, {useContext} from 'react';

import { FaWhatsapp as WhatsappIcon} from 'react-icons/fa';

import CartIcon from './CartIcon'

import styles from './HeaderDesktop.module.css';

const HeaderDesktop = () => {

    return (
        <header className={styles.header}>
            <div className={styles.column}>
                <p className={styles.logo}>
                    Summer Hill Modas
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
                <CartIcon />   
                
                {/* <a href="https://wa.me/5511950465529" className={styles.button}>
                    <span className={styles.text}>Entrar em contato</span>
                    <span className={styles.wrapperIcon}><WhatsappIcon className={styles.icon}/></span>
                </a> */}
            </div>
        </header>
    )
}

export default HeaderDesktop