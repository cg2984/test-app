import React, {useEffect,useState} from 'react';
import axios from 'axios';
//components
import ProjectLink from "../components/project_link.js";
import Header from "../components/header.js";
import Link from "../components/link.js";
//material ui
import LinearProgress from '@material-ui/core/LinearProgress';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';


function Home() {
  const [data, setData] = useState(null);
  const [value, setValue] = useState(0);
  const [checked, setChecked] = useState(false);

  //i use url param to change the url for the API
  let urlStudies = `https://tranquil-brushlands-15503.herokuapp.com/`;
  let urlProjects = `https://tranquil-brushlands-15503.herokuapp.com/mini`;

  //Getting the data from my backend
  useEffect(() => {
    axios.all([
      axios.get(urlStudies),
      axios.get(urlProjects),
    ])
    .then(axios.spread((responseA, responseB) => {
      setData([responseA.data, responseB.data])
    }))
    .catch(function (error) {
      console.log(error);
    });
  }, []);

  //making sure that the data is loaded. might be more elegant solution but I dont know it at the moment
  //theres a little animation there 
  if(data == null){
    return(
      <div className = "loading"> 
        <p>Loading</p>
        <LinearProgress/> 
      </div>
    );     
  }
  else{
    return (
      <main className = "home">
        <Container maxWidth={"md"}>
          <Header 
            title="Hello! I'm Clara, a designer based in NYC"
            blurb={<Button size="large" variant="contained" color="primary" href={`/about`}  disableElevation>Read more about me</Button>}
          />
          <h2 className="h2">Case Studies & Projects</h2>  
            <div className="flex-start">
              {data[0].map((item, i) => (
                <ProjectLink
                  key = {i}
                  projectName = {data[0][i].name} 
                  projectDescription = {data[0][i].description} 
                  projectImage = {data[0][i].image} 
                  projectId = {data[0][i].id} 
                  urlParam = {""}
                />
              ))}
            </div>
          <h2>Experiments</h2>  
            <div className="flex-start">
              {data[1].map((item, i) => (
                <ProjectLink
                  key = {i}
                  projectName = {data[1][i].name} 
                  projectDescription = {data[1][i].description} 
                  projectImage = {data[1][i].image} 
                  projectId = {data[1][i].id} 
                  urlParam = {"mini"}
                />
              ))}
            </div>
        </Container>
        <footer>
          <Button size="large" variant="outlined" color="primary" href={`/about`}>Contact Me</Button>
        </footer>
      </main>
    ); 
  }
       
}

export default Home;
