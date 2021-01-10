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

    function addCartItem(data){
        console.log('data', data)
        console.log('test', cartItems.items.find( item => item.id === data.id), cartItems.items.find( item => item.id === data.id) === undefined )
        if(cartItems.items.find( item => item.id === data.id) === undefined || !cartItems.items.length){
            const updatedItems = cartItems.items;
            updatedItems.push(data)
            updateCartItems(updatedItems);
        }
    }

    function removeCartItem(id) {
        if(cartItems.items.find( item => item.id === id)){
            const updatedItems = cartItems.items.filter( item => item.id !== id);
            updateCartItems(updatedItems);
        }
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
        <CartContext.Provider value={{ cartItems, cartVisibility, setCartVisibility, addCartItem, removeCartItem}}>
            {props.children}
        </CartContext.Provider>
    )
}