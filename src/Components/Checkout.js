import React, { Component, useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap' 
import { Switch, Route, Link } from 'react-router-dom' 

import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

//import { toast } from 'react-toastify'

import {Elements} from'@stripe/react-stripe-js';
import {loadStripe } from '@stripe/stripe-js';


function Checkout (props) {

    let [size, setSize] = useState(props.size); 
    useEffect ( () => {
	
	    var menu = document.getElementById("sizedrop")
	    size = menu.options[menu.selectedIndex].value
    });

    let [count, setCount] = useState(props.count); 
    useEffect ( () => {

	var set = document.getElementById('quantity')
	count = set.options[set.selectedIndex].value

    });

    let [shippingSpeed, setState] = useState('Ground')
    useEffect (() => {

	if (shippingSpeed == 'Ground') {
	    document.getElementById('price').innerHTML = "12.00"
	    document.getElementById('ground').checked = true;
	}

	else if (shippingSpeed == 'Priority') {
	    document.getElementById('price').innerHTML = "21.00" 
	    document.getElementById('priority').checked = true;
	}

	else if (shippingSpeed == 'Overnight') {
	    document.getElementById('price').innerHTML = "53.00"
	    document.getElementById('overnight').checked = true;
	}

	var subtotal = (count * 30);
	var price = Number(document.getElementById('price').innerText);
	var tax = (parseFloat(subtotal)*.07)+(parseFloat(price)*0.07) 

	document.getElementById('tax').innerHTML = tax.toFixed(2)
	document.getElementById('total').innerHTML = (parseFloat(price)+(tax)+parseFloat(subtotal)).toFixed(2)
        document.getElementById('count').innerHTML = count
        document.getElementById('subtotal').innerHTML = (count*30).toFixed(2)

    });

    const embedded_card = {
	marginLeft: '1rem', 
	alignContent: 'center', 
	marginBottom: '1rem', 
    }
    const embedded_card_table = {
        alignItems: 'center',
	padding: '0rem 1rem', 
	margin: '0rem 1.1rem 0rem 1rem',
	alignContent: 'center', 
	width: '500px'
    }
    function sold () {
        // process card info using the stripe api
         
        alert ('sold!');
        alert(document.getElementById('total').innerHTML);
    }
    function handleToken (token, addresses) {
        console.log({token, addresses})
    
    }

    return (
	<>
	    <Link to="/tee/checkout" />
	    <Card.Header>
		<Card.Text><h3>Checkout</h3></Card.Text>
	    </Card.Header>
		<Card.Body style={{display: 'inline-block'}}>
		    <Card style={embedded_card}>
		<Card.Header><Card.Text><h6>Shipping</h6></Card.Text></Card.Header>
		<Card.Body>
			<table style={embedded_card_table}>
			<tr>
			    <td>
				<input id="ground" onClick={() => setState('Ground')} type="radio" name="shipping" />
				Ground:
			    </td>
			    <td id="shipping1">12.00</td>
			</tr>
			<tr>
			    <td>
				<input id="priority" onClick={() => setState('Priority')} type="radio" name="shipping" />
				Priority: 
			    </td>
				<td id="shipping2">21.00</td>
			</tr>
			<tr>
			    <td>
				<input id="overnight" onClick={() => setState('Overnight')} type="radio" name="shipping"/>
				Overnight: 
			    </td>
			    <td id="shipping3">53.00</td>
			</tr>
		    </table>

		</Card.Body>
		<Card.Footer>
		    <Card.Text></Card.Text>
		</Card.Footer>
	    </Card>
	    <Card style={embedded_card}>
		<Card.Header>
		    <Card.Text><h6>Subtotal</h6></Card.Text>
		</Card.Header>
		<Card.Body>
		    <table style={embedded_card_table}>
			<tr>
			    <th>Item</th>
			    <th>No. </th>
			    <th>Price</th>
			</tr>
		        <tr>
		            <td>White Tee ({size})</td>
		            <td id="count">{count}</td>
		            <td id="subtotal">{30*count}</td>
		        </tr>
			<tr>
			    <td>{shippingSpeed} Shipping</td>
			    <td></td>
			    <td id="price">12.00</td>
			</tr>
			<tr>
			    <td>Sales Tax</td>
			    <td></td>
			    <td id="tax"></td>
			</tr>
			<br />
			<tr>
			    <td><em>Total: </em></td>
			    <td></td>
			    <td id="total"><em>2.35</em></td>
			</tr>
		    </table>
		</Card.Body>
		<Card.Footer>
		</Card.Footer>
	    </Card>
	    </ Card.Body>
		<Card.Footer style={{contentJustify: 'right'}}>
                <StripeCheckout
                    stripeKey=process.env.SECRET_KEY
                    amount={(size*count)*(100)}
                    token={handleToken}
                />
	    </ Card.Footer>

    </>
    )
}
export default Checkout
