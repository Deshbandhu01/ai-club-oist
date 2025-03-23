import React from 'react';
import './contact.css'; // Import the CSS file for styling
import Footer from '../../Footer/Footer';


const ContactSection = () => {
  return (
    <>
    <section className="contact-section">
      <div className="container_C">
        <div className="grid-container">
          {/* Left section with Video Background */}
          <div className="contact-info">
            <div className="contact-content">
              <h3 className="contact-heading">Contact Information</h3>
              <p className="contact-description">
                Fill up the form and our Team will get back to you within 24 hours.
              </p>
              <div className="contact-item">
                <span className="contact-icon"><i className="fas fa-phone"></i></span>
                <span className="contact-details">(+91) 8109014548 (Deshbandhu)</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon"><i className="fas fa-envelope"></i></span>
                <span className="contact-details" >aiclub@oriental.ac.in</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon"><i className="fas fa-map-marker-alt"></i></span>
                <span className="contact-details">
                  Oriental Institute of Science and Technology, Opp. Patel Nagar, Bhopal
                </span>
              </div>
              <div className="social-links">
                <a href="https://www.linkedin.com/feed/" className="social-link">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/aicluboist/" className="social-link">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right section for Contact Form */}
          <div className="contact-form">
            <h2 className="form-heading">Say Hi!</h2>
            <p className="form-description">We'd like to talk with you.</p>
            <form method="post">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input id="name" type="text" placeholder="Enter your full name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Mobile Number</label>
                <input id="phone" type="text" placeholder="Enter your mobile number" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your message</label>
                <textarea id="message" rows="6" placeholder="Write your message here"></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContactSection;
