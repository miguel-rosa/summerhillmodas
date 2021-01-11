import React, {useEffect, useState} from 'react';

import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

import Cart from './Cart';

const Header = ({data}) => {
    
    const [isMobile, setIsMobile] = useState(false)
    
    useEffect(() => setIsMobile(window.innerWidth < 768), [])

    return (
        <>
           {
            isMobile ? <HeaderMobile data={data}/> : <HeaderDesktop data={data}/>
           }
           <Cart whatsapp={data.whatsapp}/>
        </>
    )
}

export default Header;