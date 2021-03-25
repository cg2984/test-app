import React, {useEffect,useState} from 'react';
import axios from 'axios';
//components
import ProjectLink from "../components/project_link.js";
import Header from "../components/header.js";
import Link from "../components/link.js";
//material ui
import LinearProgress from '@material-ui/core/LinearProgress';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Fade from '@material-ui/core/Fade';


function Home() {
  const [data, setData] = useState(null);
  const [value, setValue] = useState(0);
  const [urlParam, setUrlParam] = useState("");
  const [checked, setChecked] = useState(false);

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

  //changing the tabs and having those changes update the parameter in the url that gets the data
  //also activating the slide in animation
  useEffect(() => {
    setChecked(false)
    setTimeout(() => {
      setChecked(true)
    },500);
    if(value===1){
      setUrlParam("mini");
    } 
    if(value===0){
      setUrlParam("");
    }
  }, [value]);

  //making sure that the data is loaded. might be more elegant solution but I dont know it at the moment
  //theres a little animation there 
  if(data == null){
    return(
        <div className = "loading"> 
          <p>Loading</p>
          <LinearProgress/> 
        </div>
    );     
  }

  else{
       return (
        <main className = "home">
          <Header 
            title="Hello! I'm Clara, a creative technologist based in NYC"
            blurb={<Link name="Read more about me!" location ="/about"/>}
          />
          <section className = "home">
              <nav>
                <Tabs
                  value={value}
                  indicatorColor="primary"
                  textColor="primary"
                  aria-label="tabs_navigation"
                  centered
                >
                  <Tab label="Case Studies" onClick={() => setValue(0)} className="tab"/>
                  <Tab label="Experiments" onClick={() => setValue(1)} className="tab"/>
                </Tabs>
              </nav>
              <Fade 
                in={checked}
                timeout = { 200 }
              >
                <div className="projectLinkWrapper">
                  {data.map((item, i) => (
                    <ProjectLink
                      key = {i.toString()}
                      projectName = {data[i].name} 
                      projectDescription = {data[i].description} 
                      projectImage = {data[i].image} 
                      projectId = {data[i].id} 
                      urlParam = {urlParam}
                    />
                  ))}
                </div>
              </Fade>
          </section> 
        </main>
      ); 
  }    
}

export default Home;
