import React from 'react';
import './Mag1.css';
import { asset } from '../../assets/asset';
function Mag1() {
  return (
    <div className="container_mag">
      <h1>Cypher-30</h1>
      <div className="content_mag">
        <div className="text-section">
          <h2>Edge AI - The Annual Departmental Magazine</h2>
          <p><strong>Greetings Everyone! ✨</strong></p>
          <p>
            Department of CSE-AIML is excited to announce the launch of the
            departmental e-magazine, <strong>Edge AI</strong>, in collaboration with AI Club. 
            This biannual publication covers every facet of artificial intelligence. 
            Due to its several intriguing aspects, it is more fascinating. 
            Hope you like reading it.
          </p>
          <p><strong>Happy Reading 🌻</strong></p>
          <a href="#" className="download-link">Download Now ➡</a>
        </div>
        
        <div className="image-section">
          <img src={asset.Edge_ai_2023} alt="Edge AI Magazine" />
        </div>
      </div>
    </div>
  );
}

export default Mag1;