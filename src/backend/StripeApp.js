var express = require('express')
var router = express.Router();
router.use(express.static("public"));
router.use(express.json());

console.log('in StripeApp.js')


const stripe = require("stripe")('sk_test_51JzgHuIeuSsnNXhOTSFF7RoN7JVwJDaboabA79ev0i9dg5nyoZ0Ncslf86sRPcPaardNZml7mtA8UzobLCeIOvZH00XVM91cJZ');

const calculateOrderAmount = (items) => {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 1400;
  };
  
  router.post('/', async (req, res) => {
    const { items } = req.body;
  
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: "eur",
      automatic_payment_methods: {
        enabled: true,
      },
    });
  
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  });
  
  module.exports=router