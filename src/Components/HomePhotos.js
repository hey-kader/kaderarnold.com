import React, {Component} from 'react';
import { Carousel } from 'react-bootstrap';

class HomePhotos extends Component {
	render () {

		const picStyle = {
			width: "49%", 
			margin: "0px",  
			padding: "0px"
		};

		return (
			<Carousel autoplay>
				<Carousel.Item interval={5000}>
					<div id="photo-set" className="photo-wrapper">
						<img className="main-pic" style={picStyle} src="Images/pics/two/4.jpg" alt="1" />
						<img className="main-pic" style={picStyle} src="Images/pics/two/6.jpg" alt="2" />
					</div>
				</Carousel.Item>

				<Carousel.Item interval={5000}>
					<div id="photo-set" className="photo-wrapper">
						<img className="main-pic" style={picStyle} src="Images/pics/two/1.jpg" alt="1" />
						<img className="main-pic" style={picStyle} src="Images/pics/two/3.jpg" alt="2" />
					</div>
				</Carousel.Item>
			</Carousel>
		);
	}
}

export default HomePhotos;
