import React, {useEffect,useState} from 'react';
import About from "../components/about.js"
import ProjectLink from "../components/project_link.js"
import axios from 'axios';

function Home() {
  const [data, setData] = useState(null);
  const [dummyData, setDummyData] = useState(null);

  //I need to do this to wake up heroku every few minutes. Wanted to make it simple so didnt bother with useeffect or the main data state I am using
  setInterval(function(){
     axios.get('https://tranquil-brushlands-15503.herokuapp.com/')
    .then(function (response) {
      console.log("woken up");
      setDummyData(response.data);   
    })
    .catch(function (error) {
      console.log(error);
    });
  }, 9000000);

  //Getting the data from my backend
  useEffect(() => {
    axios.get('https://tranquil-brushlands-15503.herokuapp.com/')
    .then(function (response) {
      console.log("response",response.data);
      setData(response.data);   
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);
  
  //making sure that the data is loaded. might be more elegant solution but I dont know it sorry. i have stuck it in issues in github
  if(data == null){
    return(
        <div> LOADING </div>
    );     
  }

  else{
       return (
        <div className="home">
          <About/>
          <section id = "projects" className = "projects_home">
              {data.map((project, i) => (
              <ProjectLink projectName = {data[i].name} projectDescription = {data[i].description} projectImage = {data[i].image} projectId = {data[i].id}/>
              ))}
          </section> 
          <footer>
            <p> Website built by me!</p>
            <p> Icons from FontAwesome</p>
          </footer>
        </div>
      ); 
  }    
}

export default Home;
