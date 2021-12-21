import React, { useState, useEffect, Component } from 'react';
import { Container, Row, Col , Card,Button,Carousel} from 'react-bootstrap';
import Form from "react-bootstrap/Form"
import { Navigate } from "react-router-dom";
import CollectionsCarousel from '../shared/components/carousel';
import { useAuth0 } from "@auth0/auth0-react";



export default function App() {
  const [option, setOption] = useState("");
  const { user} = useAuth0();
  useEffect(() => {
  

    // Create PaymentIntent as soon as the page loads
    fetch("/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }],email:user.email }),
    })
      
  }, []);

        return  (
            <div>
            <Container>
            {option==="collections" && (<Navigate to="/collections" replace={true} />)} 
            <Row><br/></Row>
            <Row>
              <Col>
              
              </Col>
            </Row>
            <Row>
              
              <Col>
                
              <Card style={{ width: '33rem' }}>
                    <CollectionsCarousel/>
            
            <Card.Body>
            <Card.Title>Due on your Credit Card ending 1234</Card.Title>
              <Card.Text>
              Thanks for confirming that you already made the payment.
              </Card.Text>
            
              <Row>
              <Col><Button variant="danger" size="lg" onClick={e => setOption( "collections")}>Back</Button></Col>
          </Row>
            </Card.Body>
          </Card>
          </Col>
          </Row>
          
            
          
        </Container>
                </div>);
}
