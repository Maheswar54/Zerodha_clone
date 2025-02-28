import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/home/HomePage';

import Pricingpage from './landing_page/pricing/PricingPage';
import SupportPage from './landing_page/support/SupportPage';
import Aboutpage from './landing_page/about/AboutPage';
import ProductPage from './landing_page/products/ProductPage';
import {BrowserRouter ,Routes,Route} from 'react-router-dom';
import Signup from './landing_page/signup/Signup';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
     <Routes>
     
  <Route path="/" element={<HomePage/>}></Route> 
  
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/about" element={<Aboutpage/>}></Route>
          <Route path="/product" element={<ProductPage/>}></Route>
          <Route path="/pricing" element={<Pricingpage/>}></Route>
          <Route path="/support" element={<SupportPage/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
     </Routes>
    <Footer/>
  
  </BrowserRouter>
);


