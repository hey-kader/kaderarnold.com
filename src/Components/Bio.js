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
							<p> I practice full stack web development using either a LAMP stack, or a PERN stack. For front end development, I perfer React to other frameworks (Vue, Angular) because of its speed and modularity.  
							</p>
						</Card.Text>
					</Card>
					<hr />
					<Card bg="warning">
						<Card.Title style={{padding: "0.5rem", margin: "0.5rem"}}>
							<h5>Content Writing</h5>
						</Card.Title>
						<Card.Text style={{padding: "0.5rem", margin: "0rem 0.5rem"}}>
							<p>I often write white papers or technical analysis when bloggers or companies are in a position where they don't have the time to write (and edit) a fully optimized 1500-2000 word article.</p>
						</Card.Text>
					</Card>
					<hr />
					<Card bg="info">
						<Card.Title style={{padding: "0.5rem", margin: "0.5rem"}}>
							<h5>Game and GUI Programming</h5>
						</Card.Title>
						<Card.Text style={{padding: "0.5rem", margin: "0rem 0.5rem"}}>
							<p>In the past I used the tkinter module to implement GUI's. This is a python3 api for a library called tcl. I also like electron, which is a node module for writing desktop apps using html. I like to write games using the pyopengl and pygame modules.</p>
						</Card.Text>
					</Card>
					<hr />
					<p><i>you can download my cv <a href="Resume.pdf" target="_blank">here.</a></i></p>
				</Card.Body>
		</Card>
	);

}

export default Bio;
