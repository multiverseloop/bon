import React, { Component } from 'react';
import { Container, Row, Col , Card,Button,Carousel} from 'react-bootstrap';
import { Navigate } from "react-router-dom";
import {RiUserVoiceFill} from 'react-icons/ri';
import {MdTextFields} from 'react-icons/md';
import { CardText } from 'react-bootstrap-icons';
import VoiceOptions from './VoiceOptions'
import TextOptions from './TextOptions'




class options extends React.Component {
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
     <Card.Text>
      We understand this may be an oversight. Let us help you resolving this easily. Please choose one of the following options to inform us of your intentions.
      </Card.Text>

      <TextOptions/> 
    
      
      
    </>

   
         ) ;
    }
}
 
export default options;