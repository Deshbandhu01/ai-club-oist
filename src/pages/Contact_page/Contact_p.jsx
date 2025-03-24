import React, { useState } from 'react';
import "./Contact_p.css"

const Contact_p = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    year: '',
    skills: ''
  });

  const [result, setResult] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    
    const { name, email, college, year, skills } = formData;

    // Display success message
    setResult(`
      <h3>Thank you for registering!</h3>
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>College: ${college}</p>
      <p>Year: ${year}</p>
      <p>Skills: ${skills}</p>
    `);
  };

  return (
    <>
    
    <div className="link_name">/Contact</div>
    <div className="contact_sec">
    <div className="main">
    <div className="conc">
      <header>
        <img
          src="https://aiclub-oist.web.app/static/media/ailogo.5b25c3a8e4e6b9c095c7.png"
          alt="AI Club Logo"
          className="logo"
        />
        <h1>Welcome to AI Club</h1>
      </header>

      <div className="container">
        <h2>Register for Cypher 30</h2>
        <form
          id="registrationForm"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="enrollment number">Enrollment Number:</label>
          <input
            type="text"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
          />

          <label htmlFor="college">College Name:</label>
          <input
            type="text"
            id="college"
            name="college"
            value={formData.college}
            onChange={handleChange}
            required
          />

          <label htmlFor="year">Year of Study:</label>
          <select
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          >
            <option value="first">First Year</option>
            <option value="second">Second Year</option>
            <option value="third">Third Year</option>
          </select>

          <label htmlFor="branch">Branch:</label>
          <select
            id="branch"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            required
          >
            <option value="">--Select Your Branch--</option>
            <option value="cse">CSE</option>
            <option value="AIML">AIML</option>
            <option value="CSDS">CSDS</option>
            <option value="EX">EX</option>
            <option value="CE">CE</option>
            <option value="ME">ME</option>
            <option value="EC">EC</option>
          </select>

          <label htmlFor="skills">Skills (Comma-separated):</label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
          />

          <button type="submit">Submit Registration</button>
        </form>

        {/* Display the result message */}
        {result && <div id="result" dangerouslySetInnerHTML={{ __html: result }} />}
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Contact_p;
