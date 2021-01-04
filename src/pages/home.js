import React, {useEffect,useState} from 'react';
import ProjectLink from "../components/project_link.js";
import Header from "../components/header.js";
import axios from 'axios';
import LinearProgress from '@material-ui/core/LinearProgress';

function Home() {
  const [data, setData] = useState(null);
  const [urlParam, setUrlParam] = useState("");
  //i use url param to change the url for the API
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

  //making sure that the data is loaded. might be more elegant solution but I dont know it. i have stuck it in issues in github
  //maybe ill put a bootstrap loading animation anything
  if(data == null){
    return(
        <div className = "loading"> 
          <p>Loading</p>
          <LinearProgress/> 
        </div>
    );     
  }

  //i use the onClick for each button in the nav to change the url param. changing the url param causes the useEffect to reload
  //the useEffect reloads with new url that we made from urlParam. that new url loads the data from diff part of the API
  else{
       return (
        <main>
          <Header/>
          <section id = "projects" className = "home">
              <nav>
                <button onClick={() => setUrlParam("")}>
                  <h2 className = "nav_button"> Case Studies </h2>
                </button>
                <button onClick={() => setUrlParam("mini")}>
                  <h2 className = "nav_button"> Fun </h2>
                </button>
              </nav>
              <div className = "proj_gallery">
                {data.map((item, i) => (
                <ProjectLink 
                  projectName = {data[i].name} 
                  projectDescription = {data[i].description} 
                  projectImage = {data[i].image} 
                  projectId = {data[i].id} 
                  urlParam = {urlParam}
                />
                ))}
              </div>
          </section> 
        </main>
      ); 
  }    
}

export default Home;
