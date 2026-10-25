import { createContext, useContext, useEffect, useState } from 'react';
import API from '../services/api.js';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [cartLoaded, setCartLoaded] = useState(false);

    // Login user ka cart backend se fetch karna
    useEffect(() => {
        const fetchCart = async () => {
            const token = localStorage.getItem('token');

            if (!token) {
                setCart([]);
                setCartLoaded(true);
                return;
            }

            try {
                const response = await API.get('/cart');
                // setCart(response.data.items || []);
                setCart(
                    (response.data.items || []).map((item) => ({
                        ...item,
                        id: item.productId
                    }))
                );
            } catch (error) {
                console.error('Cart fetch error:', error);
            } finally {
                setCartLoaded(true);
            }
        };

        fetchCart();
    }, []);

    // Cart ko backend mein save karna
    useEffect(() => {
        if (!cartLoaded) return;

        const token = localStorage.getItem('token');

        if (!token) return;

        const items = cart.map((item) => ({
            productId: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: item.quantity,
        }));


        API.put('/cart', { items }).catch((error) => {
            console.error('Cart save error:', error);
        });
    }, [cart, cartLoaded]);
    /* Ek dry run karte hain, bhai
1. Garvit login karta hai aur token mil jaata hai.
2. Backend se Cart fetch hota hai aur cartLoaded true ho jaata hai.
3. Garvit Mobile add karta hai. cart state change hoti hai.
4. useEffect chalta hai aur updated Cart ko PUT /api/cart se backend par bhejta hai.
5. Backend user ki ID se Cart find karke MongoDB mein items save/update karta hai. */

    // Product add karna
    const addToCart = (product) => {
        setCart((previousCart) => {
            const existingProduct = previousCart.find(
                (item) => item.id === product.id
            );

            if (existingProduct) {
                return previousCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }

            return [...previousCart, { ...product, quantity: 1 }];
        });
    };

    const increaseQuantity = (productId) => {
        setCart((previousCart) =>
            previousCart.map((item) =>
                item.id === productId
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const decreaseQuantity = (productId) => {
        setCart((previousCart) =>
            previousCart
                .map((item) =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };

    const removeFromCart = (productId) => {
        setCart((previousCart) =>
            previousCart.filter((item) => item.id !== productId)
        );
    };

    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                addToCart,
                increaseQuantity,
                decreaseQuantity,
                removeFromCart,
                totalPrice,
                cartLoaded,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
