import React, { Component } from 'react';
import Header from '../../shared/components/Header';
import { Container, Row, Col , Card,Button,Carousel, Spinner} from 'react-bootstrap';
import Options from './Options';
import CollectionsCarousel from '../../shared/components/carousel';
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";



export default function Collections(props)
 {
  
    const { user, isAuthenticated, isLoading } = useAuth0();
    console.log(user)
    const { logout } = useAuth0();

   
  

    
        return (
          isAuthenticated && (
        <div>
          <Container>
            <Row><br/></Row>
             <Row>
              <Col></Col>
              </Row>
    <Row>
      
      <Col>
        
            <Card style={{ width: '33rem' }}>
            <CollectionsCarousel/>
    
    <Card.Body>
    <Card.Title>Due on your Credit Card ending 1234</Card.Title>
      <Card.Text>
      Hello {user.name} Our records show that you just missed a paymemt of $100 on your credit card ending 1234.
      </Card.Text>
      <Card.Text>
      We understand this may be an oversight. Let us help you resolving this easily. Please choose one of the following options to inform us of your intentions.
      </Card.Text>
      <Options/>
    <Button variant="danger" size="lg" onClick={() => logout({ returnTo: window.location.origin })}>logout</Button>
    </Card.Body>
  </Card>
  </Col>
  </Row>
    
  
</Container>
        </div>));
    }

 
