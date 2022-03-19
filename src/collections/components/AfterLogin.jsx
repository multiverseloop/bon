import React, { useState, useEffect, Component } from 'react';
import Header from '../../shared/components/Header';
import { Container, Row, Col , Card,Button,Carousel, Spinner} from 'react-bootstrap';
import Options from './Options';
import CollectionsCarousel from '../../shared/components/carousel';
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "../../shared/components/Loader";
import ResolvedRouter from '../../alreadyResolved/components/resolvedRouter';
import logo from '../../assets/Bank of Naboo-logos.jpeg';
import {RiUserVoiceFill} from 'react-icons/ri';
import {PushToTalkButton,BigTranscript,ErrorPanel} from "@speechly/react-ui";


export default function Afterlogin () {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const { logout } = useAuth0();
    const [collectionStatus, setcollectionStatus] = useState("NOT_SET");
    const [resolvedData, setresolvedData] = useState("");
    const result = process.env.BACKEND_URL
    console.log(result)

    const [resolved, setresolvedStatus] = useState();

    useEffect(() => {
        console.log("inside the useEffect")
        console.log(resolved)
        console.log(collectionStatus)
        console.log(resolvedData)
      
    if(collectionStatus == "NOT_SET"){
      fetch("https://tv0t7pabab.execute-api.eu-central-1.amazonaws.com/dev/retrievestatus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify({"email":user.email})
      })
        .then((res) => res.json())
        .then((data) => {
            setcollectionStatus(data.collectionsStatus)
            setresolvedStatus(data.resolvedStatus)
            setresolvedData(data.resolvedData)}
            );
    }


        
        console.log(collectionStatus)
        if(collectionStatus == "NOT_FOUND"){
        console.log("new user")
        fetch("https://tv0t7pabab.execute-api.eu-central-1.amazonaws.com/dev/createstatus", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: user.email, collectionsStatus:"NEW_LOGIN" }),
        })
          .then((res) => res.json())
          .then((data) => {
            setcollectionStatus(data.collectionsStatus)
            setresolvedStatus(data.resolvedStatus)
            setresolvedData(data.resolvedData)}
            );
        
        }
      
    

    },[collectionStatus]);

    return (
        
        
        <Container fluid>
   
        
    <Row >
    <Col xs={12} sm={10} lg={4} md={4}></Col>
    <Col xs={12} sm={10} lg={4} md={6}>
    <Card.Title>Pending Bill on a sample product</Card.Title>
    </Col>
  </Row>
  <Row>
  <Col xs={12} sm={10} lg={4} md={4}></Col>
  <Col xs={12} sm={10} lg={4} md={6}>
  <Card.Text>
      Hello {user.name} Our records show that you just missed a paymemt of $100 on a sample product.
      </Card.Text>
      </Col>
  </Row>
  <Row>
  <Col xs={12} sm={10} lg={4} md={4}></Col>
  <Col xs={12} sm={10} lg={4} md={6}>
  {(resolved == null) ? <Row><Col></Col><Col><Loader/></Col></Row>: null}
      {(collectionStatus!="NOT_FOUND" && collectionStatus!="NOT_SET" && resolved ==false )  ? <Options status={collectionStatus}/> : null }
      {(resolved == true) ? <ResolvedRouter status={collectionStatus} resolvedData={resolvedData}/> : null}
      </Col>
  </Row>
  <Row>
  <Col xs={4} sm={9} lg={5} md={5}></Col>
  <Col xs={5} sm={4} lg={4} md={4}>
    <Card.Text><BigTranscript placement="top" /></Card.Text>
      <PushToTalkButton  captureKey=" "/>
      <ErrorPanel placement="bottom"/></Col>
  <Col xs={4} sm={4} lg={4} md={4}></Col>
    
  </Row>
  
</Container>

       
    ); 

}