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
    <div className="link_name">/ Contact </div>
    <div className="contact_sec">
    {/* <h1>Connect with us!</h1> */}
    <iframe src="https://forms.visme.co/formsPlayer/rxw30wp0-untitled-project" className="Contact_form"> </iframe>
    </div>
    
    </>
  );
};

export default Contact_p;
