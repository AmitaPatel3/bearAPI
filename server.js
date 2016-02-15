var express = require('express');
var app = express();

//create our first API new point
app.get('/api/bears', function (req, res) {
	res.json({title: 'does it work?', body: 'I hope so..'})
}); //read a bunch of stuff



app.listen(3000, function(){
	console.log('the server is up and running..')	
}); //fire up a new express server that is running on the local host/port 3000