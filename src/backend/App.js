const express = require('express')
var app = express();
const StripeApp = require('./StripeApp');
const TwilioEmail = require('./TwilioEmail');
const retreiveStatus = require('./CollectionsStatus/RetreiveStatus');
const createStatus = require('./CollectionsStatus/CreateStatus');
const updateStatus = require('./CollectionsStatus/UpdateStatus')



console.log('in App.js')

app.use('/create-payment-intent', StripeApp);
app.use('/send-email', TwilioEmail);
app.use('/retreiveStatus', retreiveStatus);
app.use('/createStatus', createStatus);
app.use('/updateStatus', updateStatus);

const port = process.env.PORT || 4242;
app.listen(port,() => console.log(`Listening on ${port}`));
