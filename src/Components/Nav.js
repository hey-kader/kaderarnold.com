import React, {Component, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router';
import {ButtonGroup, Button} from 'react-bootstrap';

import '../App.js'

function Nav () {

	let history = useHistory ()
	let [on, toggle] = useState(0);

	useEffect (() => {
		const btn = document.getElementById("more");

		// I was changing the color of the button
		// on toggle, but perfer the subtlety of 
		// just changing the text 
		
		 		if (on == 1) {

			// btn.style.background = "#F78D56";
			// btn.style.borderColor = "#F78D56";
			
			btn.innerHTML = "back";
			on = 0;

		}
		else {

			// btn.style.background = "#5cb85c";
			// btn.style.borderColor = "#5cb85c";
			
			btn.innerHTML = "more";
			history.push ("");
			on = 1;
		}
	});
	
	const style = {
		margin: "0px",
		padding: "0px", 
		display: "inline-block",
		width: "98%"
	};
	const buttonStyle = {
		margin: "0.5rem 0rem 0.5rem 0rem", 
		float: "right" 
	};

	return (
	  <nav style={style}>
			  <h1 style={{display: 'inline-block', margin: "0.7rem 0.5rem 0.5rem 0rem"}}>Kader Arnold</h1>
		 <ButtonGroup style={buttonStyle} toggle>
			  <Link to="/more" style={{margin: "0.5rem 0rem 0.5rem 0.5rem"}}>
				  <Button onClick={() => toggle(on)} 
				  id="more" style={{marginLeft: "1rem"}}>more</Button>
			  </Link>
		</ButtonGroup>
	  </nav>
	);

};

export default Nav;
