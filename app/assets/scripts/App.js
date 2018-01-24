var $ = require('jquery');

// var Person = require('./modules/Person'); // ES5 way
import Person from './modules/Person';

// alert("This is a test for our webpack automation!");
// alert("Testing 123");
// alert("ABC 321");

class Adult extends Person {
  payTaxes() {
    console.log(this.name + " now owes $0 in taxes.");
  }
}

var john = new Person("John Doe", "blue");
john.greet();

// var jane = new Adult("Jane Smith", "green");
var jane = new Adult("Jane Smith", "orange");
jane.greet();
jane.payTaxes();


$("h1").css('color','green');