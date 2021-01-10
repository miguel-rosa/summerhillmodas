import React, {useContext} from 'react';

import { FaWhatsapp as WhatsappIcon} from 'react-icons/fa';
import { FaPhone as PhoneIcon} from 'react-icons/fa';
import { FaInstagram as InstagramIcon} from 'react-icons/fa';

import CartIcon from './CartIcon';

import { CartContext } from '../services/CartContext';

import styles from './HeaderMobile.module.css';

const HeaderMobile = ({data}) => {

    const { setCartVisibility } = useContext(CartContext);

    const {name, contacts:{whatsapp,instagram, phone} } = data;

    return (
        <>
            <header mobile="true" className={styles.header}>
                <div mobile="true" className={styles.column}>
                    <p mobile="true" className={styles.logo}>
                        {name}
                    </p>
                    <CartIcon  />
                </div>
            </header>
            <footer className={styles.headerMobile}>
                <div mobile="true" className={styles.column}>
                    <a href={`tel:+${phone}`} className={styles.button}>
                        <PhoneIcon className={styles.phoneIcon} />
                        <span className={styles.text}>fone</span>
                    </a>
                    <a href={`https://wa.me/${whatsapp}`} className={styles.button}>
                        <span className={styles.wrapperIcon}><WhatsappIcon className={styles.whatsappIcon}/></span>
                        <span className={styles.text}>whatsapp</span>
                    </a>
                    <a href={`https://instagram.com/${instagram}`} className={styles.button}>
                        <InstagramIcon className={styles.instagramIcon}/>
                        <span className={styles.text}>instagram</span>
                    </a>
                </div>
            </footer>
        </> 
    )
}

export default HeaderMobile