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
        
          {this.state.option==="collections" && (<Navigate to="/collections" replace={true} />)} 
          <Card>
          <Row>
          </Row>
          <Row>
          
          <Card.Body>
          <Card.Title>Due on your Credit Card ending 1234</Card.Title>
            <Card.Text>
            Our records show that you just missed a paymemt of $100 on your credit card ending 1234. 
            </Card.Text>
            <Card.Text>
            Please select one of the following payment options. 
            </Card.Text>
          </Card.Body>
          </Row>
          <Row><PaymentOptions/></Row>
          <Row><br/></Row>
          <Row>
             <Col></Col> 
             <Col><Button variant="danger"  onClick={e => this.setState({ option: "collections" })}>Back</Button></Col>
             <Col></Col>
              
          </Row>
          </Card>
           
        
        
     
              </div>);
    }
}
 
export default PayNow;