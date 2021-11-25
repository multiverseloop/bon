import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';


class Mainnav extends React.Component {
    
    render() {
        return (
<>
  <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                    <Icon.Bank className="d-inline-block align-top" width="30"
          height="30"/>{' '}
                    ABC Bank Demo
                    </Navbar.Brand>
                </Container>
            </Navbar></>
    
        
        )}
}
 
export default Mainnav;