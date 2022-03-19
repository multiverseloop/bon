import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Navbar,Button, Nav, Container, Row,Col } from 'react-bootstrap';
import Home from './home/components/Home'
import PayNow from './resolutions/components/PayNow';
import Collections from './collections/components/Collections';
import ConfirmPayment from './resolutions/components/ConfirmPayment';
import Promise from './resolutions/components/PTP';
import Help from './resolutions/components/Help';
import PaymentOptions from './payments/components/PaymentOptions';
import ConfirmedPayment from './finalconfirmation/ConfirmedPayment';
import PromisetoPay from './finalconfirmation/PromisetoPay';
import About from './shared/components/About';
import { useAuth0 } from "@auth0/auth0-react";
import resolvedCP from './alreadyResolved/components/resolvedCP'
import PromisePTP from './alreadyResolved/components/promisePTP'
import PaymentSuccess from './finalconfirmation/PaymentSuccess'
import VoiceOptions from './collections/components/VoiceOptions';




function App() {

  const { isLoading, error } = useAuth0();
  const { loginWithRedirect, logout} = useAuth0();
  const { user, isAuthenticated } = useAuth0();
  
  return (
   <div>
     
     <Navbar bg="light" variant="light">
     <Container fluid >
       <Col>
     <Navbar.Brand href="/">
      Bank of Naboo</Navbar.Brand>
     
      
      
    
     </Col>
     <Col></Col>
     <Col><Nav.Link href="about">About</Nav.Link></Col>
     {isAuthenticated && <Col><Nav.Link href="collections">My Account</Nav.Link></Col> }
     <Col> </Col>
     <Col></Col>
     <Col></Col>
    <Col>
    {isAuthenticated && 
      <Button variant="outline-danger"  onClick={() => logout({ returnTo: window.location.origin })}>Logout</Button>
    }
     {!isAuthenticated && 
      <Button variant="outline-primary"  onClick={() => loginWithRedirect()}>Login</Button>
    }
     </Col>
     </Container>
 </Navbar>
  <BrowserRouter>
  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/paynow" element={<PayNow />} />
      <Route path="/confirmpayment" element={<ConfirmPayment />} />
      <Route path="/voiceoptions" element={<VoiceOptions />} />
      <Route path="/confirmedpaymentfinal" element={<ConfirmedPayment />} />
      <Route path="/promisetopay" element={<PromisetoPay />} />
      <Route path="/resolvedCP" element={<resolvedCP />} />
      <Route path="/promisePTP" element={<PromisePTP />} />
      <Route path="/promise" element={<Promise />} />
      <Route path="/help" element={<Help />} />
      <Route path="/about" element={<About />} />
      <Route path="/paymentsuccess" element={<PaymentSuccess />} />
      <Route path="/paymentsuccess" element={<PaymentSuccess />} />
    </Routes>
   
  </BrowserRouter>
   </div>
  );
}

export default App;
