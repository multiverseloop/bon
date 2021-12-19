import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './home/components/Home'
import PayNow from './resolutions/components/PayNow';
import Collections from './collections/components/Collections';
import ConfirmPayment from './resolutions/components/ConfirmPayment';
import Promise from './resolutions/components/PTP';
import PaymentOptions from './payments/components/PaymentOptions';
import ConfirmedPayment from './finalconfirmation/ConfirmedPayment';
import { useAuth0 } from "@auth0/auth0-react";



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
      <Route path="/promise" element={<Promise />} />
    </Routes>
  </BrowserRouter>
   </div>
  );
}

export default App;
