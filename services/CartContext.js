import { useEffect, createContext, useState } from "react";

export const CartContext = createContext();

export const CartStorage = (props) => {

    const [cartItems, setCartItems] = useState({items:[]});
    const [cartVisibility, setCartVisibility] = useState(false);

    function updateCartItems(dataItems) {
        console.log('dataItems', dataItems)
        console.log('cartItems', cartItems)
        const testVar = cartItems.items.find( cartItem => 
            (
                dataItems.find(dataItem => dataItem.id === cartItem.id)) ? true : false
            ) ? true : false
        
        console.log(testVar)
        window.localStorage.setItem('items', JSON.stringify(dataItems))
        setCartItems({items:dataItems})
    }
    
    useEffect(() => {
        const items = JSON.parse(window.localStorage.getItem('items'));
        console.log('items', items)
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