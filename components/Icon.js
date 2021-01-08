import React from 'react';

import style from './Icon.module.css'

const Icon = (props) => {
    return (
        <div className={style.icon}>
            {props.children}
        </div>
    )
}

export default Icon