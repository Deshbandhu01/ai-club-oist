import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Add styles to this file for the Navbar
import { asset } from '../../assets/asset';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Left-hand side: Logo */}
      <div className="navbar-left">
        <Link to="/" className="logo">
        <img
              src={asset.logo}
              alt="Header Logo" className="Logo"
            /> {/* Replace with your logo */}
        </Link>
      </div>

      {/* Right-hand side: Menu items */}
      <div className={`navbar-right ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/blog">Blog</Link></li>
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
