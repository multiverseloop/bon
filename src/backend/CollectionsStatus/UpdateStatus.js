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

  const Key = {
   
    email: req.body.email
  }

  var params = {
      TableName:table,
      Key:Key,
      UpdateExpression: "set collectionsStatus = :c , resolvedStatus = :r, resolvedData = :d", 
      ExpressionAttributeValues:{
        ":c" : req.body.collectionsStatus,
        ":r" : req.body.resolvedStatus,
        ":d"  : req.body.resolvedData
      }
  }

  docClient.update(params, function(err, data) {
    if (err) {
        console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
        res.send({
                    status:"ERROR"
        });
    } else {
        console.log("Updated the status :", JSON.stringify(data, null, 2));
        res.send({
          status:"OK"
        });
    }
});

});

module.exports=router