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
      <nav>
        <a href="/"><h2 className = "h2_link">HOME</h2></a>
      </nav>
      <header className = "project_statement">
        <h1>{data.Name}</h1>
        <p className = "overview">{data.Overview}</p>
      </header>
      <div className = "goals">
          <h2> GOALS </h2>
          <p className = "goal">{data.Goal1}</p>
          <p className = "goal">{data.Goal2}</p>
          <p className = "goal">{data.Goal3}</p>
      </div>
      <h2>Sketching & Research</h2>
      <ArticleSection sectionText = {data.Sketching_Research} sectionImageOne = {data.Sketch_Image_1} sectionImageTwo = {data.Sketch_Image_2}/>
      <h2>Prototyping</h2>
      <ArticleSection sectionText = {data.Prototyping} sectionImageOne = {data.Prototyping_Image_1} sectionImageTwo = {data.Prototyping_Image_2}/>
      <h2>Finalizing</h2>
      <ArticleSection sectionText = {data.Finishing_Touches} sectionImageOne = {data.Finishing_Image_1} sectionImageTwo = {data.Finishing_Image_2}/>
    </div>
  );
}

export default Article;
