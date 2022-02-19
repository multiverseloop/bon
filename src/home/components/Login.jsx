import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Container, Row, Col , Card,Button,Carousel,Image} from 'react-bootstrap';
import CollectionsCarousel from '../../shared/components/carousel';
import logo from '../../assets/Bank of Naboo-logos.jpeg'


const Home = () => {
  const { loginWithRedirect } = useAuth0();

  return (
  
  <div>
   <Card >
     
     
    <Row>
    <Card.Img variant="top" src={logo} />
    <Card.Body>
    <Card.Title>BON Collections management</Card.Title>
      
    </Card.Body>
    </Row>
    <Row>
    <Col></Col>  
    <Col>
    
    <Button variant="primary" onClick={() => loginWithRedirect()}>Log In</Button>
    </Col>
    <Col></Col>
  
    </Row>
  </Card>
  
  </div>);
};

export default Home;