var $ = require('jquery');
var Person = require('./modules/Person');

// alert("This is a test for our webpack automation!");
// alert("Testing 123");
alert("ABC 321");

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Smith", "green");
jane.greet();


$("h1").css('color','green');