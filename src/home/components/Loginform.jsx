import React, { Component, useState } from 'react';
import { Form , Button} from 'react-bootstrap';
import Collections from '../../collections/components/Collections';
import { Container, Row, Col } from 'react-bootstrap';
import { Navigate , useNavigate } from "react-router-dom";

 
   export default function Loginform (props) {
    const [fullName, setfullName] = useState("sas");
    const [phone, setPhone] = useState("");
    const [email, setemail] = useState("");
    const navigate = useNavigate();

    console.log(props)

    function HandleSubmit(event) {
      event.preventDefault();
     
      
      navigate("../collections", { replace: true, state: {fullName:fullName,phone:phone,email:email} });
    
       }
        return (
        
        <div>
        <div>
        <Row>
            <Col><h1>Before you get started...</h1></Col>
        </Row>
        <Row>
        <Form onSubmit={HandleSubmit}>
        <Form.Group className="mb-3" controlId="formFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Full Name" onChange={e => setfullName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={e => setemail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPhone" >
          <Form.Label>Mobile  Number</Form.Label>
          <Form.Control type="tel" placeholder="Enter Mobile Number" onChange={e => setPhone(e.target.value)} />
        </Form.Group>
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
      </Row>
      </div>

      </div>
      );
    
}
 