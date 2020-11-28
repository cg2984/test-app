import React, {useEffect,useState} from 'react';
import {
  Link
} from "react-router-dom";


function Header() {
  return (
    <header>
    	<h2> Hello! I'm Clara, a creative technologist based in NYC</h2>
    	<a href = "/about"> read more about me</a>
    </header>
  );
}

export default Header;

