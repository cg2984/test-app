import React, {useEffect,useState} from 'react';
import About from "../components/about.js"
import ProjectLink from "../components/project_link.js"
import axios from 'axios';

function Home() {
  const [data, setData] = useState(null);
  //----------------------Getting the data from my backend
  useEffect(() => {
    axios.get('https://tranquil-brushlands-15503.herokuapp.com/')
    .then(function (response) {
      console.log("response",response.data);
      setData(response.data);   
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);
     
  if(data == null){
    return(
        <div> LOADING </div>
    );     
  }
  else{
       console.log("id", data[0].id);
       console.log("data", data);
       return (
        <div className="home">
          <About/>
          <section className = "projects_home">
              {data.map((project, i) => (
              <ProjectLink projectName = {data[i].name} projectDescription = {data[i].description} projectImage = {data[i].image} projectId = {data[i].id}/>
              ))}
          </section> 
          <footer>
            <p> Have questions? Email me at clara.c.gilligan@gmail.com</p>
          </footer>
        </div>
      ); 
  }    
}

export default Home;
