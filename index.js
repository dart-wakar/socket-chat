var express = require('express');
var app = express();
var http = require('http').createServer(app);

app.get('/',function(req,res) {
    res.send('<h1>Hello Bitch!</h1>');
});

http.listen(3000,function(){
    console.log('Listening on port 3000');
});