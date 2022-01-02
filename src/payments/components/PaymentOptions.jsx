import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, onReady } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import "../../App.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with a fake API key.
const stripePromise = loadStripe("pk_test_51JzgHuIeuSsnNXhOhfbKnYmhGtCCJhgtnQf6QnH7eICIKhzKzmLKz8zJtC82Y9G3JL0QWejNAzMlOpccQzmf2VK400IVDnrgMW");

export default function App() {
  const [clientSecret, setClientSecret] = useState("");
  const [IsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://tv0t7pabab.execute-api.eu-central-1.amazonaws.com/dev/createpaymentintent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: 100 }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'flat'
  };
  const options = {
    clientSecret,
    appearance,
  };

  console.log(options)

  return (
    <div className="App">
      {!IsLoading && (<h1>is loading</h1>)}
      {clientSecret && (
        <Elements options={options} stripe={stripePromise} onReady={() => setIsLoading(false)} >
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}