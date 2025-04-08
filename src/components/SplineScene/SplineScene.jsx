import React, { useState, useEffect } from 'react';
import './SplineScene.css';
import Spline from '@splinetool/react-spline';

export default function SplineScene() {
  const [isVisible, setIsVisible] = useState(false);

  // IntersectionObserver to lazy load the Spline scene
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Load the Spline scene when it's in view
        }
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the element is visible
      }
    );
    
    const element = document.querySelector('.spline-scene');
    if (element) observer.observe(element);

    // Cleanup observer on unmount
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div className="spline-scene box">
      {isVisible ? (
        <Spline scene="https://prod.spline.design/NO7MaCViktGW8AFI/scene.splinecode" />
      ) : (
        <div>Loading...</div> // Placeholder or spinner while loading
      )}
    </div>
  );
}
