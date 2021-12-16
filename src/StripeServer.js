// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require('stripe')('sk_test_51JzgHuIeuSsnNXhOTSFF7RoN7JVwJDaboabA79ev0i9dg5nyoZ0Ncslf86sRPcPaardNZml7mtA8UzobLCeIOvZH00XVM91cJZ');

const paymentIntent = await stripe.paymentIntents.create({
  amount: 100,
  currency: 'eur',
  automatic_payment_methods: {enabled: true},
});