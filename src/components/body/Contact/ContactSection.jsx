import React from 'react';
import './contact.css'; // Import the CSS file for styling
import Footer from '../../Footer/Footer';


const ContactSection = () => {
  return (
    <>
    <section className="contact-section">
      <div className="container_Co">
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
            <div className="forms">
            <iframe src="https://forms.visme.co/formsPlayer/rxw30wp0-untitled-project" className="cont_us"> </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContactSection;
