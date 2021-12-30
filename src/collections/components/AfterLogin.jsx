import React, { useState, useEffect, Component } from 'react';
import Header from '../../shared/components/Header';
import { Container, Row, Col , Card,Button,Carousel, Spinner} from 'react-bootstrap';
import Options from './Options';
import CollectionsCarousel from '../../shared/components/carousel';
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "../../shared/components/Loader";
import ResolvedRouter from '../../alreadyResolved/components/resolvedRouter';


export default function Afterlogin () {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const { logout } = useAuth0();
    const [collectionStatus, setcollectionStatus] = useState("NOT_SET");
    const [resolvedData, setresolvedData] = useState("");

    const [resolved, setresolvedStatus] = useState(false);

    useEffect(() => {
        console.log("inside the useEffect")
      
    if(collectionStatus == "NOT_SET"){
      fetch("/retreiveStatus", {
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
        fetch("/createStatus", {
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
        <div>
          <Container><Row><br/></Row><Row><Col></Col></Row>
    <Row><Col>
    <Card>
    <CollectionsCarousel/>
    <Card.Body>
    <Card.Title>Due on your Credit Card ending 1234</Card.Title>
      <Card.Text>
      Hello {user.name} Our records show that you just missed a paymemt of $100 on your credit card ending 1234.
      </Card.Text>
      {(collectionStatus!="NOT_FOUND" && collectionStatus!="NOT_SET" && resolved==false )  ? <Options status={collectionStatus}/> : null}
      {(resolved == true) ? <ResolvedRouter status={collectionStatus} resolvedData={resolvedData}/> : null}
    <Button variant="danger" size="lg" onClick={() => logout({ returnTo: window.location.origin })}>logout</Button>
    </Card.Body>
  </Card>
  </Col>
  </Row>
    
  
</Container>
        </div>
    );

}