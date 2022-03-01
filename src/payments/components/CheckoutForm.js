import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import { Container, Row, Col , Card,Button,Carousel} from 'react-bootstrap';

import Loader from "../../shared/components/Loader";
import { Navigate } from "react-router-dom";


export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [option, setOption] = useState("");

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [widgetLoading, setWidgetLoading] = useState(true);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitting payment")

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000/paymentsuccess",
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occured.");
    }

    setIsLoading(false);
  };

  return (
    <div>
       {option==="collections" && (<Navigate to="/collections" replace={true} />)} 
      <Row>
    <form id="payment-form" >
      {widgetLoading && (<Loader />)}
      <PaymentElement id="payment-element" onReady={() => setWidgetLoading(false)} />
      <br/>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
    </Row>
    <Row>
    <Col xs={2} sm={6} lg={3} md={2}></Col>
      <Col xs={3} sm={6} lg={4} md={4}> <Button   variant="danger" onClick={e => setOption("collections")} >Back</Button></Col>
      <Col xs={4} sm={6} lg={4} md={4}><Button   variant="primary" disabled={isLoading || !stripe || !elements} onClick={handleSubmit} >Pay now</Button>
      </Col>
      
    </Row>
    </div>
  );
}