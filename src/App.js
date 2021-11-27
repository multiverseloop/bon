import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './home/components/Home'
import Paynow from './collections/Paynow';
import Collections from './collections/components/Collections';
import ConfirmPayment from './resolutions/components/ConfirmPayment';
import Promise from './resolutions/components/PTP';




function App() {

  return (
   <div>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/collections" element={<Collections />} />
      <Route path="/paynow" element={<Paynow />} />
      <Route path="/confirmpayment" element={<ConfirmPayment />} />
      <Route path="/promise" element={<Promise />} />
    </Routes>
  </BrowserRouter>
   </div>
  );
}

export default App;
