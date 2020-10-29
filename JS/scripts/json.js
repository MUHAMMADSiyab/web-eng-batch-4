var users = [
  {
    name: "John",
    email: "john@gmail.com",
  },

  {
    name: "Sara",
    email: "sara@gmail.com",
  },

  {
    name: "Kim",
    email: "kim@gmail.com",
  },
  {
    name: "Brad",
    email: "brad@gmail.com",
  },
];

var stringified = JSON.stringify(users);

console.log( JSON.parse(stringified) );
