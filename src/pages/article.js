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
      setData(response.data.fields);
    })
    .catch(function (error) {
      console.log(error);
    });
  },[id]);
 
 console.log("data",data);

  return (
    <div className="article">
      <nav>
        <a href="/"><h2 className = "h2_link">HOME</h2></a>
      </nav>
      <header className = "project_statement">
        <h1> {data.Name} </h1>
        <p className = "overview">{data.Overview}</p>
      </header>
      <div className = "goals">
          <h2> GOALS </h2>
          <p className = "goal">1. To be a better person</p>
          <p className = "goal">2. To ascend to godhood</p>
      </div>
      <ArticleSection/>
    </div>
  );
}

export default Article;
