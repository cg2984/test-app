import React from 'react';
import Home from "./pages/home.js";
import Article from "./pages/article.js";
import MiniArticle from "./pages/mini_article.js";
import About from "./pages/about.js";
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  //const idFromTitle = title.replace(/\s+/g,"-").toLowerCase();
  	return ( 
    	<body className="App">
    		<Router>
          <Route exact path="/about">
            <About/>
          </Route>
    	    <Route exact path="/project/:id">
      	    <Article/>
      		</Route>
      		<Route exact path="/">
      			<Home/>
      		</Route>
          <Route exact path="/miniproject/:id">
            <MiniArticle/>
          </Route>
      	</Router>
    	</body>
  	);
}

export default App;
