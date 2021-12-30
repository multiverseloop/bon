import React, { useState, useEffect, Component } from 'react';
import { Alert} from 'react-bootstrap';




export default function promisePTP(props) {
  const PTPDate = props.date;
  console.log(props)

        return  (
          <Alert variant="success">
          <Alert.Heading>You have agreed to make a payment by {PTPDate} . No further Action Required.</Alert.Heading>
          </Alert>);
}
