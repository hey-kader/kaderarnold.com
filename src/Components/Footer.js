import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

class Footer extends Component {
	
	render () {
		return (
			<footer>
				<address>
					<a style={{marginRight: "0.5rem"}} href="https://www.instagram.com/a_social_engineer/"
						className="fa fa-instagram footer-icon" target= "_blank"></a>	
					<a style={{marginRight: "0.5rem"}} href="https://twitter.com/nosocialengine"
						className="fa fa-twitter footer-icon" target="_blank"></a>
					<a style={{marginRight: "0.5rem"}} href="https://www.github.com/pablopenrose/" 
						className="fa fa-github footer-icon" target="_blank"></a>
					<a style={{marginRight: "0.5rem"}} href="https://www.linkedin.com/in/kader-arnold-77008a210" 
						className="fa fa-linkedin footer-icon" target="_blank"></a>
					<a style={{fontSize: "90%", opacity: "80%",  float: "right", marginRight: "1.25rem", marginTop: "2px"}} href="mailto:kaderarnold@icloud.com">inquiries</a>
				</address>
			</footer>
		);
	}

}

export default Footer; 
