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
  const [links, setLinks] = useState({});
  let id = ""; 
  let UrlId = "";
  
  UrlId = useParams();
  id = UrlId.id;
  console.log("id",id);
  let Api = "https://tranquil-brushlands-15503.herokuapp.com/project/" + id;
  console.log("API", Api); 
  
    
    
  useEffect(() => {
      axios.get(Api)
    .then(function (response) {
      console.log("response",response);
      setData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  },[id]);
 
 console.log("data", data);
 console.log("text", data.Description);


  return (
    <div className="article">  
      <Button className = "about_button" Link="/" Name="Back"/>
      <header className = "project_header">
        <h1>{data.Name}</h1>
        <p>{data.Overview}</p>
      </header>
      <div className = "goals">
          <div className = "goal_text">
            <h1> Goals </h1>
            <h2>{data.Goal1}</h2>
            <h2>{data.Goal2}</h2>
            <h2>{data.Goal3}</h2>
          </div>
          <img className = "goal_img" src= "https://dl.airtable.com/.attachmentThumbnails/99b288869545808aa91226b722f1b365/7ce33f8d"/>
      </div>
      <h1 className = "section_header">Sketching & Research</h1>
      <ArticleSection className = "article_section" sectionText = {data.Sketching_Research} sectionImageOne = {data.Sketch_Image_1} sectionImageTwo = {data.Sketch_Image_2} sectionImageThree = {data.Sketch_Image_1} sectionImageFour = {data.Sketch_Image_2}/>
      <h1 className = "section_header">Prototyping</h1>
      <ArticleSection className = "article_section" sectionText = {data.Prototyping} sectionImageOne = {data.Prototyping_Image_1} sectionImageTwo = {data.Prototyping_Image_2} sectionImageThree = {data.Prototyping_Image_1} sectionImageFour = {data.Prototyping_Image_1}/>
      <h1 className = "section_header">Finalizing</h1>
      <ArticleSection className = "article_section" sectionText = {data.Final} sectionImageOne = {data.Final_Image_1} sectionImageTwo = {data.Final_Image_2} sectionImageThree = {data.Final_Image_2} sectionImageFour = {data.Final_Image_2}/>
    </div>
  );
}

export default Article;
