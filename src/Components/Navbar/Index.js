import React, { useState } from "react";
import "./index.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>I</span>ndrajala 
            <span>P</span>olicy
            <span>P</span>age

          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">Policies</NavLink>
            </li>
            <li>
              <NavLink to="/service">Refund Policy</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Privacy Policy</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Terms of Condition</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Child Protection</NavLink>
            </li>
          </ul>
        </div>
      </nav>
     
    </>
  );
};

export default Navbar;