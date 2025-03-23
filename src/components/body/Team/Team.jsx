import React from 'react';
import './Team.css'; // Make sure to import the CSS file
import { asset } from '../../../assets/asset';
const Team = () => {
  return (
    <section className="core-team-section">
      <div className="core-team-container">
        <div className="core-team-heading">
          <h3 className="core-team-title">The Core Team</h3>
          <p className="core-team-description">Meet the dynamic and diligent faces behind the club.</p>
        </div>
        <div className="core-team-grid">
          <div className="core-team-member">
            <div className="core-team-card">
              <div className="core-team-image">
                <img src={asset.Mitanshi} alt="Mitanshi Jain" />
              </div>
              <div className="core-team-details">
                <h5 className="core-team-name">Mitanshi Jain</h5>
                <h6 className="core-team-role">President</h6>
                <p className="core-team-bio">CSE AIML 26' - Initiates and leads club projects, fostering a positive and inclusive club environment.</p>
              </div>
            </div>
          </div>
          <div className="core-team-member">
            <div className="core-team-card">
              <div className="core-team-image">
                <img src={asset.Zeeshan} alt="Zeeshan Lucknowi" />
              </div>
              <div className="core-team-details">
                <h5 className="core-team-name">Zeeshan Lucknowi</h5>
                <h6 className="core-team-role">Vice President</h6>
                <p className="core-team-bio">CSE AIML 26' - Drives the club's initiatives forward, bringing creativity and dedication to every task.</p>
              </div>
            </div>
          </div>
          <div className="core-team-member">
            <div className="core-team-card">
              <div className="core-team-image">
                <img src={asset.khus} alt="Khush Paliwal" />
              </div>
              <div className="core-team-details">
                <h5 className="core-team-name">Khush Paliwal</h5>
                <h6 className="core-team-role">Secretary</h6>
                <p className="core-team-bio">CSE AIML 26' - Ensures smooth communication within the club, playing a vital role in coordinating events and activities.</p>
              </div>
            </div>
          </div>
          <div className="core-team-member">
            <div className="core-team-card">
              <div className="core-team-image">
                <img src={asset.Deshbandhu} alt="Deshbandhu Badhauliya" />
              </div>
              <div className="core-team-details">
                <h5 className="core-team-name">Deshbandhu Badhauliya</h5>
                <h6 className="core-team-role">Technical Head</h6>
                <p className="core-team-bio">CSE AIML 26' - Manages Technical Tasks and contributing to the club's success with enthusiasm and diligence.</p>
              </div>
            </div>
          </div>
        </div>
        <a className="core-team-button" href="/team">See the full team</a>
      </div>
    </section>
  );
};

export default Team;
