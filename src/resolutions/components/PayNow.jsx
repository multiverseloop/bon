import React, { Component } from 'react';
import { Container, Row, Col , Card,Button,Carousel} from 'react-bootstrap';
import Form from "react-bootstrap/Form"
import { Navigate } from "react-router-dom";
import CollectionsCarousel from '../../shared/components/carousel';
import PaymentOptions from '../../payments/components/PaymentOptions'



class PayNow extends React.Component {
  

    constructor(props){
        super(props);
        // this.handleSubmit=this.handleSubmit.bind(this);
        this.state = {option:''}
        console.log('I am in props')
      }
    render() { 
        return  (
          <div>
          <Container>
          {this.state.option==="collections" && (<Navigate to="/collections" replace={true} />)} 
          <Row><br/></Row>
          <Row>
            <Col>
            
            </Col>
          </Row>
          <Row>
            <Col>
              
                  <Card>
                  <CollectionsCarousel/>
          
          <Card.Body>
          <Card.Title>Due on your Credit Card ending 1234</Card.Title>
            <Card.Text>
            Our records show that you just missed a paymemt of $100 on your credit card ending 1234. 
            </Card.Text>
            <Card.Text>
            Please select one of the following payment options. 
            </Card.Text>
            <Row>
            <PaymentOptions/>
          
        </Row>
        <Row><br/></Row>
        <Row>
              <Col><Button variant="danger" size="lg" onClick={e => this.setState({ option: "collections" })}>Back</Button></Col>
              
          </Row>
          </Card.Body>
        </Card>
        </Col>
        </Row>
        
          
        
      </Container>
              </div>);
    }
}
 
export default PayNow;