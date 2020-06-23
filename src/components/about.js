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
	        <li><FontAwesomeIcon icon={faLaptopCode} /> <p>Web Developer</p></li>
	        <li><FontAwesomeIcon icon={faBookReader} /> <p>Educator</p></li>
        </ul> 
        <a href = "https://www.petfinder.com/dog-breeds/">Read my resume.</a>
        <a href = "https://www.petfinder.com/dog-breeds/">Take a peek at my Github.</a>
    </section>
  );
}

export default About;
