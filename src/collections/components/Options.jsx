import React, { Component } from 'react';
import { Container, Row, Col , Card,Button,Carousel} from 'react-bootstrap';
import { Navigate } from "react-router-dom";
class options extends React.Component {
    constructor(props){
        super(props);
        // this.handleSubmit=this.handleSubmit.bind(this);
        this.state = {option:''}
        console.log('I am in props')
      }


    render() { 
        return (
    <Container>
     {this.state.option==="paynow" && (<Navigate to="/paynow" replace={true} />)} 
     {this.state.option==="confirmpayment" && (<Navigate to="/confirmpayment" replace={true} />)} 
     {this.state.option==="promise" && (<Navigate to="/promise" replace={true} />)} 
      <Row>
      <Col>
      <Button variant="primary" onClick={e => this.setState({ option: "paynow" })}>Pay Now</Button>
      </Col>
      <Col>
      <Card.Text>
        Pay using Card, Bank or Paypal
      </Card.Text>
      </Col>
      </Row>
      <Row><Col><br/></Col></Row>
      <Row>
      <Col>
      <Button variant="primary" onClick={e => this.setState({ option: "confirmpayment" })}>Already Paid</Button>
      </Col>
      <Col>
      <Card.Text>
        Let us know if you have already made a paymemt
      </Card.Text>
      </Col>
      </Row>
      <Row><Col><br/></Col></Row>
      <Row>
      <Col>
      <Button variant="primary" onClick={e => this.setState({ option: "promise" })}>Promise to Pay</Button>
      </Col>
      <Col>
      <Card.Text>
        Let us know if you can pay in the next few days.
      </Card.Text>
      </Col>
      </Row>
      <Row><Col><br/></Col></Row>
      <Row>
      <Col>
      <Button variant="primary">Pay Later</Button>
      </Col>
      <Col>
      <Card.Text>
        Dont have time? No Problem! Tell us when and we can remind you.
      </Card.Text>
      </Col>
      </Row>
      
    </Container>

   
         ) ;
    }
}
 
export default options;