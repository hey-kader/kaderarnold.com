import React, {Component, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router';
import {ButtonGroup, Button} from 'react-bootstrap';

import '../App.js'

function Nav () {

	let history = useHistory ()
	let [on, toggle] = useState(0);

	useEffect (() => {
		const btn = document.getElementById("bio");

		if (on == 1) {
			btn.innerHTML = "back";
			btn.style.background = "#f0ad4e";
			btn.style.borderColor = "#f0ad4e";
			on = 0;

		}
		else {
			btn.innerHTML = "bio";
			btn.style.background = "#0275d8";
			btn.style.borderColor = "#0275d8";
			history.push ("");
			on = 1;
		}
	});
	
	const style = {
		background: "#ffda669", 
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
			  <Link to="/bio" style={{margin: "0.5rem 0rem 0.5rem 0.5rem"}}>
				  <Button onClick={() => toggle(on)} 
				  id="bio" style={{marginLeft: "1rem"}}>bio</Button>
			  </Link>
		</ButtonGroup>
	  </nav>
	);

};

export default Nav;
