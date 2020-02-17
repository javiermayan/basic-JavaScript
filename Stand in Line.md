function nextInLine(arr, item) {
  // Your code here
	arr.push(item);	
	var oneDown = arr.shift();
	return oneDown;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine([2], 1)); // outputs 2
console.log("After: " + JSON.stringify(testArr));

Lógica: 
push agrega un número al final
shift remueve el primer elemento de la matriz y se asigna su valor a una variable.
