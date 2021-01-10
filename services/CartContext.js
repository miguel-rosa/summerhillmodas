import { useEffect, createContext, useState } from "react";

export const CartContext = createContext();

export const CartStorage = (props) => {

    const [cartItems, setCartItems] = useState({items:[]});
    const [cartVisibility, setCartVisibility] = useState(false);
    const {slug} = props.data ? props.data : 'items'

    function updateCartItems(dataItems) {
        window.localStorage.setItem(slug, JSON.stringify(dataItems))
        setCartItems({items:dataItems})
    }
    
    useEffect(() => {
        const items = JSON.parse(window.localStorage.getItem(slug));
        console.log('pseudo items slug', slug)
        if(items){
           if(items.length) setCartVisibility(true)
            setCartItems({items:items});
        }
    }, [])

    return (
        <CartContext.Provider value={{ cartItems, updateCartItems, cartVisibility, setCartVisibility }}>
            {props.children}
        </CartContext.Provider>
    )
}