import React, {useEffect,useState} from 'react';
import About from "../components/about.js"
import ProjectLink from "../components/project_link.js"
import axios from 'axios';

function Home() {
  const [data, setData] = useState([]);
  //----------------------Getting the data from my backend
  useEffect(() => {
    axios.get('https://tranquil-brushlands-15503.herokuapp.com/')
    .then(function (response) {
      console.log(response);
      setData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);

  return (
    <div className="home">
      <About/>
      <section className = "projects_home">
        {data.map((project, i) => (
          <ProjectLink projectName = {project.Name} projectDescription = {project.Description} projectImage = {project.Overview_image} projectId = "recrQE5lxpmzV4bRA"/>
        ))}
      </section>      
    </div>
  );
}

export default Home;
