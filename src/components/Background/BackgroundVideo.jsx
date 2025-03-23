import React from 'react';
import './BackgroundVideo.css';
import Navbar from '../Navbar/Navbar';
import SplineScene from '../SplineScene/SplineScene';

const BackgroundVideo = () => {
  return (
    <div className="video-container">
      
      <video className="background-video" autoPlay muted loop>
        <source src="/backvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
