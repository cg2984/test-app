import React, {useEffect,useState} from 'react';
import ArticleSection from "../components/article_section.js";
import axios from 'axios';
import {
  useParams
} from "react-router-dom";
import "../article.css"
import Header from "../components/header.js";
import Link from "../components/link.js";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { SRLWrapper } from "simple-react-lightbox";

function Article() {
  const [data, setData] = useState([]);
  const [projects, setProjects] = useState([]);
  const [imageArray, setImageArray] = useState([]);
  const [classname, setClassname] = useState("link");
  const [imageUrl, setImageUrl] = useState("https://i.stack.imgur.com/y9DpT.jpg");
  let id = ""; 
  let UrlId = "";
  
  //making the url to get the data from the server
  UrlId = useParams();
  id = UrlId.id;
  let project_data = "https://tranquil-brushlands-15503.herokuapp.com/project/" + id;
  let next_projects = "https://tranquil-brushlands-15503.herokuapp.com";
    
  //getting the data for this project  
  useEffect(() => {
    axios.get(project_data)
    .then(function (response) {
      console.log("data response",response);
      setData(response.data);
      setImageArray(response.data.Image_Dump);
      setImageUrl(data)
      response.data.projectLink === "null" ? setClassname("hidden") : setClassname("link");
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log("classname", classname)
  },[id, project_data, classname]);

  return (
    <div className="article">
      <Container className="landing" maxWidth={"md"}>
        <Header
          title={data.Name}
          blurb={<Link classname = {classname} name="See the project site!" location={data.projectLink}/>}
          name={<ArrowBackIcon/>}
          location="/" 
          id="top"
        />
        <h3>{data.Overview}</h3>        
        <Box className="outcomes">
          <SRLWrapper>
            <img src = {data.Final == undefined ? "https://i.stack.imgur.com/y9DpT.jpg" : data.Final[0].url}/>
          </SRLWrapper>
          <Box>
            <h3>Project Outcomes</h3>
            <p>{data.Outcomes}</p>   
          </Box>  
        </Box>
        <SRLWrapper>
          <img src = {data.Final2 == undefined ? "https://i.stack.imgur.com/y9DpT.jpg" : data.Final2[0].url}/>
        </SRLWrapper>
        <div className="patternBar"></div>
      </Container>
      <Container Container maxWidth={"md"}>
        <ArticleSection
          title = {data.Section1Title}
          text = {data.Section1}
          image = {data.Section1Image == undefined ? "https://i.stack.imgur.com/y9DpT.jpg" : data.Section1Image[0].url}
        />
        <ArticleSection
          title = {data.Section2Title}
          text = {data.Section2}
          image = {data.Section2Image == undefined ? "https://i.stack.imgur.com/y9DpT.jpg" : data.Section2Image[0].url}
        />
        <ArticleSection
          title = {data.Section3Title}
          text = {data.Section3}
          image = {data.Section3Image == undefined ? "https://i.stack.imgur.com/y9DpT.jpg" : data.Section3Image[0].url}
        />
      </Container>
      <Container maxWidth={"md"}>
        <h3>More Project Images</h3>
        <Box>
          {imageArray.map((i) =>
            <img className = "article_image" src={i.url}/>
          )}
        </Box>
      </Container>
      <footer className = "article_footer">
        {/*<Link classname={"link"} name={"See Another Project"} location={`/${projects[]}`}/>*/}
        <Button variant="contained" color="primary" href="#top" style={{"width":"250px", "margin":"20px 0"}}>Back to Top</Button>
      </footer>
  </div> 
  );
}

export default Article;
