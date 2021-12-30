var express = require('express')
var router = express.Router();
router.use(express.static("public"));
router.use(express.json());

var AWS = require("aws-sdk");

AWS.config.update({
    region: "eu-central-1",
    endpoint: "https://dynamodb.eu-central-1.amazonaws.com"
  });

  var docClient = new AWS.DynamoDB.DocumentClient();

  var table = "collectionsDetails";
  

router.post('/', async (req, res) => {

  console.log(req.body);

  const Item = {
   
    email: req.body.email,
    collectionsStatus:req.body.collectionsStatus,
    resolvedStatus:false // Change to your recipient       

  }

  var params = {
      TableName:table,
      Item:Item
  }

  docClient.put(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        res.send({
                    collectionsStatus:"ERROR"
        });
    } else {
        console.log("New login added:", JSON.stringify(data, null, 2));
        res.send({
          collectionsStatus:"NEW_LOGIN",
          resolvedStatus:false
        });
    }
});

});

module.exports=router