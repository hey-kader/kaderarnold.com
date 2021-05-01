import React, {Component, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router';
import {ButtonGroup, Button} from 'react-bootstrap';
import './Tee'

import '../App.js'

function Nav () {

	let history = useHistory ()
	let [on, toggle] = useState(0);

	useEffect (() => {
	    
	    const btn = document.getElementById("bio");
	    const blog_btn = document.getElementById("blog");
	    const store_btn = document.getElementById("tee");

	    if (window.location.href == "http://localhost:3000/bio" && on) {
		btn.innerHTML = "back";
		blog_btn.style.display = "none";
		store_btn.style.display = "none";
		on = 0
	    }
	    else if (window.location.href == "http://localhost:3000/blog" && on) {
		btn.innerHTML = "back";
		blog_btn.style.display = "none";
		store_btn.style.display = "none";
		on = 0
	    }
	    else if (window.location.href == "http://localhost:3000/tee" && on) {
		store_btn.innerHTML = "back";
		btn.style.display = "none";
		blog_btn.style.display = "none";
		on = 0
	    }
	    else if (on == 0) {
		on = 1
		blog_btn.innerHTML = "blog";
		btn.innerHTML = "bio";
		store_btn.innerHTML = "store";
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
		width: "99%"
	};
	const buttonStyle = {
		margin: "0.5rem auto", 
		float: "right" 
	};

	return (
	  <nav style={style}>
	      <h1 style={{display: 'inline-block', marginLeft: '0rem', marginTop: '0.5rem', padding: '0rem'}}>Kader Arnold</h1>
	     <ButtonGroup style={buttonStyle} toggle>
		 <Link to="/blog" style={{margin: "0.5rem 0rem 0.5rem 0rem"}}>
		  <Button onClick={() => toggle(on)} 
		      id="blog" style={{marginLeft: "0.8rem"}}>blog</Button>
		 </Link>
		  <Link to="/bio" style={{margin: "0.5rem 0rem 0.5rem 0rem"}}>
		    <Button onClick={() => toggle(on)} 
		      id="bio" style={{marginLeft: "0.8rem"}}>bio</Button>
		  </Link>
		  <Link to="/tee" style={{margin: "0.5rem 0rem 0.5rem 0rem"}}>
		      <Button onClick={() => toggle(on)} id="tee" style={{marginLeft: "0.8rem"}}>store</Button>
		  </Link>
	    </ButtonGroup>
	  </nav>
	);

};

export default Nav;
