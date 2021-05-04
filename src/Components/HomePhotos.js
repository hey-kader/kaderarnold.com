import React, {Component} from 'react';
import { Carousel } from 'react-bootstrap';

class HomePhotos extends Component {
	render () {

		const picStyle = {
			width: "50%", 
			maxWidth: "50%",
			margin: "0px",  
			padding: "0px"
		};

		return (
			<Carousel autoPlay>
				<Carousel.Item interval={5000}>
					<div id="photo-set" className="photo-wrapper">
						<img className="main-pic" style={picStyle} src="compressed/_4.jpg" alt="4" />
						<img className="main-pic" style={picStyle} src="compressed/_6.jpg" alt="6" />
					</div>
				</Carousel.Item>

				<Carousel.Item interval={5000}>
					<div id="photo-set" className="photo-wrapper">
						<img className="main-pic" style={picStyle} src="compressed/_1.jpg" alt="1" />
						<img className="main-pic" style={picStyle} src=" compressed/_3.jpg" alt="3" />
					</div>
				</Carousel.Item>
			</Carousel>
		);
	}
}

export default HomePhotos;
