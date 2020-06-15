import React from 'react';
import About from "../components/about.js"
import ProjectLink from "../components/project_link.js"

function Home() {
  return (
    <div className="home">
      <About/>
      <section className = "projects_home">
        <ProjectLink/>
        <ProjectLink/>
        <ProjectLink/>
        <ProjectLink/>
        <ProjectLink/>
        <ProjectLink/>
        <ProjectLink/>
      </section>      
    </div>
  );
}

export default Home;
