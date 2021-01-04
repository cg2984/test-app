import React, {useEffect,useState} from 'react';
import ProjectLink from "../components/project_link.js";
import Header from "../components/header.js";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { useTransition, animated } from 'react-spring'

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

  //going to set the thing to 0 so that you can click through each item
  const [index, set] = useState(0)
  const transitions = useTransition(index, (p) => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })


//---------------------------------------------------------------------------------------------------------------------------------------
  //all of this is for the hover and the clicking of the buttons
  //i couldnt just do :hover in css because i couldnt figure out a way for hte css to stick depending on the page you were on
  //so had to be inline
  //this is essentially two sets of the same css that is triggered depending on hovering and the page 
  //PROBABLY AN EASIER WAY TO DO THIS!!!!
  /*useEffect(() => {
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
//----------------------------------------------------------------------------------------------------
*/
  

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
  //making an array with all of the data that I want to do. might be another way to do it? I think that I need it so that I can cycle trhough that pages
  let projects = [];
  console.log(data)
  //making the project array so that I can click through
  if(data!=null){data.map((item,i) => (
      projects.push(
        ({style}) => (
          //this is where the leak is and i dont know what to do ehre
          <animated.div className = "single_project" style={{...style, background:"#FFFFFF", width:"100%", height:"100%"}}>
            <img src = {data[i].image}/>
            <span>
              <h1>{data[i].name}</h1>
              <p>{data[i].description}</p>
              <a href = {`/${data[i].id}`}>Read the Case Study</a>
            </span>
          </animated.div>
        )
      )
    ));}

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
              {<nav>
                <button 
                  style = {styleA} 
                  onClick={() => setUrlParam("")}
                  //onMouseEnter={() => setHoverA(true)}
                  //onMouseLeave={() => setHoverA(false)}
                  >
                  <h2 className = "project_name"> Case Studies </h2>
                </button>
                <button 
                  style = {styleB} 
                  onClick={() => setUrlParam("mini")}
                  //onMouseEnter={() => setHoverB(true)}
                  //onMouseLeave={() => setHoverB(false)}
                  >
                  <h2 className = "project_name"> Fun </h2>
                </button>
              </nav>}
              <div 
                className = "proj_gallery"
                onClick = {() => set((state) => (state + 1) % data.length)}
              >
                {transitions.map(({ item, props, key }) => {
                  const Shit = projects[item]
                  //this page comes from the const thing
                  return <Shit key={key} style={props} />
                })}
              </div>
        </main>
      ); 
  }    
}

export default Home;
