var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser());

var monte = {name: 'monte', id: 1, age: 100, gender: 'male'}
var paul = {name: 'paul', id: 2, age: 101, gender: 'male'}
var winnie ={name: 'pooh', id: 3, age: 100, gender: 'male'}

var bears = [monte, paul, winnie];

//create our first API new point
 //read a bunch of stuff

//localhost: 3000/api/bear/45432
app.get('/api/bear/:id', function (req, res) {

	var thisbear = " ";
	var id = req.params.id;

	bears.forEach(function(lookingbear) {
		if (lookingbear.id.toString() === id.toString()) {

			thisbear = lookingbear //have to define lookingbear
		}

	});
	
	res.json(thisbear);

});

app.delete('/api/bear/:id', function (req, res) {
	var id = req.params.id;
	
	var thisbear = '';
	var index = '';

	console.log(id);

	bears.forEach(function(deletebear) {

		if (deletebear.id.toString() === id.toString()) {

			thisbear = deletebear;
			index = bears.indexOf(thisbear);

		}
		
	})
	res.json(bears.splice(index, 1))

}) //need to find that index and use splice

app.post('/api/bear',function(req,res) {
	var newBear = {};

	console.log('about to create a new bear')
	
	newBear.name = req.body.name;
	newBear.age = req.body.age;
	newBear.gender = req.body.gender;
	newBear.id = new Date().getTime();

	console.log('pushing: ', newBear);

	bears.push(newBear);

	res.json(bears);
});
//


app.listen(3000, function(){
	console.log('the server is up and running..')	
}); //fire up a new express server that is running on the local host/port 3000