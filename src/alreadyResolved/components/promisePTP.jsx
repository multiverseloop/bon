import React, { useState, useEffect, Component } from 'react';
import { Alert,Row,Col} from 'react-bootstrap';




export default function promisePTP(props) {
  const PTPDate = props.date;
  console.log(props)

        return  (
          <Row>
           
          <Alert variant="success">
          <p>You have agreed to make a payment by {PTPDate}.</p>
          </Alert>
          </Row>);
}
