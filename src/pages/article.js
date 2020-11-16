import React, {useEffect,useState} from 'react';
import ArticleSection from "../components/article_section.js";
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
      <Button Link="/" Name="Back"/>
      <header className = "project_header">
        <h1>{data.Name}</h1>
        <p>{data.Overview}</p>
        <div className = "goals">
          <h2> Goals </h2>
          <h2>{data.Goal1}</h2>
          <h2>{data.Goal2}</h2>
          <h2>{data.Goal3}</h2>
        </div>  
      </header>
      <h1 className = "section_header">Sketching & Research</h1>
      <ArticleSection className = "article_section" sectionText = {data.Sketching_Research} sectionImageOne = {data.Sketch_Image_1} sectionImageTwo = {data.Sketch_Image_2} sectionImageThree = {data.Sketch_Image_3} sectionImageFour = {data.Sketch_Image_4}/>
      <h1 className = "section_header">Prototyping</h1>
      <ArticleSection className = "article_section" sectionText = {data.Prototyping} sectionImageOne = {data.Prototyping_Image_1} sectionImageTwo = {data.Prototyping_Image_2} sectionImageThree = {data.Prototype_Image_3} sectionImageFour = {data.Prototype_Image_4}/>
      <h1 className = "section_header">Finalizing</h1>
      <ArticleSection className = "article_section" sectionText = {data.Final} sectionImageOne = {data.Final_Image_1} sectionImageTwo = {data.Final_Image_2} sectionImageThree = {data.Final_Image_3} sectionImageFour = {data.Final_Image_4}/>
      <h1 className = "section_header">Reflection</h1>
      <section className = "reflection">
        <p>{data.Reflection}</p>
      </section>
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
