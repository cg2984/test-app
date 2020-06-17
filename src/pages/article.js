import React, {useEffect,useState} from 'react';
import ArticleSection from "../components/article_section.js";
import axios from 'axios';
import { useHistory } from "react-router-dom";

function Article() {
  const [id,setId] = useState("");
  const [data, setData] = useState([]);
  let history = useHistory();

  useEffect(() => {
      let mySearchParams = history.location.search;
      let urlParams = new URLSearchParams(mySearchParams);
      //using method get from search params api 
      let id = urlParams.get('id');
      //makes sure that tte city exists
      if(id){
        setId(id);
      }
  },[history]);

  useEffect(() => {
      axios.get(`https://tranquil-brushlands-15503.herokuapp.com/project/${id}`)
    .then(function (response) {
      console.log(response);
      setData(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  },[id]);



  return (
    <div className="article">
      <nav>
        <a href="/"><h2 className = "h2_link">HOME</h2></a>
      </nav>
      <header className = "project_statement">
        <h1> DREAMER </h1>
        <p className = "overview"> This is the overview of my project that i made all by msyeld. This thing i goin to have a ton of typos that are awful and stuff, but whaterver what are they going to do about it</p>
      </header>
      <div className = "goals">
          <h2> GOALS </h2>
          <p className = "goal">1. To be a better person</p>
          <p className = "goal">2. To ascend to godhood</p>
      </div>
      <ArticleSection/>
      <ArticleSection/>
      <ArticleSection/>
      <ArticleSection/>
    </div>
  );
}

export default Article;
