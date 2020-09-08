import React from 'react';
import Home from "./pages/home.js"
import Article from "./pages/article.js"
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
	//----------------------Getting the data from my backend
	axios.get('https://tranquil-brushlands-15503.herokuapp.com/')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });


  //const idFromTitle = title.replace(/\s+/g,"-").toLowerCase();

  	return ( 
    	<div className="App">
    		<Router>
    			<Route exact path="/:id">
      				<Article/>
      			</Route>
      			<Route exact path="/">
      				<Home/>
      			</Route>
      		</Router>
    	</div>
  	);
}

export default App;
