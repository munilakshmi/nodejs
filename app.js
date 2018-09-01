var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname, 'app')));
app.use('/', express.static(path.join(__dirname, '/')))
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var connection = mongoose.createConnection('mongodb://localhost:27017/test');

var newSchema = new Schema({
    type:String,
    description:String,
    quantity:Number,
    rate:Number,
    amount:Number
  });
  var vinodh = connection.model('goods', newSchema,'goods');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.get("/",function (req, res){
    console.log("ssssssssssssssssssssssssssss")
    console.log("__dirname",__dirname);
    res.sendFile( __dirname + "/" +"index.html" );
})
app.post('/save', function (req, res) {
    //console.log("__dirname",__dirname);
    console.log("rssss",req.body);
var mulvalue = req.body.quantity * req.body.rate ;
        var chris = new vinodh({
            type:req.body.type,
            description:req.body.description,
            quantity:req.body.quantity,
            rate:req.body.rate,
            amount:mulvalue
             });

    
   
            chris.save(function (err,response) {
                if (err) {          
                     console.log("error", err);
                };
                console.log("ressss----------------",response);
                console.log('User saved successfully!');
                res.send('User saved successfully!');
       });
       
})
app.get('/getlist', function (req, res) {
    console.log("__dirname",__dirname);
    vinodh.find({},{},function(err,data){
       console.log("min",data);
       res.send(data);
    });
    });

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
   res.send(response);
   //res.end(JSON.stringify(response));
})



var server = app.listen(8000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)

})


