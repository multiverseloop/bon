import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import navbarlogo from '../../assets/Navbarlogo.jpeg'


class Header extends React.Component {
    
    render() {
        return (
<>
  <Navbar className="color-nav" variant="light" >
                <Container>
                    <Navbar.Brand className="navbarbrand-class">Bank of Naboo Demo
                    </Navbar.Brand>
                </Container>
            </Navbar></>
    
        
        )}
}
 
export default Header;