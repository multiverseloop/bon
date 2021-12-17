var express = require('express')
var router = express.Router();
router.use(express.static("public"));
router.use(express.json());

console.log('in TwilioEmail.js')


const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

router.post('/', async (req, res) => {
const msg = {
  to: 'sashankbulusu@fico.com', // Change to your recipient
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
});

module.exports=router