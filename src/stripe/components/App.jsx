import React, { useState, useEffect } from "react";
import { PaymentElement, Elements, CardElement } from "@stripe/react-stripe-js";
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51JzgHuIeuSsnNXhOhfbKnYmhGtCCJhgtnQf6QnH7eICIKhzKzmLKz8zJtC82Y9G3JL0QWejNAzMlOpccQzmf2VK400IVDnrgMW');
  

class App extends React.Component {
   
    render() { 
        return(
             <Elements stripe={stripePromise}> <CardElement /></Elements>
             
             );
    }
}
 
export default App;

