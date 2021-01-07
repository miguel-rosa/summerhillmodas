import React from 'react';

import { FaWhatsapp as WhatsappIcon} from 'react-icons/fa';
import { FaPhone as PhoneIcon} from 'react-icons/fa';
import { FaInstagram as InstagramIcon} from 'react-icons/fa';

import styles from './HeaderMobile.module.css';

const HeaderMobile = () => {
    return (
        <>
            <header mobile="true" className={styles.header}>
                <div mobile="true" className={styles.column}>
                    <p mobile="true" className={styles.logo}>
                        Summer Hill Modas
                    </p>
                </div>
            </header>
            <footer className={styles.headerMobile}>
                <div mobile="true" className={styles.column}>
                    <a href="tel:+551143841974" className={styles.button}>
                        <PhoneIcon className={styles.phoneIcon} />
                        <span className={styles.text}>fone</span>
                    </a>
                    <a href="https://wa.me/5511950465529" className={styles.button}>
                        <span className={styles.wrapperIcon}><WhatsappIcon className={styles.whatsappIcon}/></span>
                        <span className={styles.text}>whatsapp</span>
                    </a>
                    <a href="https://instagram.com/summerhillmodas" className={styles.button}>
                        <InstagramIcon className={styles.instagramIcon}/>
                        <span className={styles.text}>instagram</span>
                    </a>
                </div>
            </footer>
        </> 
    )
}

export default HeaderMobile