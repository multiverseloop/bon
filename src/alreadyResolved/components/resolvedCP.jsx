import React, { useState, useEffect, Component } from 'react';
import { Alert} from 'react-bootstrap';




export default function resolvedCP(props) {
  const CPDate = props.date;
        return  (
          <Alert variant="success">
          <Alert.Heading>You have confirmed that a payment has been made on {CPDate}. No further Action Required.</Alert.Heading>
          </Alert>);
}
