import React, {useState, Component } from 'react';
import { Container, Row, Col , Card,Button,Carousel} from 'react-bootstrap';
import Form from "react-bootstrap/Form"
import { Navigate } from "react-router-dom";
import CollectionsCarousel from '../../shared/components/carousel';
import dateFormat, { masks } from "dateformat";



export default function PTP() {
  const [option, setOption] = useState("");
  const [PTPDate,setPTPDate] = useState("")
  const [disabled,setDisabled] = useState(true)
  const originaltoday = new Date();
  const today = dateFormat(originaltoday,"yyyy-mm-dd")
  const originalmaxDate = new Date();
  originalmaxDate.setDate(originalmaxDate.getDate() + 10)
  const maxDate = dateFormat(originalmaxDate,"yyyy-mm-dd")
  

  console.log(today)
  console.log(maxDate)

  const handleChange = (event) => {
    setPTPDate(event.target.value)
    setDisabled(false)
  }


        return (
          <Container fluid>
            
            {option==="collections" && (<Navigate to="/collections" replace={true} />)} 
            {option==="ptp" && (<Navigate to="/promisetopay" replace={true} state={PTPDate} />)} 
            
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
               Please let us know by when and we can store it in our records. 
              </Card.Text>
              <Card.Text>
              Please select the date and click on submit. 
              <Form.Control type="date" name="date_of_birth"  onChange={handleChange} min={today} max={maxDate} />
              </Card.Text>
              <br/>
              </Col>
          </Row>

              <Row>
              <Col xs={1} sm={6} lg={4} md={4}></Col>
              <Col xs={4} sm={6} lg={1} md={2}><Button variant="danger"  onClick={e => setOption("collections")}>Back</Button></Col>
              <Col xs={4} sm={6} lg={1} md={2}><Button variant="primary"  onClick={e => setOption("ptp")} disabled={disabled}>Submit</Button></Col>
          </Row>
            
         
          
            
          
        
                </Container>);
    }

 
