import React, { Component } from 'react';
import { Card, Carousel, Spinner} from 'react-bootstrap';

function Loader () {
    return (
        <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>
      );
}

export default Loader ;