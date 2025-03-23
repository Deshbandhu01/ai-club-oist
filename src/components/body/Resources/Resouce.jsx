import React from 'react';
import './resource.css';
import { asset } from '../../../assets/asset';

const Resource = () => {
  return (
    <div className="resources-section">
      

      <div className="resource-grid">
      <div className="event-bar">
        <h3 className="section-title">Resources</h3>
        <p className="section-subtitle">Important Resources</p>              
        </div> 
        <div className="resource-item">
          <a href="/events/AIEdge" className="resource-link">
            <div className="resource-card">
              <div className="resource-image">
                <img 
                  src={asset.Edge_ai_2023} 
                  alt="Edge AI Magazine 2023" 
                  className="resource-img" 
                />
              </div>
              <div className="resource-info">
                <h6 className="resource-title">Edge AI Magazine 2023</h6>
              </div>
            </div>
          </a>
        </div>
        <div className="resource-item">
          <a href="/events/AIEdge" className="resource-link">
            <div className="resource-card">
              <div className="resource-image">
                <img 
                  src="./static/media/edge.f5471a04fcb835a78ccc.png" 
                  alt="Edge AI Magazine 2023" 
                  className="resource-img" 
                />
              </div>
              <div className="resource-info">
                <h6 className="resource-title">Edge AI Magazine 2024</h6>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resource;
