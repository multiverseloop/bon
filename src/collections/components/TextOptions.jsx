import React, { Component } from 'react';
import { Container, Row, Col , Card,Button,Carousel} from 'react-bootstrap';
import { Navigate } from "react-router-dom";
import {RiUserVoiceFill} from 'react-icons/ri';
import { CardText } from 'react-bootstrap-icons';
import VoiceOptions from './VoiceOptions'
import {PushToTalkButton,BigTranscript,ErrorPanel} from "@speechly/react-ui";


class textoptions extends React.Component {
    constructor(props){
        super(props);
        // this.handleSubmit=this.handleSubmit.bind(this);
        this.state = {option:''}
        console.log(props)

        
      }


    render() { 
        return (
    <>
     {this.state.option==="paynow" && (<Navigate to="/paynow" replace={true} />)} 
     {this.state.option==="confirmpayment" && (<Navigate to="/confirmpayment" replace={true} />)} 
     {this.state.option==="promise" && (<Navigate to="/promise" replace={true} />)} 
     {this.state.option==="help" && (<Navigate to="/help" replace={true} />)} 
     
      <Row>
    
      <Col xs={6} sm={4} lg={4} md={4}>
      <Button  variant="primary" onClick={e => this.setState({ option: "paynow" })}>Pay Now</Button>
      </Col>
      <Col xs={6} sm={4} lg={4} md={4}>
      <Card.Text>
        Pay using Card or klarna
      </Card.Text>
      </Col>
      </Row>
    <Row><br/></Row>
      <Row>
      
      <Col xs={6} sm={4} lg={4} md={4}>
      <Button  variant="primary" onClick={e => this.setState({ option: "confirmpayment" })}>Already Paid</Button>
      </Col>
      <Col xs={6} sm={4} lg={4} md={4}>
      <Card.Text>
        Let us know if you have already made a payment
      </Card.Text>
      </Col>
      </Row>
      <Row><br/></Row>
      <Row>
      
      <Col xs={6} sm={4} lg={4} md={4}>
      <Button  variant="primary" onClick={e => this.setState({ option: "promise" })}>Pay Later</Button>
      </Col>
      <Col xs={6} sm={4} lg={4} md={4}>
      <Card.Text>
        Let us know if you can pay in the next few days.
      </Card.Text>
      </Col>
      </Row>
      <Row><br/></Row>
      
      
    </>

   
         ) ;
    }
}
 
export default textoptions;