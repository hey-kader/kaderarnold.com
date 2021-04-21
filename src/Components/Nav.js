import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {ButtonGroup, Button} from 'react-bootstrap';

import '../App.js'
import Bio from './Bio';

class Nav extends Component {
	
	render () {
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
			  <Link style={{color: 'black', display: "inline-block"}} to="/" >
				  <h1 style={{margin: "0.7rem 0.5rem 0.5rem 0rem"}}>Kader Arnold</h1>
			  </Link>
			 <ButtonGroup style={buttonStyle} toggle>
				  <Link to="/bio" style={{margin: "0.5rem 0rem 0.5rem 0.5rem"}}>
					  <Button id="bio" style={{marginLeft: "1rem"}}>bio</Button>
				  </Link>
			</ButtonGroup>
		  </nav>
		);
	};

};

export default Nav;
