import React from 'react';
import './Logo_p.css';
import { asset } from '../../assets/asset';

function Logo_p() {
  return (
    <>
    <div className="ki">
      <div className="link_name">/ Logo Designing </div>
    
    <div className="container_logo">
      <div className="logo_container">
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
            before the deadline - <strong>It will be updated as soon as possible.</strong>
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
        <a href="#" className="form-link">
          Fill out the form
        </a>
        <a href="#" className="register-link">Register Here ➡</a>
      </div>

      <div className="image-section">
        <h1>Visit our old memories and success Below</h1>
        <img src={asset.Logo_design_comp} alt="Logo Designing Contest" className='Logo_img_comp'/>
      </div>
    </div>
    </div>
    </div>
    </>
  );
}

export default Logo_p;