import React, { useState } from 'react';
import "./Contact_p.css"

function Contact_p(){

  return (
    <>
    <div className="link_name">/ Contact </div>
    <div className="contact_sec">
    {/* <h1>Connect with us!</h1> */}
    <div className="Form_cont">
    <iframe src="https://forms.visme.co/formsPlayer/rxw30wp0-untitled-project" className="Contact_form"> </iframe>
    </div>
    </div>
    
    </>
  );
};

export default Contact_p;
