import React, { useState, useEffect, Component } from 'react';
import { Container, Row, Col , Card,Button,Carousel} from 'react-bootstrap';
import Form from "react-bootstrap/Form"
import { Navigate, useLocation } from "react-router-dom";
import CollectionsCarousel from '../shared/components/carousel';
import { useAuth0 } from "@auth0/auth0-react";



export default function App() {
  const [option, setOption] = useState("");
  const location = useLocation();
  const { user} = useAuth0();
  useEffect(() => {
  

    // Create PaymentIntent as soon as the page loads
    fetch("/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }],email:user.email,templateId:"d-674276721c984cc28740b07544607e03" }),
    })

    fetch("/updateStatus", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email, collectionsStatus:"CONFIRMED_PAYMENT", resolvedStatus:true,resolvedData:{CPDate:location.state} }),
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
              Thanks for confirming.
              </Card.Text>
              <Card.Text>
              We noted that a payment has already been made on {location.state}
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
