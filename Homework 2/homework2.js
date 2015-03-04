 //Jake Bourgoin
 //Homework 2
 
 
var express = require('express')
var app = express()


// This accepts a GET
app.all('/gets', function (req, res){
if(req.method == "GET")
  res.send(req.query);
 else
   res.send('Not a valid GET request');
});

// This accepts a POST
app.all('/posts', function (req, res){
if(req.method == "POST")
  res.send(req.query);
 else
   res.send('Not a valid POST request');
});

// This accepts a PUT
app.all('/puts', function (req, res){
if(req.method == "PUT")
  res.send(req.query);
 else
   res.send('Not a valid PUT request');
});

// This accepts a DELETE
app.all('/deletes', function (req, res){
if(req.method == "DELETE")
  res.send(req.query);
 else
   res.send('Not a valid DELETE request');
});

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})