import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
    <div className="main-container">
      <div className="content">
        {/* Left Section: About AI Club */}
        <div className="about-section">
          <div className="heading_name">
          <h1 className="about-heading">About Us</h1>
          </div>
          
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p>AI Club is a vibrant community of AI enthusiasts at OIST, Bhopal. We are a collective of students driven by curiosity, innovation, and a shared love for advancing technology.</p>
              </div>
              <div className="flip-card-back">
                <p>Stay Ahead<br/>Become a member, attend our events, and contribute to cutting-edge projects.<br/>Whether you're an AI enthusiast, a developer, or simply curious about the possibilities, there's a place for you here.</p>
                <Link to="contact">
                <button className="contact-btn">Contact Us</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Feature Cards */}
        <div className="features-container">
          <div className="feature-card">
            <h2>🚀 Innovative Projects</h2>
            <p>Dive into hands-on projects that apply AI concepts to real-world challenges.</p>
          </div>
          <div className="feature-card">
            <h2>📚 Interactive Workshops</h2>
            <p>Join workshops led by industry experts to enhance your skills.</p>
          </div>
          <div className="feature-card">
            <h2>🤝 Collaborative Learning</h2>
            <p>Connect with like-minded individuals and grow in the AI field.</p>
          </div>
          <div className="feature-card">
            <h2>🔗 Networking Opportunities</h2>
            <p>Meet professionals, researchers, and students passionate about AI.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default App;
