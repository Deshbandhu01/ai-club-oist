import React from 'react';
import './Cypher30_p.css';
import { asset } from '../../assets/asset';
import { Link } from 'react-router-dom';

function Cypher30_p() {
  return (
    <>
    <div className="ki">
    <div className="link_name">/ Cypher30_3.0</div>
    <div className="container_cyp">
      <div className="cont_cypher">
      <div className="cy_content">
        <h1>Cypher-30 3.0 - A 30 day coding challenge</h1>
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
        </ul>
        <h3>💥💥 Rules for the <strong>Cypher30 3.0</strong> are below 💥💥</h3>
        <ul>
          <li>👉 No Team participation allowed, Individual participation allowed only.</li>
          <li>👉 Participation should have a <strong>hackerrank id</strong> to participate in this contest.</li>
          <li>👉 The answer of each weeks have to be submitted before the start of the next week question.</li>
          <li>👉 It is a 5 week contests and each week is based on specific topics.</li>
          <li>👉 The final round is held at the <strong>Ai Lab</strong> itself.</li>
          <li>👉 The person who solve the question first should have a rank higher than the other.</li>
          <li>👉 Top 3 will get the cash prizes along with the E-certifications and remaining will get the certificate of participation.</li>
          <li>👉 Last day of registration is 30<sup>th</sup> March.</li>
        </ul>
        <h3>💥💥 Week by Topics for <strong>Cypher30 3.0</strong> are below 💥💥</h3>
        <ul>
          <li>👉 Week 1:- <strong>Array & String.</strong></li>
          <li>👉 Week 2:- <strong>Sorting & Searching.</strong></li>
          <li>👉 Week 3:- <strong>Recursion & Backtracking.</strong></li>
          <li>👉 Week 4:- <strong>Stack,Queue & Linked List.</strong></li>
          <li>👉 Week 5:- <strong>Dynamic Programming & Graphs.</strong></li>
        </ul>
        <a href="https://forms.gle/Hc69ATQZkJ7TWxXB7" className="register-btn">Register Here →</a>
        <Link to="/latest">Solutions are Here</Link>
      </div>
      <div className="image-section_cy">
        <img src={asset.Cypher_30_win} alt="Cypher 30 Challenge" className='Cypher30_1' />
      </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default Cypher30_p;