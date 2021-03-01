import React from 'react';
import "../about.css";


function About() {
  return (
    <div className = "about">
      <a href = "/"> Back Home </a>
      <main className = "about_main">
        <h2> So, more about me...</h2>
        <p> I am a creative technologist who studied UX/UI Design, Design Thinking, and Web Development. Currently, I work with Tech Kids Unlimited where I assist teachers, and teach kids about digital media.</p>
        <h3> My Contact Information </h3>
        <a href = "https://dl.airtable.com/.attachments/92a9f2a70422ccec398a5ce4e65ad5f9/365dcf0e/ClaraGilliganResume3.pdf" target="_blank" rel="noopener noreferrer">Read my resume.</a>
        <a href = "https://github.com/cg2984" target="_blank" rel="noopener noreferrer">Take a peek at my Github.</a>
        <a href = "https://www.linkedin.com/in/clara-gilligan/" target="_blank" rel="noopener noreferrer">Add me on Linkedin.</a>
        <a href = "mailto:clara.c.gilligan@gmail.com" target="_blank" rel="noopener noreferrer">Email me at clara.c.gilligan@gmail.com</a>
      </main>
    </div>
  );
}

export default About;
