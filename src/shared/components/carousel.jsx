import React, { Component } from 'react';
import { Card, Carousel } from 'react-bootstrap';
import logo from '../../assets/Bank of Naboo-logos.jpeg'
import savetrees from '../../assets/SavePaper.jpg'


class CollectionsCarousel extends React.Component {
    render() { 
        return (
          <Card style={{ width: '33rem' }}>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block"
      src= {logo}
      alt="First slide" width="530"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src= {savetrees}
      alt="First slide" width="530"
    />
  </Carousel.Item>
  </Carousel></Card>);
    }
}
 
export default CollectionsCarousel;