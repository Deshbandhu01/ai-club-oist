import React from 'react';
import './Event_p.css';
import { asset } from '../../assets/asset';

const Event_p= () => {
  return (
    <>
    <div className="ki">
    <div className="link_name">/ Events</div>
    <div className="eve_con">
    <div className="event-section">
    <h2 className='ai-tit'>Explore Ai Club</h2>

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
    
    </div>
    </div>
    </>
  );
};

export default Event_p;
