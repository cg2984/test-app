import React from 'react';
import "../about.css";
import Link from "../components/link.js";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Header from "../components/header.js";
import Container from '@material-ui/core/Container'; 

function About() {
  return (
    <Container maxWidth={"md"}>
      <main className = "about_main">
        <Header title={"More about me"} name={<ArrowBackIcon/>} location={"/"} blurb={<p>I am a creative technologist who studied UX/UI Design, Design Thinking, and Web Development. Currently, I work with Tech Kids Unlimited where I am a teacher/assistant teacher educating middle & high school students about digital media.</p>}/>
        <h3> My Contact Information </h3>
        <Link classname={"link"} name = "Read my resume." location = "https://dl.airtable.com/.attachments/67e88da76ca75afa9dae89e9df39a9d9/40012d7d/ClaraGilliganResume.pdf"/>
        <Link classname={"link"} name = "Take a peek at my Github." location = "https://github.com/cg2984"/> 
        <Link classname={"link"} name = "Email me at clara.c.gilligan@gmail.com" location = "mailto:clara.c.gilligan@gmail.com"/> 
      </main>
    </Container>
  );
}

export default About;
