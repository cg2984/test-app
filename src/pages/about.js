import React from 'react';
import "../about.css";
import Link from "../components/link.js";


function About() {
  return (
    <div className = "about">
      <a href = "/"> Back Home </a>
      <main className = "about_main">
        <h2> So, more about me...</h2>
        <p> I am a creative technologist who studied UX/UI Design, Design Thinking, and Web Development. Currently, I work with Tech Kids Unlimited where I assist teachers, and teach kids about digital media.</p>
        <h3> My Contact Information </h3>
        <Link name = "Read my resume." location = "https://dl.airtable.com/.attachments/67e88da76ca75afa9dae89e9df39a9d9/40012d7d/ClaraGilliganResume.pdf"/>
        <Link name = "Take a peek at my Github." location = "https://github.com/cg298465dcf0e/ClaraGilliganResume3.pdf"/> 
        <Link name = "Email me at clara.c.gilligan@gmail.com" location = "mailto:clara.c.gilligan@gmail.com"/> 
      </main>
    </div>
  );
}

export default About;
