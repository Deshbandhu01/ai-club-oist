import React from 'react';
import './resource.css';
import { asset } from '../../../assets/asset';
import { Link } from 'react-router-dom';

const Resource = () => {
  return (
    <div className="resources-section">
      

      <div className="resource-grid">
      <div className="event-bar">
        <h3 className="section-title">Resources</h3>
        <p className="section-subtitle">Important Resources</p>              
        </div> 
        <div className="event-item">
        <Link to="events/Magazine_1.0">
          {/* <a href="/events/TEDx" className="event-link"> */}
            <div className="event-card">
              <div className="event-image blog-card">
                <img 
                  src={asset.Edge_ai_2023}
                  alt="Edge AI Magazine 2023" 
                  className="event-img" 
                />
              </div>
              <div className="event-info">
              <h6 className="event-title">Edge AI Magazine 2023</h6>
              </div>
            </div>
          {/* </a> */}
          </Link>
        </div>

        <div className="event-item">
        <Link to="events/Magazine_2.0">
          {/* <a href="/events/TEDx" className="event-link"> */}
            <div className="event-card">
              <div className="event-image blog-card">
                <img 
                  src={asset.Edge_ai_2024}
                  alt="Edge AI Magazine 2024" 
                  className="event-img" 
                />
              </div>
              <div className="event-info">
              <h6 className="event-title">Edge AI Magazine 2024</h6>
              </div>
            </div>
          {/* </a> */}
          </Link>
        </div>
        
        <div className="event-item">
        <Link to="events/Magazine_3.0">
          {/* <a href="/events/TEDx" className="event-link"> */}
            <div className="event-card">
              <div className="event-image blog-card">
                <img 
                  src={asset.Edge_ai_2024}
                  alt="Edge AI Magazine 2024" 
                  className="event-img" 
                />
              </div>
              <div className="event-info">
              <h6 className="event-title">Edge AI Magazine 2025</h6>
              </div>
            </div>
          {/* </a> */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resource;
