import React, {useEffect,useState} from 'react';
import ProjectLink from "../components/project_link.js";
import Header from "../components/header.js";
import axios from 'axios';
import LinearProgress from '@material-ui/core/LinearProgress';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function Home() {
  const [data, setData] = useState(null);
  const [value, setValue] = useState(0);
  const [urlParam, setUrlParam] = useState("");

  //i use url param to change the url for the API
  var url = `https://tranquil-brushlands-15503.herokuapp.com/${urlParam}`;
  
  //Getting the data from my backend
  useEffect(() => {
    axios.get(url)
    .then(function (response) {
      setData(response.data);   
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [urlParam, url]);

  useEffect(() => {
    if(value===1){
      setUrlParam("mini");
    } 
    if(value===0){
      setUrlParam("");
    }
  }, [value]);

  if(data){
    console.log(data);
    var projectArray = data.map((item, i) => (
    <ProjectLink
      key = {i.toString()}
      projectName = {data[i].name} 
      projectDescription = {data[i].description} 
      projectImage = {data[i].image} 
      projectId = {data[i].id} 
      urlParam = {urlParam}
      />
    ))
  }



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
          <section className = "home">
              <nav>
                <Tabs
                  value={value}
                  indicatorColor="primary"
                  textColor="primary"
                  aria-label="tabs_navigation"
                  centered
                >
                  <Tab label="Case Studies" onClick={() => setValue(0)}/>
                  <Tab label="Fun Projects" onClick={() => setValue(1)}/>
                </Tabs>
              </nav>
              {projectArray}
          </section> 
        </main>
      ); 
  }    
}

export default Home;
