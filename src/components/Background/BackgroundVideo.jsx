import React from 'react';
import './BackgroundVideo.css';
import Navbar from '../Navbar/Navbar';
import SplineScene from '../SplineScene/SplineScene';

const BackgroundVideo = () => {
  return (
    <>
    <div className="ki">
    <div className="video-container">
      
      <video className="background-video" autoPlay muted loop playsInline>
        <source src="/backvideo.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
    </div>
    </>
  );
};

export default BackgroundVideo;
