import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faBookReader } from '@fortawesome/free-solid-svg-icons'
import { faPencilRuler } from '@fortawesome/free-solid-svg-icons'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faHandPointDown } from '@fortawesome/free-solid-svg-icons'
import "../about.css";
import Button from "./button.js";


function About() {
  return (
    <section className = "about">
        <section className = "about_text">
          <h1>HELLO, I'M CLARA GILLIGAN</h1>
          <ul className = "about_list">
            <li><FontAwesomeIcon className = "icon" icon={faPencilRuler} /> <p>UX/UI Designer</p></li>
            <li><FontAwesomeIcon className = "icon" icon={faLaptopCode} /> <p>Front-End Developer</p></li>
          </ul> 
          <p> I am a recent graduate from NYU who studied UX/UI Design, Design Thinking, and Web Development. Currently, I work with Tech Kids Unlimited where I assist teachers, and teach kids about digital media.</p>
          <a href = "https://dl.airtable.com/.attachments/92a9f2a70422ccec398a5ce4e65ad5f9/365dcf0e/ClaraGilliganResume3.pdf" target="_blank">Read my resume.</a>
          <a href = "https://github.com/cg2984" target="_blank">Take a peek at my Github.</a>
          <a href = "https://www.linkedin.com/in/clara-gilligan/" target="_blank">Add me on Linkedin.</a>
          <a href = "mailto:clara.c.gilligan@gmail.com" target="_blank">Email me at clara.c.gilligan@gmail.com</a>
        </section>
        <footer className = "about_footer">
          <FontAwesomeIcon className = "icon" icon={faHandPointDown} />
          <h2>Continue to my Work</h2>
          <FontAwesomeIcon className = "icon" icon={faHandPointDown} />
        </footer>
    </section>
  );
}

export default About;
