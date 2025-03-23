import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <section className="about-us-section">
      <div className="container">
        <div className="grid-container1">
          {/* About Us Card */}
          <div className="grid-item grid-item-4">
            <div className="card">
              <div className="card-inner">
                <div className="card-front">
                  <h3 className="section-title">About Us</h3>
                  <p className="description">
                    AI Club is a vibrant community of AI enthusiasts at OIST, Bhopal. We are a collective of students driven by curiosity, innovation, and a shared love for advancing technology.
                  </p>
                </div>
                <div className="card-back">
                  <h3 className="section-title">Stay Ahead</h3>
                  <p className="description">
                    Become a member, attend our events, and contribute to cutting-edge projects. Whether you're an AI enthusiast, a developer, or simply curious about the possibilities, there's a place for you here.
                  </p>
                  <a href="/contact" className="contact-link">Contact Us</a>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid-item grid-item-7">
            <div className="grid-row">
              {/* Feature 1: Innovative Projects */}
              <div className="grid-item-6">
                <div className="feature">
                  <h3 className="feature-title">
                    <span className="material-icons-round">code</span> Innovative Projects
                  </h3>
                  <p className="feature-description">
                    Dive into hands-on projects that apply AI concepts to real-world challenges.
                  </p>
                </div>
              </div>
              {/* Feature 2: Interactive Workshops */}
              <div className="grid-item-6">
                <div className="feature">
                  <h3 className="feature-title">
                    <span className="material-icons-round">devices</span> Interactive Workshops
                  </h3>
                  <p className="feature-description">
                    Join our workshops led by industry experts and experienced members to enhance your skills.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid-row">
              {/* Feature 3: Collaborative Learning */}
              <div className="grid-item-6">
                <div className="feature">
                  <h3 className="feature-title">
                    <span className="material-icons-round">group</span> Collaborative Learning
                  </h3>
                  <p className="feature-description">
                    Connect with like-minded individuals, share ideas, and grow together in the ever-evolving field of AI.
                  </p>
                </div>
              </div>
              {/* Feature 4: Networking Opportunities */}
              <div className="grid-item-6">
                <div className="feature">
                  <h3 className="feature-title">
                    <span className="material-icons-round">share</span> Networking Opportunities
                  </h3>
                  <p className="feature-description">
                    Forge connections with professionals, researchers, and fellow students passionate about AI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
