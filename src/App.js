import React, { Component, useState } from 'react';
import HomePhotos from './Components/HomePhotos';
import {Card, Button} from 'react-bootstrap';
import Bio from './Components/Bio';
import Nav from './Components/Nav.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App () {
	
  return (
	  <div style={{maxWidth: "65%", margin: "auto"}}>
		<Router>
			<Nav />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/bio" component={Bio} />
			</Switch>
		</Router>
	    <Footer />
    </div>
  );

}

const Home = () => (
		<HomePhotos />
);

export default App;
