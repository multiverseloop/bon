import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Container, Row, Col , Card,Button,Carousel,Image} from 'react-bootstrap';
import CollectionsCarousel from '../../shared/components/carousel';
import logo from '../../assets/Bank of Naboo-logos.jpeg'


const Home = () => {
  const { loginWithRedirect } = useAuth0();

  return (
  
  <Container fluid>
    <Row>
    <Col xs={12} sm={12} lg={6} md={6}>
    <h1>BON - The bank of planet Naboo</h1> 

    <p> In a galaxy far far and away.... Planet Naboo has opened its first bank to support people with small and medium finances.
      To allow better customer experience we now provide a website for people to login and check their balances. 
      Please try to login and see it yourself.</p>

      <p> In a galaxy far far and away.... Planet Naboo has opened its first bank to support people with small and medium finances.
      To allow better customer experience we now provide a website for people to login and check their balances. 
      Please try to login and see it yourself.</p>
    </Col>
    <Col xs={12} sm={12} lg={6} md={6}>
    <div className="image-home"></div>
    </Col>
    
  </Row>
  
  

  </Container>
   
  
  );
};

export default Home;