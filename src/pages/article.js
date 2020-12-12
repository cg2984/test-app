import React, {useEffect,useState} from 'react';
import Section from "../components/article_section.js";
import ProjectLink from "../components/project_link.js";
import axios from 'axios';
import { useHistory } from "react-router-dom";
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
  const [style, setStyle] = useState({
    display: `flex`,
    fontSize: `24px`,
    margin: `10px 20%`
  });
  let id = ""; 
  let UrlId = "";
  
  //making the url to get the data from the server
  UrlId = useParams();
  id = UrlId.id;
  let project_data = "https://tranquil-brushlands-15503.herokuapp.com/project/" + id;
  let next_projects = "https://tranquil-brushlands-15503.herokuapp.com"
  
    
  //getting the data for this project  
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
  console.log("prototype", data.Link_Prototype);
  
  useEffect(() => {
     if(data.Link_Prototype == "none"){
      setStyle({
      display: `none`,
      fontSize: `24px`,
      margin: `10px 20%`,
      color: `red`
      });
      console.log("style worked");
    }
  },[]);

      
  return (
    <div className="article"> 
      <nav>
        <a className = "article_button" href = "/"> back </a>
      </nav>  
      <h2 className = "article_title">{data.Name}</h2>
      <Section
        id = "Overview"
        header = {"Overview"}
        body = {data.Overview}
        image = {data.Final_Image_4}
       />
      <Section
        id = "Research"
        header = {"Research"}
        body = {data.Sketching_Research}
        image = {data.Sketch_Image_1}
      />
      <Section
        id = "Evalulate"
        header = {"Prototyping"}
        body = {data.Prototyping}
        image = {data.Prototyping_Image_1}
      />
      <Section
        id = "Finalizing"
        header = {"Evalulate"}
        body = {data.Prototyping}
        image = {data.Prototyping_Image_2}
      />
      <Section
        header = {"Reflection"}
        body = {data.Reflection}
      />
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
