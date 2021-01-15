import React, {useEffect,useState} from 'react';
import Section from "../components/article_section.js";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useTransition, animated } from 'react-spring';
import { SRLWrapper } from "simple-react-lightbox";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import "../article.css"
import Button from "../components/button.js"

function Article() {
  const [data, setData] = useState([]);
  const [projects, setProjects] = useState([]);
  const [links, setLinks] = useState({});
  const [state, setState] = useState(0);
  let state_other = state
  let id = ""; 
  let UrlId = "";
  
  //making the url to get the data from the server
  UrlId = useParams();
  id = UrlId.id;
  let project_data = "https://tranquil-brushlands-15503.herokuapp.com/project/" + id;
  let next_projects = "https://tranquil-brushlands-15503.herokuapp.com"
  
    
  //getting the data from the server for this specific project using the url i just made  
  useEffect(() => {
      axios.get(project_data)
    .then(function (response) {
      console.log("data response",response);
      setData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  },[id]);

  //getting the data for the other projects in the footer
  useEffect(() => {
      axios.get(next_projects)
    .then(function (response) {
      console.log("projects response",response)
      setProjects(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  },[]);

  const para = [
    <Section header="Sketching" body={data.Sketching_Research}/>,
    <Section header="Prototyping" body={data.Prototyping}/>,
    <Section header="Final" body={data.Final}/>,
  ]
      
  return (
    <div className="article"> 
      <nav>
        <a className = "article_button" href = "/"> Back Home </a>
      </nav>  
      <h2 className = "article_title">{data.Name}</h2>
      <main>
        <div className = "image">
        <SRLWrapper>
          <a href={data.Sketch_Image_1}>
            <img src={data.Sketch_Image_2} alt="The sketches that I did to plan"/>
          </a>
          <a href={data.Sketch_Image_1}>
            <img src={data.Sketch_Image_2} alt="The sketches that I did to plan"/>
          </a>
          <a href={data.Sketch_Image_1}>
            <img src={data.Sketch_Image_2} alt="The sketches that I did to plan"/>
          </a>
          <a href={data.Sketch_Image_1}>
            <img src={data.Sketch_Image_2} alt="The sketches that I did to plan"/>
          </a>
        </SRLWrapper>
        </div>
        <div className = "text">
            <button onClick = {()=> setState((state_other+=1)%para.length)}>Next thing</button>
            {para[state]}    
        </div>
      </main>
      <footer className = "article_footer">
        <h2>See another project</h2>
        <div className = "next_projects">
          {projects.map((item, i) => (
            <a href = {projects[i].id}>{projects[i].name}</a>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default Article;
