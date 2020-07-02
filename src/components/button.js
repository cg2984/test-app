import React from 'react';

function Button({Name, Link}) {
  return (
  	<div  className = "button">
    	<a className = "button_link" href={Link}>{Name}</a>
    </div>
  );
}

export default Button;
