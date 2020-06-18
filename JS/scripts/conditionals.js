/**
 * JavaScript Conditionals
 */

var x = 2;
var y = 5;

// If-else
if (x > y) {
  //   alert("X is greater than Y");
} else if (x === y) {
  //   alert("X is equal to Y");
} else if (x < 1) {
  //   alert("X is less than 1");
} else {
  //   alert("X is X");
}

// Switch
switch (true) {
  case x === y:
    console.log("X is equal to Y");
    break;

  case x < y:
    console.log("X is less than Y");
    break;

  default:
    console.log("Number is Number");

    break;
}
