import React, {useEffect,useState} from 'react';
import ArticleSection from "../components/article_section.js";
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
      <header className = "project_statement">
        <h1>{data.Name}</h1>
        <p className = "overview">{data.Overview}</p>
        <hr></hr>
      </header>
      <div className = "goals">
          <div className = "goal_text">
            <h1> Goals </h1>
            <h2>{data.Goal1}</h2>
            <h2>{data.Goal2}</h2>
            <h2>{data.Goal2}</h2>
          </div>
          <img className = "goal_img" src= "https://dl.airtable.com/.attachmentThumbnails/99b288869545808aa91226b722f1b365/7ce33f8d"/>
      </div>
      <h1 className = "article_header">Sketching & Research</h1>
      <ArticleSection sectionText = {data.Sketching_Research} sectionImageOne = {data.Sketch_Image_1} sectionImageTwo = {data.Sketch_Image_2}/>
      <h1 className = "article_header">Prototyping</h1>
      <ArticleSection sectionText = {data.Prototyping} sectionImageOne = {data.Prototyping_Image_1} sectionImageTwo = {data.Prototyping_Image_2}/>
      <h1 className = "article_header">Finalizing</h1>
      <ArticleSection sectionText = {data.Finishing_Touches} sectionImageOne = {data.Finishing_Image_1} sectionImageTwo = {data.Finishing_Image_2}/>
    </div>
  );
}

export default Article;
