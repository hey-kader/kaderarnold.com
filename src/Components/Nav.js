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
	    const blog_btn = document.getElementById("blog");
	    const store_btn = document.getElementById("store");

	    // I was changing the color of the button
	    // on toggle, but perfer the subtlety of 
	    // just changing the text 
		
	    if (window.location.href == "http://localhost:3000/more" && on) {
		btn.innerHTML = "back";
		blog_btn.style.display = "none";
		store_btn.style.display = "none";
		on = 0
	    }
	    else if (window.location.href == "http://localhost:3000/blog" && on) {
		blog_btn.innerHTML = "back";
		btn.style.display = "none";
		store_btn.style.display = "none";
		on = 0
	    }
	    else if (window.location.href == "http://localhost:3000/store" && on) {
		blog_btn.innerHTML = "back";
		btn.style.display = "none";
		store_btn.style.display = "none";
		on = 0
	    }
	    else if (on == 0) {
		on = 1
		blog_btn.innerHTML = "blog";
		btn.innerHTML = "bio";
		btn.style.display = "block";
		blog_btn.style.display = "block";
		store_btn.style.display = "block";

		history.push("");
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
		 <Link to="/blog" style={{margin: "0.5rem 0rem 0.5rem 0.5rem"}}>
		  <Button onClick={() => toggle(on)} 
		      id="blog" style={{marginLeft: "1rem"}}>blog</Button>
		 </Link>
		  <Link to="/more" style={{margin: "0.5rem 0rem 0.5rem 0.5rem"}}>
		    <Button onClick={() => toggle(on)} 
		      id="bio" style={{marginLeft: "1rem"}}>bio</Button>
		  </Link>
		  <Link to="/store" style={{margin: "0.5rem 0rem 0.5rem 0.5rem"}}>
		    <Button onClick={() => toggle(on)} 
		      id="store" style={{marginLeft: "1rem"}}>store</Button>
		  </Link>
	    </ButtonGroup>
	  </nav>
	);

};

export default Nav;
