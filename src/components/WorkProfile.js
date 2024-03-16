import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../images/image1.jpeg';
import image2 from '../images/image2.jpeg';
import image3 from '../images/image3.jpeg';
import image4 from '../images/image4.jpeg';
import './css/WorkProfile.css'; 

function WorkProfile() {
  return (
    <div id='work'>
      <Carousel className="carousel-container">
        <Carousel.Item>
          <img
            className="carousel-image"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption className="carousel-caption">
            <h3>Sleek Designs, Seamless UX</h3>
            <p>Crafting user-centric designs for effortless experiences.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src={image2}
            alt="Second slide"
          />
          <Carousel.Caption className="carousel-caption">
            <h3>Designs That Speak</h3>
            <p>Communicative designs that amplify your brand's voice.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src={image3}
            alt="Third slide"
          />
          <Carousel.Caption className="carousel-caption">
            <h3>Innovative Design Hub</h3>
            <p>Pushing design boundaries for impactful outcomes.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-image"
            src={image4}
            alt="Fourth slide"
          />
          <Carousel.Caption className="carousel-caption">
            <h3>Captivating Conversions</h3>
            <p>Compelling designs that drive engagement and results.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default WorkProfile;
