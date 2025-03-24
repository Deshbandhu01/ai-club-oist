import React from 'react';
import './Cypher30_p.css';
import { asset } from '../../assets/asset';

function Cypher30_p() {
  return (
    <>
    
    <div className="container_cyp">
      <div className="cy_content">
        <h1>Cypher-30 - A 30 day coding challenge</h1>
        <p>Greetings Everyone!! 🌻</p>
        <p>
          AI Club, Department of CSE-AIML, OIST is organizing Cypher 30, a 30-day coding challenge, starting from
          <strong> 1st April to 1st May 2025</strong>. 🛡
        </p>
        <p>💥💥 <a href="http://bit.ly/3SyNrMb">Register Are Open Again Now</a> 💥💥</p>
        <ul>
          <li>👉 Don't forget to share it with your friends and classmates</li>
          <li>👉 We aim to help you improve your coding skills, challenge yourself every day, and have fun along the way with coding.</li>
          <li>👉 E-certificates will be provided to every participant for completing the challenge.</li>
          <li>👉 The challenge will be hosted on HackerRank, helping participants enhance their profiles with daily challenges.</li>
          <li>👉 Open to 1st year and 2nd year students, regardless of skill level or coding knowledge.</li>
          <li>👉 <strong>Rules</strong> are shared in the form of a PDF in the registration form. Please read them carefully.</li>
        </ul>
        <a href="http://bit.ly/https://docs.google.com/forms/d/e/1FAIpQLScxoU1w89B81lkhmw_Flz-wRxdSSK3fn_mse4mH_hzXGhP7Lw/viewform" className="register-btn">Register Here →</a>
      </div>
      <div className="image-section">
        <img src={asset.Cypher_30_win} alt="Cypher 30 Challenge" />
      </div>
    </div>
    </>
  );
}

export default Cypher30_p;