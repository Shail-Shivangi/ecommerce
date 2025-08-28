import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import UserProfile from './Components/UserProfile';
import Home from './Components/Home';
import Wishlist from './Components/Wishlist';
import AuthForm from './Components/AuthForm';
import Footer from './Components/Footer';
import Header from './Components/Header'; 
import CustomerSupport from './Components/CustomerSupport';
import Cart from './Components/Cart' ;
import FAQ from './Components/FAQ';
import Product from './Components/Product';
import Aboutus from './Components/Aboutus';

const App = () => {
  return (
    <Router>
      <Header /> {/* Adding the header to all pages */}
      <Routes>
        {/* <Route path="/" element={<UserProfile user="Mr Meow" email="meow_meow@gmail.com" />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path ="/auth"element={<AuthForm />} />
        <Route path ="/cart" element={<Cart/>}/>
        <Route path="/support" element ={<CustomerSupport/>}/>
        <Route path="/faq" element={<FAQ/>}/>
        <Route path="/shop" element={<Product/>}/>
        <Route path="/about" element={<Aboutus/>}/>
        
       
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
