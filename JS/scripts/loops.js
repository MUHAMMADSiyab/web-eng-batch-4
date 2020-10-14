/*********** JavaScript Loops ****************/

// `for` Loop

// for (variable declaration, condition, increment) {
// Code to execute
// }

for (var i = 0; i < 10; i++) {
  //  The `break` statement breaks the loop
  //   if (i === 5) {
  //     break;
  //   }

  //   The `continue` statement skips and continue to the next iterator
  if (i === 7) {
    continue;
  }
  //   console.log("The value of i is", i);
}

var number = 2;

for (var i = 1; i < 11; i++) {
  var product = number * i;

  // console.log(number + " x " + i + " =", product + "(" + product ** 2 + ")");
}

// 2. While loop
var i = 0;

while (i < 20) {
  i++;
  // console.log(i);
}

// 3. do-while loop
var index = 0;
do {
  index++;
  // console.log(index);
} while (index < -1);

/**
 * Practical Example
 */
var input = prompt("Enter a number");

var n = 0;

while (n < 10) {
  n++;
  var product = input * n;
  var output = input + " x " + n + " = " + product;

  console.log(output);
}
