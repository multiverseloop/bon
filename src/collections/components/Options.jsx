import React, { Component } from 'react';
import { Container, Row, Col , Card,Button,Carousel} from 'react-bootstrap';
import { Navigate } from "react-router-dom";


class options extends React.Component {
    constructor(props){
        super(props);
        // this.handleSubmit=this.handleSubmit.bind(this);
        this.state = {option:''}
        console.log(props)

        
      }


    render() { 
        return (
    <div>
     {this.state.option==="paynow" && (<Navigate to="/paynow" replace={true} />)} 
     {this.state.option==="confirmpayment" && (<Navigate to="/confirmpayment" replace={true} />)} 
     {this.state.option==="promise" && (<Navigate to="/promise" replace={true} />)} 
     {this.state.option==="help" && (<Navigate to="/help" replace={true} />)} 
     <Card.Text>
      We understand this may be an oversight. Let us help you resolving this easily. Please choose one of the following options to inform us of your intentions.
      </Card.Text>
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
      <Button variant="primary" onClick={e => this.setState({ option: "help" })}>Help</Button>
      </Col>
      <Col>
      <Card.Text>
        Have problems with the payment ?  we can help.
      </Card.Text>
      </Col>
      </Row>
      <Row><br/></Row>
      
    </div>

   
         ) ;
    }
}
 
export default options;