import React from 'react';
import './Tedx_p.css';
import { asset } from '../../assets/asset';

const Tedx_p = () => {
  return (
    <div className="tedx-container">
        <div className="ted-x">
            <div className="ted-right">
      <h1 className="tedx-title">
        TEDx 2023 <span>@Oriental Institute of Science and Technology</span>
      </h1>
      <p>TEDx is now coming at Oriental Bhopal!</p>
      <p>The teams are set, the minds are ignited, and something extraordinary is coming to our campus!!</p>
      <p>🤯 Check out our latest reel here!</p>
      
      <a href="https://instagram.com/reel/Cw9oDJ4vMaS" target="_blank" rel="noopener noreferrer">
        Instagram Reel
      </a>

      <p>Please follow the official page on Instagram for constant updates:</p>
      <a href="https://instagram.com/tedxoriental" target="_blank" rel="noopener noreferrer">
        TEDx Oriental Instagram
      </a>

      <p>Join the WhatsApp Community:</p>
      <a href="https://chat.whatsapp.com/GZEnmF4N1Qp6fAJJLgzFz9" target="_blank" rel="noopener noreferrer">
        WhatsApp Group
      </a>

      <h2>Speakers:</h2>
      <ul className="speaker-list">
        <li><b>Aryan Tripathi</b></li>
        <li><b>Bhawna Dehariya</b></li>
        <li><b>Dr. Tanu Jain</b></li>
        <li>Aditya Kachave</li>
        <li>Mohd. Fraz</li>
        <li>Siddharth Jain</li>
        <li>Rahul Bhargava</li>
      </ul>

      <a href="#" className="register-link">
        Register Here →
      </a>
      </div>
      
      <div className="image-container">
        <img src={asset.TEDx_comp} alt="TEDx Oriental Institute of Science and Technology" />
      </div>
      </div>
    </div>
  );
};

export default Tedx_p;