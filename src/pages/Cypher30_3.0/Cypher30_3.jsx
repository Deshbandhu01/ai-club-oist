import React from 'react';
import './Cypher30_3.css';
import { asset } from '../../assets/asset';

function Cypher30_p() {
  return (
    <>
    <div className="link_name">/ Cypher30</div>
    <div className="container_cyp">
      <div className="cont_cypher">
      <div className="cy_content">
        <h1>Cypher-30 - A 30 day coding challenge</h1>
        <p>Greetings Everyone!! 🌻</p>
        <p>
          AI Club, Department of CSE-AIML, OIST is organizing Cypher 30, a 30-day coding challenge, starting from
          <strong> 1st April to 1st May 2025</strong>. 🛡
        </p>
        <p>💥💥 <a href="https://forms.gle/Hc69ATQZkJ7TWxXB7">Register Are Open Again Now</a> 💥💥</p>
        <ul>
          <li>👉 Don't forget to share it with your friends and classmates</li>
          <li>👉 We aim to help you improve your coding skills, challenge yourself every day, and have fun along the way with coding.</li>
          <li>👉 E-certificates will be provided to every participant for completing the challenge.</li>
          <li>👉 The challenge will be hosted on HackerRank, helping participants enhance their profiles with daily challenges.</li>
          <li>👉 Open to 1st year 2nd year and 3rd year students, regardless of skill level or coding knowledge.</li>
          <li>👉 <strong>Rules</strong> As you all know, Cypher 30 3.0 is happening soon!

For this, each week has been assigned a specific topic, and volunteers (2nd-year students) will be paired with a lead (3rd-year student) for each week.

Here’s the weekly breakdown:
Week 1: Arrays and Strings
Week 2: Sorting and Searching
Week 3: Recursion and Backtracking
Week 4: Stack, Queue, and Linked List
Week 5: Dynamic Programming and Graphs

I will now share the list of assigned teams. Stay tuned!</li>
        </ul>
        <a href="https://forms.gle/Hc69ATQZkJ7TWxXB7" className="register-btn">Register Here →</a>
      </div>
      <div className="image-section_cy">
        <img src={asset.Cypher_30_win} alt="Cypher 30 Challenge" className='Cypher30_1' />
      </div>
      </div>
    </div>
    </>
  );
}

export default Cypher30_p;