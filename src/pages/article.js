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
import { Fade } from '@material-ui/core';



function Article() {
  const [data, setData] = useState([]);
  const [projects, setProjects] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const [imageArray, setImageArray] = useState([]);
  const [checked, setChecked] = useState(false);
  /* TRY THIS LATER
  const ButtonForward = () => {
    setActiveStep(tempStep+=1)
    setChecked(true)
  }

  const ButtonBack = () => (
    setActiveStep(tempStep-=1),
    setChecked(true)
  )*/

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

  //right now not using these but might do later
  const [onNext, setOnNext] = useState(false);
  const [onBack, setOnBack] = useState(false);
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
      setImageArray(response.data.Image_Dump)
    })
    .catch(function (error) {
      console.log(error);
    });
  },[id, project_data]);

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
    <Container maxWidth={"lg"}> 
      <Header
        title={data.Name}
        blurb={<p>{data.Overview}</p>}
        goals={data.goals}
        name={<ArrowBackIcon/>}
        location="/" 
      /> 
      <Container maxWidth={"md"}>
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
        <h2>Project Images</h2>
        <SRLWrapper>
          {imageArray.map((item, i) => (
            <img className="article_image" src = {imageArray[i].url}/>
          ))}
        </SRLWrapper>
      </Container>
      <footer className = "article_footer">
        <h2>See another project</h2>
        <div className = "next_projects">
          {projects.map((item, i) => (
            <Link name={projects[i].name} location={projects[i].id}/>
          ))}
        </div>
      </footer>
    </Container>
  );
}

export default Article;
