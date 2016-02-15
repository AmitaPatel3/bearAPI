var express = require('express');
var app = express();

var monte = {name: 'monte', id: 1, age: 100, gender: 'male'}
var paul = {name: 'paul', id: 2, age: 101, gender: 'male'}
var winnie ={name: 'pooh', id: 3, age: 100, gender: 'male'}

var bears = [monte, paul, winnie];

//create our first API new point
app.get('/api/bears', function (req, res) {
	res.json(bears)	
}); //read a bunch of stuff



app.listen(3000, function(){
	console.log('the server is up and running..')	
}); //fire up a new express server that is running on the local host/port 3000