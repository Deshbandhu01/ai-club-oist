import React from 'react';
import './Contact_Bg.css';


const Contact_Bg = () => {
  return (
    <div className="video-container1">

      <video className="contact_bg" autoPlay muted loop>
        <source src="/contact_Bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        {/* <h1><Navbar /></h1>
        <p><SplineScene /></p> */}
      </div>
    </div>
  );
};

export default Contact_Bg;
