import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Container, Row, Col , Card,Button,Carousel} from 'react-bootstrap';
import CollectionsCarousel from '../../shared/components/carousel';


const Home = () => {
  const { loginWithRedirect } = useAuth0();

  return (
  
  <div>
   <Card style={{ width: '33rem' }}>
            <CollectionsCarousel/>
    
    <Card.Body>
    <Card.Title>BON Collections management</Card.Title>
      <Card.Text>
      Please proceed to login
      </Card.Text>
    </Card.Body>
  </Card>
  <button onClick={() => loginWithRedirect()}>Log In</button>
  </div>);
};

export default Home;