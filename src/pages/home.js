import React, {useEffect,useState} from 'react';
import About from "../components/about.js"
import ProjectLink from "../components/project_link.js"
import axios from 'axios';

function Home() {
  const [data, setData] = useState(null);
  const [urlParam, setUrlParam] = useState("");
  //i use ur; param to change the url for the API
  var url = `https://tranquil-brushlands-15503.herokuapp.com/${urlParam}`

  //Getting the data from my backend
  useEffect(() => {
    axios.get(url)
    .then(function (response) {
      setData(response.data);   
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [urlParam]);

  console.log("urlParam",urlParam);

  //making sure that the data is loaded. might be more elegant solution but I dont know it sorry. i have stuck it in issues in github
  if(data == null){
    return(
        <div> LOADING </div>
    );     
  }

  //i use the onClick for each button in the nav to change the url param. changing the url param causes the useEffect to reload
  //the useEffect reloads with new url that we made from urlParam. that new url loads the data from diff part of the API
  else{
       return (
        <div className="home">
          <About/>
          <section id = "projects" className = "projects_home">
              {<nav className = "project_nav">
                <button onClick={() => setUrlParam("")}><h2 className = "project_name"> Case Studies </h2></button>
                <button onClick={() => setUrlParam("mini")}><h2 className = "project_name"> Mini Projects </h2></button>
              </nav>}
              {data.map((item, i) => (
              <ProjectLink 
                projectName = {data[i].name} 
                projectDescription = {data[i].description} 
                projectImage = {data[i].image} 
                projectId = {data[i].id} 
                urlParam = {urlParam}
              />
              ))}
          </section> 
        </div>
      ); 
  }    
}

export default Home;
