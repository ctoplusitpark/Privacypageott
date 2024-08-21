// src/components/Navbar.js
import React, { useState } from 'react';
import './index.css';

const Navbar:React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <button className="menu-button" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`desktop-menu ${isOpen ? 'open' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/policies">Policies</a></li>
          <li><a href="/refund-policy">Refund Policy</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms-of-condition">Terms of Condition</a></li>
          <li><a href="/child-protection">Child Protection</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
