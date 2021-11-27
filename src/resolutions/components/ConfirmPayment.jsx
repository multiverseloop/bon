import React, { Component } from 'react';
import { Container, Row, Col , Card,Button,Carousel} from 'react-bootstrap';
import Form from "react-bootstrap/Form"
import { Navigate } from "react-router-dom";
import CollectionsCarousel from '../../shared/components/carousel';



class ConfirmPayment extends React.Component {
    constructor(props){
        super(props);
        // this.handleSubmit=this.handleSubmit.bind(this);
        this.state = {option:''}
        console.log('I am in props')
      }

    render() { 
        return (
            <div>
            <Container>
            {this.state.option==="collections" && (<Navigate to="/collections" replace={true} />)} 
            <Row><br/></Row>
            <Row>
              <Col>
              
              </Col>
            </Row>
            <Row>
              
              <Col>
                
                    <Card style={{ width: '28rem' }}>
                    <CollectionsCarousel/>
            
            <Card.Body>
            <Card.Title>Due on your Credit Card ending 1234</Card.Title>
              <Card.Text>
              If you have already paid please let us know when and we can store it in our records. 
              </Card.Text>
              <Card.Text>
              Please select the date and click on submit. 
              <Form.Control type="date" name='date_of_birth' />
              </Card.Text>
              <Row>
              <Col><Button variant="danger" size="lg" onClick={e => this.setState({ option: "collections" })}>Back</Button></Col>
              <Col><Button variant="primary" size="lg" disabled>Submit</Button></Col>
          </Row>
            </Card.Body>
          </Card>
          </Col>
          </Row>
          
            
          
        </Container>
                </div>);
    }
}
 
export default ConfirmPayment;