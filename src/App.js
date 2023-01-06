import './App.css';
import React, { useState } from 'react'
import Header from './components/Layout/Header';
import HomeScreen from './components/Layout/HomeScreen';
import Footer from './components/Layout/Footer';
import { Route, Routes } from "react-router-dom"
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App;
