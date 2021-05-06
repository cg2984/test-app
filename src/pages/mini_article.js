import React, {useEffect,useState} from 'react';
import axios from 'axios';
import {
  useParams
} from "react-router-dom";
import "../article.css"
import { SRLWrapper } from "simple-react-lightbox";
import Header from "../components/header.js";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Link from "../components/link.js";
import Container from '@material-ui/core/Container';

function MiniArticle() {
  const [data, setData] = useState("");
  const [classname, setClassname] = useState("link");
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
      setData(response.data);
      console.log(response.data);
      response.data.link === "null" ? setClassname("hidden") : setClassname("link");
      console.log("link maybe", data.link);
    })
    .catch(function (error) {
      console.log(error);
    });
  //everytime the id changes the page reloads
  },[project_data, data.link]);

  
  useEffect(() => {
    if(data){
    }
  },[data]);

    return (
        <Container maxWidth={"md"}>
          <Header
            title={data.name}
            blurb={<> <p>{data.blurb}</p> <Link classname = {classname} name="See the project site!" location={data.link}/></>}
            goals={data.goals}
            name={<ArrowBackIcon/>}
            location="/" 
          />
          <main>
            <SRLWrapper>
              {data.images && 
                data.images.map((img,i) => (
                  <img className = "mini_article_img" src = {data.images[i].url} alt = "images of the work" loading="lazy"/>
                ))
              }
            </SRLWrapper>
          </main>
        </Container>
    );
 }
export default MiniArticle;
