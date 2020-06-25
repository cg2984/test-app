import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faBookReader } from '@fortawesome/free-solid-svg-icons'
import { faPencilRuler } from '@fortawesome/free-solid-svg-icons'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'

function About() {
  return (
    <section className = "about">
        <h1>HELLO, I'M CLARA GILLIGAN</h1>
        <ul className = "about_list">
          <li><FontAwesomeIcon icon={faPencilRuler} /> <p>UX/UI Designer</p></li>
          <li><FontAwesomeIcon icon={faLaptopCode} /> <p>Front-End Developer</p></li>
          <li><FontAwesomeIcon icon={faBookReader} /> <p>Educator</p></li>
        </ul> 
        <p> I am a recent graduate from NYU who studied UX/UI Design, Design Thinking, and Web Development. Currently, I work with Tech Kids Unlimited where assist teachers, and teach kids about digital media.</p>
        <a href = "https://dl.airtable.com/.attachments/92a9f2a70422ccec398a5ce4e65ad5f9/365dcf0e/ClaraGilliganResume3.pdf" target="_blank">Read my resume.</a>
        <a href = "https://github.com/cg2984" target="_blank">Take a peek at my Github.</a>
        <a href = "https://www.linkedin.com/in/clara-gilligan/" target="_blank">Add me on Linkedin.</a>
    </section>
  );
}

export default About;
