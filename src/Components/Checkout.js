import React, { Component, useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap' 
import { Switch, Route, Link } from 'react-router-dom' 

function Checkout (props) {
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

	var subtotal = (props.quantity * 30);
	var price = (document.getElementById('price').innerText);
	var tax = (parseFloat(subtotal)*.07)+parseFloat(price)*0.07 
	document.getElementById('tax').innerHTML = tax.toFixed(2)
	document.getElementById('total').innerHTML = parseFloat(price)+(tax)+parseFloat(subtotal)

    });

    const embedded_card = {
	marginLeft: '1rem', 
	marginBottom: '1.5rem', 
	float: 'right' 
    }
    const embedded_card_table = {
	padding: '0rem 1rem', 
	margin: '0rem 1.1rem 0rem 1rem',
	alignContent: 'left', 
	width: '230px'
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
		            <td>White Tee</td>
		            <td>{props.quantity}</td>
		            <td>{30*props.quantity+".00"}</td>
		        </tr>
			<tr>
			    <td>{shippingSpeed}</td>
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
	    <Card>
		<Card.Header>
		    <Card.Text>
			<h6>Billing Info</h6>
		    </Card.Text>
		</Card.Header>
		<Card.Body>
		    <table>
			<tr>
			    <td>
				<label>Email: </label>
			    </td>
			    <td>
				<input type="text" name="name" placeholder="example@white.tee" required />
			    </td>
			</tr>
			<br />
			<tr>
			    <td>
				<label>Address: </label>
			    </td>
			    <td>
				<input type="text" name="name" placeholder="120 White Tee St." required />
			    </td>
			</tr>
			<tr>
			    <td>
				<label>City: </label>
			    </td>
			    <td>
				<input type="text" name="name" placeholder="Teeville" required />
			    </td>
			</tr>
			<tr>
			    <td>
				<label>State: </label>
			    </td>
			    <td>
				<input type="text" name="name" placeholder="Tennessee" required />
			    </td>
			</tr>
			<tr>
			    <td>
				<label>Zip code: </label>
			    </td>
			    <td>
				<input type="text" name="name" placeholder="16093" required />
			    </td>
			</tr>
			<br />
			<tr>
			    <td>
				<label>Name: </label>
			    </td>
			    <td>
				<input type="text" name="name" placeholder="White Tee" required />
			    </td>
			</tr>
			<tr>
			    <td>
				<label>Card: </label>
			    </td>
			    <td>
				<input type="text" name="name" placeholder="4460 9943 9285 7284" required />
			    </td>
			</tr>
			<tr>
			    <td>
				<label>Expiration: </label>
			    </td>
			    <td>
				<input type="text" name="name" placeholder="MM/YYYY" required />
			    </td>
			</tr>
			<tr>
			    <td>
				CVV
			    </td>
			    <td>
				<input type="text" name="name" placeholder="228" required />
			    </td>
			</tr>
			<br />
		    </table>
		</Card.Body>
		<Card.Footer></Card.Footer>
	    </Card>
	    </Card.Body>
		<Card.Footer style={{contentJustify: 'right'}}>
		<Card.Text><input type="submit" value="submit"/></Card.Text>
	    </Card.Footer>
    </>
    )



}
export default Checkout
