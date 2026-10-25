import './App.css';

import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Products from './pages/Products';
import Wishlist from './pages/Wishlist';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import Register from './pages/Register';
import Login from './pages/Login';
import ProtectedRoutes from './components/ProtectedRoutes';
import Profile from './pages/Profile';

import { CartProvider, useCart } from './context/CartContext';
import { useState } from 'react';
import Footer from './components/Footer';

function AppContent() {
  const {
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    setCart
  } = useCart();

  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    setWishlist((previousWishlist) => {
      const exists = previousWishlist.find(
        (item) => item.id === product.id
      );

      return exists
        ? previousWishlist
        : [...previousWishlist, product];
    });
  };

  const removeToWishlist = (productId) => {
    setWishlist((previousWishlist) =>
      previousWishlist.filter((item) => item.id !== productId)
    );
  };

  return (
    <>
      <Navbar cart={cart} />

      <Routes>
        <Route
          path="/"
          element={<Home addToCart={addToCart}
          addToWishlist={addToWishlist}
          />}
        />

        <Route
          path="/cart"
          element={
            <ProtectedRoutes>
              <Cart
                cart={cart}
                removeToCart={removeFromCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
              />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/products"
          element={
            <ProtectedRoutes>
              <Products
                addToCart={addToCart}
                addToWishlist={addToWishlist}
              />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/wishlist"
          element={
            <ProtectedRoutes>
              <Wishlist
                wishlist={wishlist}
                removeToWishlist={removeToWishlist}
                addToCart={addToCart}
              />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/products/:id"
          element={
            <ProtectedRoutes>
              <ProductDetails addToCart={addToCart} />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/checkout"
          element={
            <ProtectedRoutes>
              <Checkout
                cart={cart}
                clearCart={() => setCart([])}
              />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoutes>
              <Profile />
            </ProtectedRoutes>
          }
        />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
