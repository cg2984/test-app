import React from 'react';
import Home from "./pages/home.js"
import Article from "./pages/article.js"
import logo from './logo.svg';
import './App.css';
import axios from "axios";

function App() {
  	return (
    	<div className="App">
      		<Article/>
    	</div>
  	);
}

export default App;
