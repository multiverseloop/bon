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



  const Key = {
    email: req.body.email // Change to your recipient       
  }

  var params = {
      TableName:table,
      Key:Key
  }

  docClient.get(params, function(err, data) {
    if (err) {
        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        res.send({
                    collectionsStatus:"NOT_FOUND",
                    resolvedStatus:false
        });
    } else {
        console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
        console.log(data)
        if(data.Item == undefined){
            console.log("NOT FOUND")

            res.send({
                
                collectionsStatus:"NOT_FOUND",
                resolvedStatus:false,
                resolvedData:""
            });
        }
        else{
            console.log("Found")
            res.send({
                collectionsStatus:data.Item.collectionsStatus,
                resolvedStatus:data.Item.resolvedStatus,
                resolvedData:data.Item.resolvedData
            });
        }
    }
});

});

module.exports=router