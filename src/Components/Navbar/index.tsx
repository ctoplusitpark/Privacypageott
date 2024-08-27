import React, { useState } from 'react';
import './index.css';

const Navbar:React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Inderjala</div>
      <input type="checkbox" 
        id="toggle-menu"
        checked={isOpen} 
        onChange={toggleMenu} 
        style={{ display: 'none' }} />
        <label htmlFor="toggle-menu" className="hamburger">&#9776;</label>
        <ul className="menu">
          <li><a href="/">Home</a></li>
          <li><a href="/policies">Policies</a></li>
          <li><a href="/refund-policy">Refund Policy</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms-of-condition">Terms of Condition</a></li>
          <li><a href="/child-protection">Child Protection</a></li>
        </ul>
        <div className='search-box'>
          <input type='text' placeholder='Search'/>
        </div>
    </nav>
  );
};

export default Navbar;
