import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Add styles to this file for the Navbar
import { asset } from '../../assets/asset';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu for hamburger
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when a menu item is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Left-hand side: Logo */}
      <div className="navbar-left">
        <Link to="/" className="logo">
          <img
            src={asset.logo}
            alt="Header Logo"
            className="Logo"
            onClick={closeMenu}
          /> {/* Replace with your logo */}
        </Link>
      </div>

      {/* Right-hand side: Menu items */}
      <div className={`navbar-right ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/Latest" className="uno" onClick={closeMenu}>
              <p>💥</p> Latest
            </Link>
          </li>
          <li>
            <Link to="/events" className="uno" onClick={closeMenu}>
              <i className="fa-solid fa-calendar-check"></i> Events
            </Link>
          </li>
          <li>
            <Link to="/team" className="uno" onClick={closeMenu}>
              <i className="fa-solid fa-users"></i> Team
            </Link>
          </li>
          <li>
            <Link to="/blog" className="uno" onClick={closeMenu}>
              <i className="fa-solid fa-message"></i> Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="uno" onClick={closeMenu}>
              <i className="fa-solid fa-phone"></i> Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger menu icon for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
