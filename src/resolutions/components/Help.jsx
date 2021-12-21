import React, { useState, Component } from 'react';
import { Container, Row, Col , Card,Button,Carousel, Spinner} from 'react-bootstrap';
import CollectionsCarousel from '../../shared/components/carousel';
import { Navigate } from "react-router-dom";
import { Form } from 'react-bootstrap';


function Help() {
    const [option, setOption] = useState(null);
    return (
        <div>
        <Container>
        {option==="collections" && (<Navigate to="/collections" replace={true} />)} 
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
    Welcome to the self guided help. We understand that you are having problems making the payment.
    </Card.Text>
    <Card.Text>
    Before we start please select a reason below so that we can serve you better.  
    </Card.Text>
    <Card.Text>
    <Form.Select aria-label="Default select example">
  <option>Select Reason</option>
  <option value="1">I cant pay the whole amount</option>
  <option value="2">I want a payment holiday</option>
  <option value="3">Financial Difficulties</option>
</Form.Select>
    </Card.Text>
    <Button variant="danger" size="lg" onClick={() => setOption("collections")}>Back</Button>
  </Card.Body>
</Card>
</Col>
</Row>
  

</Container>
      </div>   
      );
}

export default Help;