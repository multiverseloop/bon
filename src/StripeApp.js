const express = require("express");
const app = express();
// This is a sample test API key.
const stripe = require("stripe")('sk_test_51JzgHuIeuSsnNXhOTSFF7RoN7JVwJDaboabA79ev0i9dg5nyoZ0Ncslf86sRPcPaardNZml7mtA8UzobLCeIOvZH00XVM91cJZ');

app.use(express.static("public"));
app.use(express.json());

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

app.post("/create-payment-intent", async (req, res) => {
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


const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: 'bulususashank@gmail.com', // Change to your recipient
  from: 'test@collections.sayshank.com', // Change to your verified sender
  templateId:'d-674276721c984cc28740b07544607e03'
  
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })

app.listen(4242, () => console.log("Node server listening on port 4242!"));