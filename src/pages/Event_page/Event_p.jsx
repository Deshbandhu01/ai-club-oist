import React from 'react';
import './Event_p.css';
import { asset } from '../../assets/asset';
import { Link } from 'react-router-dom';
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
          <Link to="LogoDesign">
          {/* <a href="/events/LogoDesign"> */}
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
            {/* </a> */}
            </Link>
        </div>
        <div className="event-item">
        <Link to="TEDx">
          {/* <a href="/events/TEDx" className="event-link"> */}
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
          {/* </a> */}
          </Link>
        </div>

        

        <div className="event-item">
          <Link to="Cypher30">
          {/* <Link to="events/Cypher30"> */}
          {/* <a href="/events/Cypher30" className="event-link"> */}
            <div className="event-card cype-img">
              <div className="event-image cyp-img">
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
          {/* </a> */}
          </Link>
          {/* </Link> */}
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
          <Link to="Magazine_1.0">
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
          
          </Link>
        </div>
        <div className="resource-item">
          <Link to="Magazine_2.0" >
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
          </Link>
        </div>
      </div>
    </div>
    
    </div>
    </div>
    </>
  );
};

export default Event_p;
