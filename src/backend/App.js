const express = require('express')
var app = express();
const StripeApp = require('./StripeApp');
const TwilioEmail = require('./TwilioEmail');


console.log('in App.js')

app.use('/create-payment-intent', StripeApp);
app.use('/send-email', TwilioEmail);

const port = process.env.PORT || 4242;
app.listen(port,() => console.log(`Listening on ${port}`));
