import React from 'react';

import { FaWhatsapp as WhatsappIcon} from 'react-icons/fa';
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
                    <a href="https://wa.me/5511950465529" className={styles.button}>
                        <span className={styles.text}>Entrar em contato</span>
                        <span className={styles.wrapperIcon}><WhatsappIcon className={styles.icon}/></span>
                    </a>
                </div>
            </footer>
        </> 
    )
}

export default HeaderMobile