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
      <Container fluid>
           
      {option==="collections" && (<Navigate to="/collections" replace={true} />)} 
     
      <Row><br/></Row>
      <Row >
<Col xs={12} sm={10} lg={4} md={4}></Col>
<Col xs={12} sm={10} lg={4} md={6}>
<Card.Title>Due on your Credit Card ending 1234</Card.Title>
</Col>
</Row>

        
        
          
<Row>
        
        <Col xs={12} sm={10} lg={4} md={4}></Col>
<Col xs={12} sm={10} lg={4} md={6}>
          <Card.Text>
          Thanks for making the payment.
          </Card.Text>
          <Card.Text>
          We will update your account.
          </Card.Text>
          <br/>
          </Col>
          <Row>
          <Col xs={1} sm={6} lg={5} md={4}></Col>
          <Col xs={1} sm={6} lg={1} md={4}><Button variant="danger" onClick={e => setOption( "collections")}>Back</Button></Col>
          <Col xs={1} sm={6} lg={4} md={4}></Col>
      </Row>
       
    
      </Row>
      
        
  
          </Container>


    );




    
}