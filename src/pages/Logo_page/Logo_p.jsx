import React from 'react';
import './Logo_p.css';

function Logo_p() {
  return (
    <div className="container_logo">
      <div className="content_logo">
        <h1>Design the official logo of AI Club OIST!</h1>
        <p>Calling all the Aficionados...!</p>
        <p>Join the AI Club Logo Designing Contest! 🚀</p>
        <p>
          The AI Club is thrilled to present the Logo Designing Contest, where
          you can showcase your creativity and create a logo that embodies our
          club's spirit.
        </p>

        <h3>Guidelines:</h3>
        <ul>
          <li>
            <strong>Design Format:</strong> Your design should be submitted in digital format
            (PNG, JPG), with square dimensions and must be original. Multiple
            designs are also accepted in the form of .zip file.
          </li>
          <li>
            <strong>Submission:</strong> Fill out the Google Form below. Submit your entry
            before the deadline - <strong>25 Aug, 2023.</strong>
          </li>
          <li>
            <strong>Contest:</strong> Best of the designs will be featured on our Insta page and
            will be chosen on the basis of voting (through stories).
          </li>
          <li>
            <strong>Prizes Await: 🎨</strong> The winning logo will become the official emblem of
            the AI Club, and the designer will be featured in our Instagram
            handle and also get a chance to be in the core team of the club!
          </li>
        </ul>
        
        <p>
          Ready to inspire? Ready to create? Join the Logo Designing Contest
          and let your creativity take flight!✨
        </p>
        <a href="https://forms.gle/VH5qfwBwb2vuGJ728" className="form-link">
          Fill out the form
        </a>
        <a href="#" className="register-link">Register Here ➡</a>
      </div>

      <div className="image-section">
        <img src="ai-club-logo.png" alt="Logo Designing Contest" />
      </div>
    </div>
  );
}

export default Logo_p;