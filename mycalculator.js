//IMPORT THE OTHER FILE

var Calculator = require('./calculator')


//CREATE A NEW CALCULATOR

var myCalculator = new Calculator();


//TEST THE SUM FUNCTION	

console.log(myCalculator.sum (5,4));
console.log(myCalculator.subtract (5,4));