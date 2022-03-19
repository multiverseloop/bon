import React from "react";
import { Navbar,Button, Nav, Container, Row,Col } from 'react-bootstrap';
const About = () => {
  

  return (
  
  <Container fluid>
    <Row>
    <Col xs={12} sm={12} lg={6} md={6}>
    <h1>Customer Friendly Collections </h1> 

    <p> Have you ever wondered the experience customers are provided during onboarding with a Bank or Utility doesn't reflect after onboarding? 

During the initial onboarding, customers are provided with excellent customer service and given various services choices. 


But as soon as they get into the debt cycle, Most companies tend to push customers towards a dead-end and try to force them to choose from options that would never work.   </p>
     <p> 
The collections businesses need to evolve in customer service and digital engagement. I feel that companies need to improve to offer flexible and dynamic options to the end customer. No one set fits for all. We need a diverse group of options or a constantly evolving set based on the debt and the customer profile. 
</p>

<p>With all that said, I started this journey to show how business and technology can complement each other. I have been a technology enthusiast who not just loved the buzz words but wanted to get the hands dirty. Hence I embarked on this journey to explore the various technical capabilities in the current world to provide better customer service during the debt cycle.</p>
<p>Psst:- As of today(19th March), I know the website design is not great. But I am initially trying to make the POC work. 

The current POC goal is to have a simple login page that takes customers to a landing page with pre-defined options. To provide flexibility on the options, I am working on NLU based functionality. 

What if the customer can say or type something that is not covered in the options? For example, " Hey, I cannot pay because I lost my job this month", and the page magically understands the situation and provides a payment holiday? Brainstorming is in progress...</p>
    
<h3>Thanks for visiting. Stay safe</h3> 
    </Col>
    <Col xs={12} sm={12} lg={6} md={6}>
    <div className="image-home"></div>
    </Col>
    
  </Row>
  
 
  

  </Container>
   
  
  );
};

export default About;