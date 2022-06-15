/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './header.css';
// import mySvg from '../../images/cart-svgrepo-com.repo';

const Header = () => {
  return (
    <header className="header">
      <Menu pageWrapId={'page-wrap'}>
        <Link to="/" className="home">
          <li className="nav-text">Home</li>
        </Link>
        <Link to="/signup" className="signup">
          <li className="nav-text">Sign up</li>
        </Link>
        <Link to="/contact" className="contact">
          <li className="nav-text">Contact</li>
        </Link>
      </Menu>
      <h3>Logo here</h3>
      <div className="symbols">
        <Link to="/cart" className="cart">
          {/* <img src={mySvg} alt="cart logo" /> */}
          <span>🛒</span>
        </Link>
        <Link to="/signup" className="signup-symbol">
          <span>🕴️</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
