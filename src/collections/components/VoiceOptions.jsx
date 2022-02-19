import React, { useState, useEffect, Component } from 'react';
import { Container, Row, Col , Card,Button,Carousel} from 'react-bootstrap';
import { Navigate } from "react-router-dom";
import {BiMicrophone,BiMicrophoneOff} from 'react-icons/bi';
import {PushToTalkButton,BigTranscript,ErrorPanel} from "@speechly/react-ui";
import { useSpeechContext } from "@speechly/react-client";




import { CardText } from 'react-bootstrap-icons';
import SpeechRecognition, {useSpeechRecognition} from 'react-speech-recognition';


export default function Collections(props) {
  const [option, setOption] = useState("");
  const { segment } = useSpeechContext()
  console.log(segment);

 
   
        return (
    <>
     {option==="paynow" && (<Navigate to="/paynow" replace={true} />)} 
     {option==="confirmpayment" && (<Navigate to="/confirmpayment" replace={true} />)} 
     {option==="promise" && (<Navigate to="/promise" replace={true} />)} 
     {option==="help" && (<Navigate to="/help" replace={true} />)} 
     
      {/* <Row><Card.Text>{segment.words.map(w => w.value).join(' ')}</Card.Text></Row> */}
      <Row>
      
   
      <Col></Col>
      <Col>
      <Card.Text><BigTranscript placement="top" /></Card.Text>
      <PushToTalkButton  captureKey=" "/>
      <ErrorPanel placement="bottom"/>
      </Col>
      <Col></Col>
      </Row>


    
      
    </>

   
         ) ;
    }

 
