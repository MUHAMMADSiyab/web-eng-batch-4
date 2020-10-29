var users = ["John", "Sara", "Daniel", "Brad"];

// add item 
users.push("Smith"); // end
users.unshift("Kim"); // start

// remove item 
users.pop(); // end
users.shift(); // start

// slicing/selecting items
// console.log( users.slice(0, 3) );

// replacing/deleting items
users.splice(0, 1, "Tim", "Joe")

// concat
var concatenated = users.concat(["A", "B", "C"])
// console.log( concatenated );

// join
var joined = users.join("|")

// toString
var stringified = users.toString()

console.log( stringified );