import React, { useState, useEffect, Component } from 'react';
import { Alert, Row, Col} from 'react-bootstrap';




export default function PaymentSuccess(props) {
  const PaymentDate = props.date;
        return  (
          
            
          <Alert variant="success">
          <p>You have already made a payment on {PaymentDate}.</p>
          </Alert>
        
          );
}
