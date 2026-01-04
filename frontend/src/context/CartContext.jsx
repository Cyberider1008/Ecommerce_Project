import { createContext, useState, useEffect } from "react";

const CartContext =  createContext();
export { CartContext };
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    //Add product to cart
    const addToCart = (product) => {
        const existing = cartItems.find((item) => item.id === product.id)
        if (existing) {
            setCartItems(
                cartItems.map((item) => 
                item.id  === product.id
                ? {...item, quantity: item.quantity + 1 }
                : item 
                )
            );

        } else {
            setCartItems( [...cartItems, { ...product, quantity: 1}]);
        }

    };

    // Remove Product from Cart
    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter((item) => item.id !== productId));
    };

    //update quantity 
    const updateQuantity = (id, quantity) => {
        if (quantity < 1) return ;
        setCartItems(
            cartItems.map((item) => 
                item.id === id ? {...item, quantity } : item 
        )
        );
    };

    return (
        <CartContext.Provider 
        value = {{ cartItems, addToCart, removeFromCart, updateQuantity}}>
            {children}
        </CartContext.Provider>
    )

}