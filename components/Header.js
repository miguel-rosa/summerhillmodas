import React, {useEffect, useState} from 'react';

import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

import Cart from './Cart';

const Header = () => {

    const [isMobile, setIsMobile] = useState(false)
    
    useEffect(() => setIsMobile(window.innerWidth < 768), [])

    return (
        <>
           {
            isMobile ? <HeaderMobile /> : <HeaderDesktop />
           }
           <Cart/>
        </>
    )
}

export default Header;