import React, { Component, useEffect, useState } from 'react';
import {Card, Button} from 'react-bootstrap';

function Store ()  {

    let [price, update] = useState(0);
    useEffect (() => {
	var quantity = document.getElementById('quantity');
	
    }); 

    function handleChange (event) {
	price = (event.target.value * 30.00)
    }

    return (
	<article>
	   <Card>
	       <Card.Header>
		   <Card.Text><h3>Store</h3></Card.Text>
	       </Card.Header>

	       <Card.Body>
		   <Card>
		       <Card.Header>
			   <Card.Text style={{float: 'left', marginBottom: '0px'}}>White Tee</Card.Text>
			   <Card.Text style={{float: 'right'}}>Price: 30.00</Card.Text>
		       </Card.Header>
		       <img src="tee.png" style={{width: '50%', margin: 'auto'}} alt="white tee shirt" />
		       <Card.Body>
			   <Card.Text style={{margin: '0px 5px', padding: '0px 5px'}}>
			       <form action="index.html">
			       Size:<select id="size" style={{marginRight: '5px', paddingRight: '5px'}} name="size">
				       <option value="xs" selected>xs</option>
				       <option value="s">s</option>
				       <option value="m">m</option>
				       <option value="l">l</option>
				       <option value="xl">xl</option>
				   </select>

				   Quantity: <select onChange={handleChange} id="quantity" name="quantity">

				       <option value="1" selected>1</option>
				       <option value="2">2</option>
				       <option value="3">3</option>
				       <option value="4">4</option>
				       <option value="5">5</option>
				       <option value="6">6</option>
				       <option value="7">7</option>
				       <option value="8">8</option>
				       <option value="9">9</option>
				       <option value="10">10</option>
				   </select>
				   <Button style={{size: '50%', float: 'right'}}>Buy</Button>
			       </form>
			   </Card.Text>
		       </Card.Body>
		   </Card>
	       </Card.Body>
	   </Card> 
	</article>
    )
}

export default Store;
