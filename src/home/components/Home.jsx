import React, { Component } from 'react';
import Header from '../../shared/components/Header';
import { Container, Row, Col } from 'react-bootstrap';
import Loginform from './Loginform';



class Home extends React.Component {
    render() { 
        return (
        <div>
           <Header/>
           <Container>
  
  <Row>
    <Col><Loginform/></Col>
  </Row>
</Container>
        </div>);
    }
}
 
export default Home;