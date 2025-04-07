import React, { useState } from 'react';
import './Cypher30_3.css';
import { asset } from '../../assets/asset';

function Cypher30_3() {
  // State to control the popup visibility
  const [showPopup, setShowPopup] = useState(false);

  // Function to handle the popup display
  const handlePopup = () => {
    setShowPopup(true);

    // Hide the popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000); 
  };

  return (
    <>
      <div className="link_name">/ Latest </div>
      <div className="container_cyp">
        <div className="cont_cypher">
          <div className="cy_content">
            <h1>Cypher-30 3.0 - A 30 day coding challenge</h1>
            <p>Greetings Everyone!! 🌻</p>
            <p>
              AI Club, Department of CSE-AIML, OIST is organizing Cypher 30, a 30-day coding challenge, starting from
              <strong> 1st April to 1st May 2025</strong>. 🛡
            </p>

            <h3>💥💥 Week by Topics for <strong>Cypher30 3.0</strong> are below 💥💥</h3>
            <ul>
              <li>👉 Week 1:- <strong>Array & String.</strong></li>
              <li>👉 Week 2:- <strong>Sorting & Searching.</strong></li>
              <li>👉 Week 3:- <strong>Recursion & Backtracking.</strong></li>
              <li>👉 Week 4:- <strong>Stack,Queue & Linked List.</strong></li>
              <li>👉 Week 5:- <strong>Dynamic Programming & Graphs.</strong></li>
            </ul>

            <h3>💥💥 Solutions for the Week-by-Topics of <strong>Cypher30 3.0</strong> are below 💥💥</h3>

            <ul>
              <li>👉 <a href="Solution_of_cypher30_Week_1_questions" download>Week 1 &rarr; (Solutions are live)</a></li>
              <li>👉 <a href="#" onClick={handlePopup}>Week 2 &rarr; (Coming soon!)</a></li>
              <li>👉 <a href="#" onClick={handlePopup}>Week 3 &rarr; (Coming soon!)</a></li>
              <li>👉 <a href="#" onClick={handlePopup}>Week 4 &rarr; (Coming soon!)</a></li>
              {/* Clickable list items for weeks without a link */}
              <li>👉 <a href="#" onClick={handlePopup}>Week 5 &rarr; (Coming soon!)</a></li>
            </ul>

          </div>
          <div className="image-section_cy">
            <img src={asset.Cypher_30_win} alt="Cypher 30 Challenge" className='Cypher30_1' />
          </div>
        </div>
      </div>

      {/* Popup for unavailable links */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>This Week solution will be available soon! 🚧</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Popup Styling */}
      <style jsx>{`
        .popup {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .popup-content {
          background: white;
          padding: 20px;
          border-radius: 5px;
          text-align: center;
          width: 300px;
        }

        button {
          background-color: #007bff;
          color: white;
          border: none;
          padding: 10px;
          cursor: pointer;
          border-radius: 5px;
        }

        button:hover {
          background-color: #0056b3;
        }
      `}</style>

      
    </>
  );
}

export default Cypher30_3;


