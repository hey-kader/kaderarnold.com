import React, { Component, useEffect, useState } from 'react';
import {Card, Button} from 'react-bootstrap';
import {Link, Switch, Route } from 'react-router-dom'
import Checkout from './Checkout';


function Tee ()  {

//    var selectmenu = document.getElementById("quantity");
//    var options = selectmenu.selectedIndex;

    let [size, setSize] = useState(0); 

    useEffect ( () => {
	
	    var menu = document.getElementById("sizedrop")
	    size = menu.options[menu.selectedIndex].value
	});

    let [count, setCount] = useState(1); 

    useEffect ( () => {

	var set = document.getElementById('quantity')
	count = set.options[set.selectedIndex].value
	alert (count)

    });

    function hide () {
	document.getElementById('teeCard').style.display = 'none'
	document.getElementById('teeCard-Header').style.display = 'none'
	document.getElementById('toggle').style.display = 'none'
	document.getElementById('tbody').style.display = 'none'
    }
    
    return (
	<article id="article">
	   <Link to="/tee" />  
	   <Card id="t2">
	       <Card.Header id="teeCard-Header">
		   <Card.Text><h3>Store</h3></Card.Text>
	       </Card.Header>
	       <Card.Body id='tbody'>
		   <Card id="teeCard">
		       <Card.Header>
			   <Card.Text style={{float: 'left', marginBottom: '0px'}}><code style={{color: 'black'}}>White Tee</code></Card.Text>
			   <Card.Text style={{float: 'right'}}><code style={{color: 'black'}}>Price: 30.00</code></Card.Text>
		       </Card.Header>
		       <img src="tee.png" style={{width: '50%', margin: 'auto'}} alt="white tee shirt" />
		       <Card.Footer>
			   <Card.Text>
				   <code style={{color: 'black'}}>Size: </code>
				    <select id="sizedrop" onChange={() => setSize(size)} 
					    style={{marginRight: '5px', paddingRight: '5px'}} name="size">
				       <option value="xs" selected>xs</option>
				       <option value="s">s</option>
				       <option value="m">m</option>
				       <option value="l">l</option>
				       <option value="xl">xl</option>
				   </select>
				   <code style={{color: 'black'}}>Quantity: </code>
				   <select onChange={count} id="quantity" name="quantity">
				       <option value="1">1</option>
				       <option value="2">2</option>
				       <option value="3">3</option>
				       <option value="4">4</option>
				       <option value="5">5</option>
				       <option value="6">6</option>
				       <option value="7">7</option>
				       <option value="8">8</option>
				       <option value="9">9</option>
				   </select>
			   </Card.Text>
		       </Card.Footer>
		   </Card>
	       </Card.Body>
	       <Switch>
	       <Route exact path="/tee/checkout">
		   <Checkout quantity={count} size={size} />
	       </Route>
	       </Switch>
	   <Link to="/tee/checkout">
	       <button id="toggle" onClick={() => {hide()}} style={{size: '50%', padding: '0rem 0.4rem', float: 'right'}}>
	       <code style={{color: 'black'}}>buy</code>
	     </button>
	  </Link>
	   </Card> 
	</article>
    )
}
	    

export default Tee;
