import React, {useEffect,useState} from 'react';
import Section from "../components/article_section.js";
import axios from 'axios';
import {
  useParams
} from "react-router-dom";
import "../article.css"
import Header from "../components/header.js";
import Link from "../components/link.js";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import { SRLWrapper } from "simple-react-lightbox";
import Container from '@material-ui/core/Container';



function Article() {
  const [data, setData] = useState([]);
  const [projects, setProjects] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const [imageArray, setImageArray] = useState([]);
  const [checked, setChecked] = useState(false);

  let sectionArray = [
    <Section
        id = "Research"
        header = {"Research"}
        body = {data.Section1}
      />, 
      <Section
        id = "Evalulate"
        header = {"Prototyping"}
        body = {data.Section2}
      />,
      <Section
        id = "Finalizing"
        header = {"Evalulate"}
        body = {data.Section3}
      />,
      <Section
        header = {"Reflection"}
        body = {data.Reflection}
      />
  ]
  let tempStep = activeStep

  const [classname, setClassname] = useState("link");
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
      response.data.projectLink === "null" ? setClassname("hidden") : setClassname("link");
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log("classname", classname)
  },[id, project_data, classname]);

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
  },[next_projects]);
  
  useEffect(() => {
    setChecked(false)
    setTimeout(() => {
      setChecked(true)
    },500);
  }, [checked]);


  return (
    <Container className="article" maxWidth={"md"}>
      <Header
        title={data.Name}
        blurb={<> <p>{data.Overview}</p> <Link classname = {classname} name="See the project site!" location={data.projectLink}/></>}
        goals={data.goals}
        name={<ArrowBackIcon/>}
        location="/" 
        id="top"
      />
      <div className = "project_part"> 
        <h2>Project Process</h2>
        {sectionArray[activeStep]}
        <MobileStepper
          className="stepper"
          variant="dots"
          steps={4}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button size="small" onClick={()=> setActiveStep(tempStep+=1) } disabled={activeStep === 3}>
                Next
              <KeyboardArrowRight />
            </Button>
          }
          backButton={
            <Button size="small" onClick={()=> setActiveStep(tempStep-=1)} disabled={activeStep === 0}>
              <KeyboardArrowLeft />
                Back
            </Button>
          }
        />
      </div>
      <div className = "project_part">   
        <h2>Project Images</h2>
        <SRLWrapper>
          {imageArray.map((item, i) => (
            <img className="article_image" src = {imageArray[i].url} loading="lazy"/>
          ))}
        </SRLWrapper>
      </div>
      <footer className = "article_footer">
        <h2>See another project</h2>
        <div className = "next_projects">
          {projects.map((item, i) => (
            <Link classname={"link"} name={projects[i].name} location={projects[i].id}/>
          ))}
        </div>
        <Button variant="contained" color="primary" href="#top" style={{"width":"25%"}}>Back to Top</Button>
      </footer>
    </Container>
  );
}

export default Article;
