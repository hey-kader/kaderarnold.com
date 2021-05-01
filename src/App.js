import React, { Component, useState } from 'react';
import HomePhotos from './Components/HomePhotos';
import {Card, Button} from 'react-bootstrap';
import Bio from './Components/Bio';
import Blog from './Components/Blog';
import Tee from './Components/Tee';
import Nav from './Components/Nav.js';
import Checkout from './Components/Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App () {
	
  return (
      <div style={{maxwidth: "65%", width: '680px',  margin: "auto"}}>
	<Router>
	    <Nav />
	    <Switch>
	      <Route exact path="/" component={Home} />
	      <Route path="/bio" component={Bio} />
	      <Route path="/blog" component={Blog} />
	      <Route path="/tee" component={Tee} />
	    </Switch>
	</Router>
    <Footer />
    </div>
  )}

const Home = () => (
  <HomePhotos />
);

export default App;
