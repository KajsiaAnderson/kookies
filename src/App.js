import React, {useContext} from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import DetailScreen from './components/Detail/DetailScreen';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import HomeScreen from './components/Layout/HomeScreen';
import Profile from './components/Profile/Profile';
import Auth from './components/Auth/Auth';
import CartProvider from './store/CartProvider';
import AuthContext from './store/auth-context';

function App() {
  const authCtx = useContext(AuthContext)

  return (
    <div className='App'>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/kookie/:id" element={<DetailScreen />} />
          <Route path='/auth' element={!authCtx.token ? <Auth/> : <Navigate to='/' />}/>
          <Route path='/profile' element={authCtx.token ? <Profile /> : <Navigate to='/' />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
