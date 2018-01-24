// // ES5
// function Person(fullName, favColor) {
//   this.name = fullName;
//   this.favoriteColor = favColor;
//   this.greet = function() {
//     console.log("Hello, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
//   }
// }

// ES 6
class Person {
  constructor(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
  }
  
  greet() {
    console.log("Hi there, my name is " + this.name + " and my favorite color is " + this.favoriteColor + ".");
  }
}

// module.exports = Person; //ES 5 way
export default Person;