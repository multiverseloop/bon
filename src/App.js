import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './home/components/Home'
import PayNow from './resolutions/components/PayNow';
import Collections from './collections/components/Collections';
import ConfirmPayment from './resolutions/components/ConfirmPayment';
import Promise from './resolutions/components/PTP';
import Help from './resolutions/components/Help';
import PaymentOptions from './payments/components/PaymentOptions';
import ConfirmedPayment from './finalconfirmation/ConfirmedPayment';
import PromisetoPay from './finalconfirmation/PromisetoPay';
import { useAuth0 } from "@auth0/auth0-react";
import resolvedCP from './alreadyResolved/components/resolvedCP'
import PromisePTP from './alreadyResolved/components/promisePTP'



function App() {

  const { isLoading, error } = useAuth0();

  return (
   <div>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/paynow" element={<PayNow />} />
      <Route path="/confirmpayment" element={<ConfirmPayment />} />
      <Route path="/confirmedpaymentfinal" element={<ConfirmedPayment />} />
      <Route path="/promisetopay" element={<PromisetoPay />} />
      <Route path="/resolvedCP" element={<resolvedCP />} />
      <Route path="/promisePTP" element={<PromisePTP />} />
      <Route path="/promise" element={<Promise />} />
      <Route path="/help" element={<Help />} />
    </Routes>
  </BrowserRouter>
   </div>
  );
}

export default App;
