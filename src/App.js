import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import Main from 'components/Main/Main';
import SignUp from 'components/SignUp';
import Cart from 'components/Cart';
import Checkout from 'components/Checkout';
import NotFound from 'components/NotFound';
import Contact from 'components/Pages/Contact';

export const App = () => {
  return (
    <div className="main">
      {/* <Provider> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
