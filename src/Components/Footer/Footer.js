import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <div className="Footer">

      <div className="footer-div1">
       <p className="footer-appName">Indrajala Movie Makers LLP. </p>
       <p className="footer-c"> © 2024 Copyrights .  All Rights Reserved</p>
        <p className="footer-about">
        Indrajala Movie Makers LLP takes pride in providing a wide range of
        fantasy content to our users. We are committed to maintaining the
        highest standards of quality and ensuring a safe and enjoyable
        experience for all our viewers.
        </p>
      </div>

    <div className="footer-links1">
   <a href=""> <li className="footer-links">Account Deletion</li></a>
   <a href=""> <li className="footer-links">Age Restrictions</li></a>
   <a href=""> <li className="footer-links">Broken Links</li></a>
   <a href=""> <li className="footer-links">Cancellation Policy</li></a>
   <a href=""> <li className="footer-links">Child Protection</li></a>
    </div>

    <div className="footer-links2">
   <a href=""> <li className="footer-links">Contend Removal</li></a>
   <a href=""> <li className="footer-links">Cookie Policy</li></a>
   <a href=""> <li className="footer-links">Copyright Policy</li></a>
   <a href=""> <li className="footer-links">User Conduct</li></a>
   <a href=""> <li className="footer-links">Contacts</li></a>
    </div>

    <div className="footer-links3">
    <a href=""> <li className="footer-links">Child Protection</li></a>
    <a href=""> <li className="footer-links">Contend Removal</li></a>
    <a href=""> <li className="footer-links">Cookie Policy</li></a>
    <a href=""> <li className="footer-links">Copyright Policy</li></a>
    <a href=""> <li className="footer-links">Contacts</li> </a>
    <a href=""> <li className="footer-links">User Conduct</li></a>
    </div>

    
    </div>
  );
};

export default Footer;
