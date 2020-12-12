import React, {useEffect,useState} from 'react';
import ProjectLink from "../components/project_link.js";
import Header from "../components/header.js";
import axios from 'axios';

function Home() {
  const [data, setData] = useState(null);
  const [urlParam, setUrlParam] = useState("");
  //all the variables for the two buttons
  //the state of hovering and the state of the style
  const [hoverA, setHoverA] = useState(false);
  const [hoverB, setHoverB] = useState(false);
  const [styleA, setStyleA] = useState({
        outline:"none",
        margin:"30px",
        borderRadius:"50px",
        color:"#000000",
        backgroundColor:"#FFFFFF",
        padding:"10px",
        width:"200px",
        border:"1px solid black"
      });
  const [styleB, setStyleB] = useState({
        outline:"none",
        margin:"30px",
        borderRadius:"50px",
        color:"#000000",
        backgroundColor:"#FFFFFF",
        padding:"10px",
        width:"200px",
        border:"1px solid black"
      });
  //i use ur; param to change the url for the API
  var url = `https://tranquil-brushlands-15503.herokuapp.com/${urlParam}`


  //all of this is for the hover and the clicking of the buttons
  //i couldnt just do :hover in css because i couldnt figure out a way for hte css to stick depending on the page you were on
  //so had to be inline
  //this is essentially two sets of the same css that is triggered depending on hovering and the page 
  //PROBABLY AN EASIER WAY TO DO THIS!!!!
  useEffect(() => {
    if(hoverA == true){
      setStyleA({
        outline:"none",
        margin:"30px",
        borderRadius:"50px",
        padding:"10px",
        width:"200px",
        transform:"rotate(3deg)",
        cursor:"hover",
        color:"#000000",
        backgroundColor:"#E6E8E6",
        boxShadow:"0px 2px 6px #3772FF",
        border:"1px solid black"
      });
    } else if(urlParam == ""){
      setStyleA({
        outline:"none",
        margin:"30px",
        borderRadius:"50px",
        padding:"10px",
        width:"200px",
        cursor:"hover",
        color:"#FFFFFF",
        backgroundColor:"#000000",
      });
    } else if(urlParam == "mini"){
      setStyleA({
        outline:"none",
        margin:"30px",
        borderRadius:"50px",
        padding:"10px",
        width:"200px",
        cursor:"hover",
        color:"#000000",
        backgroundColor:"#FFFFFF",
        border:"1px solid black"
      });
    } else {
      setStyleA({
        outline:"none",
        margin:"30px",
        borderRadius:"50px",
        color:"#000000",
        backgroundColor:"#FFFFFF",
        padding:"10px",
        width:"200px",
        border:"1px solid black"
      })}
  }, [hoverA, urlParam]);

  useEffect(() => {
    if(hoverB == true){
      setStyleB({
        outline:"none",
        margin:"30px",
        borderRadius:"50px",
        padding:"10px",
        width:"200px",
        transform:"rotate(3deg)",
        cursor:"hover",
        color:"#000000",
        backgroundColor:"#E6E8E6",
        boxShadow:"0px 2px 6px #3772FF",
        border:"1px solid black"
      });
    } else if(urlParam == "mini"){
      setStyleB({
        outline:"none",
        margin:"30px",
        borderRadius:"50px",
        padding:"10px",
        width:"200px",
        cursor:"hover",
        color:"#FFFFFF",
        backgroundColor:"#000000"
      });
    } else if(urlParam == ""){
      setStyleB({
        outline:"none",
        margin:"30px",
        borderRadius:"50px",
        padding:"10px",
        width:"200px",
        cursor:"hover",
        color:"#000000",
        backgroundColor:"#FFFFFF",
        border:"1px solid black"
      });
    } else {
      setStyleB({
        outline:"none",
        margin:"30px",
        borderRadius:"50px",
        color:"#000000",
        backgroundColor:"#FFFFFF",
        padding:"10px",
        width:"200px",
        border:"1px solid black"
      })}
  }, [hoverB, urlParam]);


  

  //Getting the data from my backend
  useEffect(() => {
    axios.get(url)
    .then(function (response) {
      setData(response.data);   
    })
    .catch(function (error) {
      console.log(error);
    });
  }, [urlParam]);

  //making sure that the data is loaded. might be more elegant solution but I dont know it sorry. i have stuck it in issues in github
  if(data == null){
    return(
        <div> LOADING </div>
    );     
  }

  //i use the onClick for each button in the nav to change the url param. changing the url param causes the useEffect to reload
  //the useEffect reloads with new url that we made from urlParam. that new url loads the data from diff part of the API
  else{
       return (
        <main>
          <Header/>
          <section id = "projects" className = "projects_home">
              {<nav>
                <button 
                  style = {styleA} 
                  onClick={() => setUrlParam("")}
                  onMouseEnter={() => setHoverA(true)}
                  onMouseLeave={() => setHoverA(false)}>
                  <h2 className = "project_name"> Case Studies </h2>
                </button>
                <button 
                  style = {styleB} 
                  onClick={() => setUrlParam("mini")}
                  onMouseEnter={() => setHoverB(true)}
                  onMouseLeave={() => setHoverB(false)}>
                  <h2 className = "project_name"> Fun </h2>
                </button>
              </nav>}
              <div className = "project_link_wrapper">
                {data.map((item, i) => (
                <ProjectLink 
                  projectName = {data[i].name} 
                  projectDescription = {data[i].description} 
                  projectImage = {data[i].image} 
                  projectId = {data[i].id}
                  tool_1 = {data[i].tool_1} 
                  tool_2 = {data[i].tool_2} 
                  tool_3 = {data[i].tool_3} 
                  urlParam = {urlParam}
                />
                ))}
              </div>
          </section> 
        </main>
      ); 
  }    
}

export default Home;
