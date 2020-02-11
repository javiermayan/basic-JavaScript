function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = "prueba"; 
  console.log(myVar); 
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log(myVar); //outputs: "ReferenceError: myVar is not defined"

// Now remove the console log line to pass the test
