// import "./Footer.css"

// function Footer(){
//     return (<>
//     <div className="copyright">
//     <p>&copy; {new Date().getFullYear()} Your website name</p>
//     </div>
    
//     </>);
// }

// export default Footer;

import React from "react";
import "./Footer.css";
import { asset } from "../../assets/asset";

const Footer = () => {
  return (
    <>
       
    <br />
    <footer className="footer-container">
        
      <div className="footer-content">
        <a href="/" className="footer-logo">
            <img
              src={asset.logo}
              alt="Footer Logo" className="Logo"
            />
        </a>
        <div className="footer-logo-section">
          
          <p className="footer-description">AI Club
            Oriental Institute of
            Science and Technology,
            Bhopal
          </p>
        </div>

        <div className="footer-links">
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="">Services</a></li>
          </ul>
        </div>

        <div className="footer-social-media">
          <ul>
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
            <li><a href="https://instagram.com">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>All rights reserved &copy; 2025 AI Club OIST by Deshbandhu Badhauliya</p>
      </div>
    </footer>
    </>
  );
};

export default Footer;
