import React, {useEffect,useState} from 'react';
import About from "../components/about.js"
import ProjectLink from "../components/project_link.js"
import axios from 'axios';

function Home() {
  const [data, setData] = useState(null);
  const [dummyData, setDummyData] = useState(null);
  const [urlParam, setUrlParam] = useState("");
  var url = `https://tranquil-brushlands-15503.herokuapp.com/${urlParam}`

  //Getting the data from my backend
  useEffect(() => {
    axios.get(url)
    .then(function (response) {
      console.log("response",response.data);
      setData(response.data);   
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [urlParam]);


  
  //making sure that the data is loaded. might be more elegant solution but I dont know it sorry. i have stuck it in issues in github
  if(data == null){
    return(
        <div> LOADING </div>
    );     
  }

  else{
       return (
        <div className="home">
          
          <About/>
          <section id = "projects" className = "projects_home">
              <nav className = "project_nav">
                <button onClick={() => setUrlParam("")}><h2 className = "project_name"> Case Studies </h2></button>
                <button onClick={() => setUrlParam("mini")}><h2 className = "project_name"> Mini Projects </h2></button>
              </nav>
              {data.map((project, i) => (
              <ProjectLink projectName = {data[i].name} projectDescription = {data[i].description} projectImage = {data[i].image} projectId = {data[i].id}/>
              ))}
          </section> 
        </div>
      ); 
  }    
}

export default Home;
