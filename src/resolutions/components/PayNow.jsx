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
          <Container fluid>
        
          {this.state.option==="collections" && (<Navigate to="/collections" replace={true} />)} 
          
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
            Our records show that you just missed a paymemt of $100 on your credit card ending 1234. 
            </Card.Text>
            <Card.Text>
            Please select one of the following payment options. 
            </Card.Text>
         </Col>
          </Row>


          <Row><Col xs={12} sm={10} lg={4} md={4}></Col>
        <Col xs={12} sm={10} lg={4} md={6}><PaymentOptions/></Col></Row>

         
         
           
        
        
     
              </Container>);
    }
}
 
export default PayNow;