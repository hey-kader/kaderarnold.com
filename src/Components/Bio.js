import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

function Bio () {
	return (
		<Card id="main-card" style={{width: "98%"}}>
			<Card.Header>
				<Card.Title><h4>Summary</h4></Card.Title>
			</Card.Header>
			<Card.Body style={{opacity: "96%", padding: "0.5rem", margin: "0.5rem"}}>
					<Card bg="danger">
						<Card.Title style={{padding: "0.5rem", margin: "0.5rem"}}>
							<h5>Full Stack Development</h5>
						</Card.Title>
						<Card.Text style={{padding: "0.5rem", margin: "0rem 0.5rem"}}>
							<p> I practice full stack web development using either a LAMP stack, or a full stack javascript infrastructure. For front-end development, I perfer React to other frameworks (Vue, Angular) because of its speed. In tandem with the single threaded nature of nodejs, this js-stack approach is inceredibly fast and good for seo. 
							</p>
						</Card.Text>
					</Card>
					<hr />
					<Card bg="warning">
						<Card.Title style={{padding: "0.5rem", margin: "0.5rem"}}>
							<h5>Content Writing</h5>
						</Card.Title>
						<Card.Text style={{padding: "0.5rem", margin: "0rem 0.5rem"}}>
							<p>I often write white papers or technical analysis when bloggers or companies are in a position where they don't have t    he time to curate a fully seo-optimized 1500-2000 word article. I like to blog in the cryptocurrency sphere, and am confident in technical writing with r    egards to information technology.</p>
						</Card.Text>
					</Card>
					<hr />
					<Card bg="info">
						<Card.Title style={{padding: "0.5rem", margin: "0.5rem"}}>
							<h5>UX/UI Development</h5>
						</Card.Title>
						<Card.Text style={{padding: "0.5rem", margin: "0rem 0.5rem"}}>
							<p>In the past I used the tkinter module in python to implement GUI's, and generally speaking this is what i believe to b    e an excellent quick and dirty solution. That being said, we can also use the HTML/CSS/JS suite through the nodejs module electron, for a more profession    al feel. Electron is also platform independent. The catch being, electron was build on the chromium engine.</p>
						</Card.Text>
					</Card>
					<hr />
					<p><i>you can download my cv <a href="CV.pdf" target="_blank">here.</a></i></p>
				</Card.Body>
		</Card>
	);

}

export default Bio;
