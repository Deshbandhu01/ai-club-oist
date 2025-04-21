import React, { useState } from 'react';
import './Cypher30_3.css';
import { asset } from '../../assets/asset';

function Cypher30_3() {
  // State to handle the popup
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => {
    setShowPopup(true);

    // Hide the popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  // Leaderboard state
  const [players, setPlayers] = useState([
    // { name: 'Alice', score: 120 },
    // { name: 'Bob', score: 150 },
    // { name: 'Charlie', score: 130 },
    // { name: 'Dave', score: 110 },
  ]);

  const [newPlayer, setNewPlayer] = useState({ name: '', score: '' });

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPlayer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle adding a new player
  const handleAddPlayer = () => {
    if (newPlayer.name && newPlayer.score) {
      setPlayers((prev) => [...prev, { ...newPlayer, score: parseInt(newPlayer.score) }]);
      setNewPlayer({ name: '', score: '' });
    }
  };

  // Sort the leaderboard data by score in descending order
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

  return (
    <>
      <div className="link_name">/ Latest</div>
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
            <div className="solutions_box">
              <div className='Solu_sec'>
              👉 <a href="Solution_of_cypher30_Week_1_questions.pdf" download>Week 1 &rarr; (Solutions are live)</a>
              </div>
              <div className='Solu_sec'>
              👉 <a href="#" onClick={handlePopup}>Week 2 &rarr; (Coming soon!)</a>
              </div>

              <div className='Solu_sec'>
              👉 <a href="#" onClick={handlePopup}>Week 3 &rarr; (Coming soon!)</a>
              </div>

              <div className='Solu_sec'>
              👉 <a href="#" onClick={handlePopup}>Week 4 &rarr; (Coming soon!)</a>
              </div>

              {/* Clickable list items for weeks without a link */}
              <div className='Solu_sec'>
              👉 <a href="#" onClick={handlePopup}>Week 5 &rarr; (Coming soon!)</a>
              </div>
              </div>
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
            <p>This will be available soon! 🚧</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Leaderboard Section */}
      <div className="Leader_board">
      <h2>💥LeaderBoard💥</h2>
      <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {sortedPlayers.map((player, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{player.name}</td>
                <td>{player.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Leaderboard will be updated as soon as possible.</p>
        </div>
    </>
  );
}

export default Cypher30_3;