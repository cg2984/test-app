import React, {useEffect,useState} from 'react';
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


function MiniArticle() {
  const [data, setData] = useState("");
  const [imageArray, setImageArray] = useState([]);
  const [name, setName] = useState("");
  const [blurb, setBlurb] = useState("");
  //setting up the url variables
  let id = ""; 
  let UrlId = "";
  
  //i use use params to get the id from the url
  UrlId = useParams();
  id = UrlId.id;
  //using the id i got from the url to make the url for the server
  let project_data = "https://tranquil-brushlands-15503.herokuapp.com/miniproject/" + id;
  let next_projects = "https://tranquil-brushlands-15503.herokuapp.com"
  
  //using the url that i made to get the data from the server with axios
  useEffect(() => {
      axios.get(project_data)
    .then(function (response) {
      console.log("response full", response);
      console.log("response", response.data.images[0].url);
      setData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  //everytime the id changes the page reloads
  },[]);
  console.log("data", data);

  
  

  useEffect(() => {
    if(data){
      console.log("data images", data.images);
      setImageArray(data.images);
      console.log("images", imageArray);
      console.log("data blurbs", data.blurb);
      setBlurb(data.blurb);
      console.log("data name", data.name);
      setName(data.name);
      console.log("name", name);
      console.log("image link", data.images[0].url);
    }
  },[data]);
    return (
        <div className = "mini_article">  
          <header className = "mini_article_header">
            <a className = "article_button" href = "/"> Back </a>
            <h1>{data.name}</h1>
            <p>{data.blurb}</p>
          </header>
          <main>
            {data.images && 
              data.images.map((img,i) => (
                <img className = "mini_article_img" src = {data.images[i].url} alt = "images of the work"/>
              ))
            }
          </main>
        </div>
    );
 }

export default MiniArticle;
