var express = require('express')
var router = express.Router();
router.use(express.static("public"));
router.use(express.json());

console.log('in TwilioEmail.js')


const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


router.post('/', async (req, res) => {
  console.log(req.body)
const msg = {
  to: req.body.email, // Change to your recipient
  from: 'test@collections.sayshank.com', // Change to your verified sender
  templateId:req.body.templateId
  
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