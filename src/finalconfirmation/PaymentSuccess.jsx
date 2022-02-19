import React, {useState, Component, useEffect } from 'react';
import CollectionsCarousel from '../shared/components/carousel';
import { Container, Row, Col , Card,Button,Carousel} from 'react-bootstrap';
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, useLocation } from "react-router-dom";
import dateFormat, { masks } from "dateformat";

export default function App() {
    const { user} = useAuth0();
    const [option, setOption] = useState("");
    const originaltoday = new Date();
    const today = dateFormat(originaltoday,"yyyy-mm-dd")
    
    useEffect(() => {
  

      // Create PaymentIntent as soon as the page loads
      fetch("https://tv0t7pabab.execute-api.eu-central-1.amazonaws.com/dev/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email:"bulususashank@gmail.com",templateId:"d-931d5cfc09ee46ef809bfb7ee1d20c6e" }),
      })
  
      fetch("https://tv0t7pabab.execute-api.eu-central-1.amazonaws.com/dev/updatestatus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: "bulususashank@gmail.com", collectionsStatus:"PAYMENT_COMPLETE", resolvedStatus:true,resolvedData:{Payment_Date:today} }),
      })
        
    }, []);
    return  (
        <div>
        
        {option==="collections" && (<Navigate to="/collections" replace={true} />)} 
        <Row>
          
          
            
          <Card >
                
        
        <Card.Body>
        <Card.Title>Due on your Credit Card ending 1234</Card.Title>
          <Card.Text>
          Thanks for making the payment. We will update the account. 
          </Card.Text>
          <Row>
            <Col></Col>
          <Col><Button variant="danger"  onClick={e => setOption( "collections")}>Back</Button></Col>
          <Col></Col>
      </Row>
        </Card.Body>
      </Card>
    
      </Row>
      
        
      
    
            </div>


    );




    
}