import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/contact" className="contact">
        <li>Contact</li>
      </Link>
      <Link to="/signup" className="signup">
        <li>Sign up</li>
      </Link>
      <h1>Footer</h1>
      <div className="social-media">
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">Pinterest</a>
      </div>
    </div>
  );
};

export default Footer;
