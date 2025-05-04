import React, { useState, useEffect } from 'react';
import './Cypher30_3.css';
import { asset } from '../../assets/asset';

function Cypher30_3() {
  const [showPopup, setShowPopup] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false); // ⬅️ NEW

  const solutions = [
    {
      text: '💥Hot💥 👉 Week 4 → (Solutions are live)',
      link: 'Solution_of_cypher30_Week_4_questions .pdf',
      comingSoon: false,
    },
    {
      text: '👉 Week 1 → (Solutions are live)',
      link: 'Solution_of_cypher30_Week_1_questions.pdf',
      comingSoon: false,
    },
    {
      text: '👉 Week 2 → (Solutions are live)',
      link: 'Solution_of_cypher30_Week_2_questions.pdf',
      comingSoon: false,
    },
    {
      text: '👉 Week 3 → (Solutions are live)',
      link: 'Solution_of_cypher30_Week_3_questions.pdf',
      comingSoon: false,
    },
    {
      text: '👉 Week 5 → (Coming soon!)',
      link: '#',
      comingSoon: true,
    }
  ];

  
  const handlePopup = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

    // Leaderboard state
    const [players, setPlayers] = useState([
      { name: 'Sneha Gupta', score: 120 , Branch:'CSE',Year:'3rd' ,College:'OIST'},
      { name: 'Vidhika Thakre', score: 120 , Branch:'CSE-Aiml',Year:'2nd' ,College:'OIST '},
      { name: 'Punit Punde', score: 120 , Branch:'CSE-Aiml',Year:'3rd' ,College:'OIST'},
      { name: 'Kunal Jamne', score: 120 , Branch:'CSE-Aiml',Year:'3rd' ,College:'OIST '},
      { name: 'Nikhil Patel', score: 120 , Branch:'CSE-Aiml',Year:'3rd' ,College:'OIST'},
      // { name: 'Vidhika Thakre', score: 120 , Branch:'CSE-Aiml',Year:'2nd' ,College:'OIST '},
      
    ]);
  
    const [newPlayer, setNewPlayer] = useState({ name: '', score: '', Branch:'', Year:'', College:'' });
  
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize); // Re-check on resize
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
    <div className="ki">
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
              <li>👉 Week 1:- <strong >Array & String.</strong></li>
              <li>👉 Week 2:- <strong>Sorting & Searching.</strong></li>
              <li>👉 Week 3:- <strong>Recursion & Backtracking.</strong></li>
              <li>👉 Week 4:- <strong>Stack,Queue & Linked List.</strong></li>
              <li>👉 Week 5:- <strong>Dynamic Programming & Graphs.</strong></li>
            </ul>
            <h3>💥💥 Solutions for the Week-by-Topics of <strong>Cypher30 3.0</strong> are below 💥💥</h3>
            
            <hr />
            {/* <hr />
            <div className='hot'>
            💥💥Hot <a href="Solution_of_cypher30_Week_1_questions.pdf" download>Week 1 &rarr; (Solutions are live)</a>💥💥
            </div>
            <hr /> */}
            {/* 👉 Solution Box */}
            {isMobile ? (
              <div className="solutions_box">
                {solutions.map((solution, index) => (
                  <div className='Solu_sec' key={index}>
                    {solution.comingSoon ? (
                      <a href="#" onClick={handlePopup}>{solution.text}</a>
                    ) : (
                      <a href={solution.link} download>{solution.text}</a>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="solutions_box">
                <button
                  className="nav-button"
                  onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
                  disabled={currentIndex === 0}
                >
                  ⬅ Prev
                </button>

                <div className='Solu_sec'>
                  {solutions[currentIndex].comingSoon ? (
                    <a href="#" onClick={handlePopup}>{solutions[currentIndex].text}</a>
                  ) : (
                    <a href={solutions[currentIndex].link} download>{solutions[currentIndex].text}</a>
                  )}
                </div>

                <button
                  className="nav-button"
                  onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, solutions.length - 1))}
                  disabled={currentIndex === solutions.length - 1}
                >
                  Next ➡
                </button>
              </div>
            )}

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
              {/* <th>Score</th> */}
              <th>Branch</th>
              <th>Year</th>
              <th>College</th>
            </tr>
          </thead>
          <tbody>
            {sortedPlayers.map((player, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{player.name}</td>
                {/* <td>{player.score}</td> */}
                <td>{player.Branch}</td>
                <td>{player.Year}</td>
                <td>{player.College}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div class="slider">
          <p>The leaderboard is updated every Wednesday..</p>
        </div>
      </div>
      </div>
    </>
  );
}

export default Cypher30_3;
