import React, {useEffect,useState} from 'react';
import axios from 'axios';
import {
  useParams
} from "react-router-dom";
import "../article.css"

function MiniArticle() {
  const [data, setData] = useState("");
  //setting up the url variables
  let id = ""; 
  let UrlId = "";
  
  //i use use params to get the id from the url
  UrlId = useParams();
  id = UrlId.id;
  //using the id i got from the url to make the url for the server
  let project_data = "https://tranquil-brushlands-15503.herokuapp.com/miniproject/" + id;
  
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
  },[project_data]);
  console.log("data", data);

  
  

  useEffect(() => {
    if(data){
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
