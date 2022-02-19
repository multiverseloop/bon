import React, { Component } from 'react';
import { Card, Carousel } from 'react-bootstrap';
import logo from '../../assets/Bank of Naboo-logos.jpeg'
import savetrees from '../../assets/SavePaper.jpg'


class CollectionsCarousel extends React.Component {
    render() { 
        return (
          
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block"
      src= {logo}
      alt="First slide" 
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src= {savetrees}
      alt="First slide" 
    />
  </Carousel.Item>
  </Carousel>);
    }
}
 
export default CollectionsCarousel;