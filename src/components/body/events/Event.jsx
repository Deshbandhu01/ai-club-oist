import React from 'react';
import './Event.css';
import { asset } from '../../../assets/asset';

const Event= () => {
  return (
    <>
    <h2 className='ai-tit'>Explore Ai Club</h2>
    <div className="event-section">
      

      <div className="event-grid">
        <div className="event-bar">
            <h3 className="event-title">Events</h3>
            <p className="event-subtitle">Important Resources</p>                
        </div> 
        <div className="event-item">
          <a href="/events/AIEdge" className="event-link">
            <div className="event-card">
              <div className="event-image">
                <img 
                  src={asset.Logo_design_comp} 
                  alt="Edge AI Magazine 2023" 
                  className="event-img" 
                />
              </div>
              <div className="event-info">
                <h6 className="event-title">Logo Designing Competition</h6>
              </div>
            </div>
          </a>
        </div>
        <div className="event-item">
          <a href="/events/AIEdge" className="event-link">
            <div className="event-card">
              <div className="event-image">
                <img 
                  src={asset.TEDx_comp}
                  alt="Edge AI Magazine 2023" 
                  className="event-img" 
                />
              </div>
              <div className="event-info">
                <h6 className="event-title">TEDx Oriental Institute of Science and Technology</h6>
              </div>
            </div>
          </a>
        </div>
        <div className="event-item">
          <a href="/events/AIEdge" className="event-link">
            <div className="event-card">
              <div className="event-image">
                <img 
                  src={asset.Cypher_30_win} 
                  alt="Edge AI Magazine 2023" 
                  className="event-img" 
                />
              </div>
              <div className="event-info">
                <h6 className="event-title">Cypher-30</h6>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default Event;
