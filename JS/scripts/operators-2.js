/********** JS Operators Part II ***********/

var x = 10;
var y = "10";

// Comparison Operators
console.log("Equal", x == y);
console.log("Equal & Identical", x === y);

console.log("Not Equal", x != y); // Same as ! (x == y)
console.log("Not Equal OR Not Identical", x !== y); // Same a ! (x === y)

console.log("Greater than", x > y);
console.log("Greater than or Equal to", x >= y);

console.log("Less than", x < y);
console.log("Less than or Equal to", x <= y);

// Logical Operators
console.log("AND (&&) operator", x == y && x > y);
console.log("OR (||) operator", x == y || x > y);
