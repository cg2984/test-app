import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../about.css";


function About() {
  return (
    <section className = "about">
        <section className = "about_text">
          <a href = "/"> back home </a>
          <h1>Hello, I'm Clara!</h1>
          <p> I am a creative technologist who studied UX/UI Design, Design Thinking, and Web Development. Currently, I work with Tech Kids Unlimited where I assist teachers, and teach kids about digital media.</p>
          <h2> Contact Me! </h2>
          <a href = "https://dl.airtable.com/.attachments/92a9f2a70422ccec398a5ce4e65ad5f9/365dcf0e/ClaraGilliganResume3.pdf" target="_blank" rel="noopener noreferrer">Read my resume.</a>
          <a href = "https://github.com/cg2984" target="_blank" rel="noopener noreferrer">Take a peek at my Github.</a>
          <a href = "https://www.linkedin.com/in/clara-gilligan/" target="_blank" rel="noopener noreferrer">Add me on Linkedin.</a>
          <a href = "mailto:clara.c.gilligan@gmail.com" target="_blank" rel="noopener noreferrer">Email me at clara.c.gilligan@gmail.com</a>
        </section>
    </section>
  );
}

export default About;
