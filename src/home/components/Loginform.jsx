import React, { Component } from 'react';
import { Form , Button} from 'react-bootstrap';
import Collections from '../../collections/components/Collections';
import { Container, Row, Col } from 'react-bootstrap';


class Loginform extends React.Component {
  constructor(props){
    super(props);
    // this.handleSubmit=this.handleSubmit.bind(this);
    this.state = {fullName:'',email:'',showCollections:false}
    console.log('I am in props')
  }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   this.setState({showCollections: true});
  // }
  
    render() { 
      console.log(this.props);
      console.log(this.state);
        return (
        <div>
        {this.state.showCollections
        ?<Collections name={this.state.fullName}/>

        :
        <div>
        <Row>
            <Col><h1>Before you get started...</h1></Col>
        </Row>
        <Row>
        <Form>
        <Form.Group className="mb-3" controlId="formFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Full Name" onChange={e => this.setState({ fullName: e.target.value })} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={e => this.setState({ email: e.target.value })} />
        </Form.Group>
        <Button variant="dark" type="submit" onClick={e => this.setState({ showCollections: true })}>
          Submit
        </Button>
      </Form>
      </Row>
      </div>
        }

      </div>
      );
    }
}
 
export default Loginform;