import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import DetailScreen from './components/Detail/DetailScreen';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import HomeScreen from './components/Layout/HomeScreen';
import CartProvider from './store/CartProvider';

function App() {

  return (
    <div className='App'>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/kookie/:id" element={<DetailScreen />} />
        </Routes>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
