import React, { Component } from 'react';
import { Container, Row, Col , Card,Button,Carousel} from 'react-bootstrap';
class options extends React.Component {
    render() { 
        return (
    <Container>
      <Row>
      <Col>
      <Button variant="primary">Pay Now</Button>
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
      <Button variant="primary">Already Paid</Button>
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
      <Button variant="primary">Promise to Pay</Button>
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