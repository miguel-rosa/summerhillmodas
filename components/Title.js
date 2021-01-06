import React from 'react';

import styles from './Title.module.css'

const Title = props => {
    return (
        <div className={styles.title} >
            {props.children}
        </div>
    )
}

export default Title