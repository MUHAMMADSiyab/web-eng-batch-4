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

  console.log(number + " x " + i + " =", product + "(" + product ** 2 + ")");
}
