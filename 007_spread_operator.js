// SPREAD OPERATOR
// 🔗 https://scrimba.com/learn/introtoes6/spread-operator-cPkavntv
// 🔗 https://scrimba.com/learn/introtoes6/spread-operator-challenge-cp3W77UV

//    a) Use the spread operator to create a copy of the `luke` object, and use this to add a new attribute
// called `droids` that is an array containing the strings `R2-D2` and `C-3PO`.
//    b) Store this new copy in a const variable called `newLuke`
//    b) Log out both the `luke` and `newLuke` values to the console.
//    c) Use the spread operator to create a copy of the `rebelScum` array
//    d) Add the `newLuke` object to the end of this new copy.
//    e) Store this new copy in a const variable called `newRebelScum`.
//    d) Log out both the original `rebelScum` array and the `newRebelScum` arrays to the console.
//    e) BONUS: can you put these two arrays into a new object literal, and log this out to the console?

const rebelScum = [
  {
    name: "Han Solo",
    occupation: "Smuggler",
  },
  {
    name: "Leia Organa",
    occupation: "Princess",
  },
];

const luke = {
  name: "Luke Skywalker",
  occupation: "Apprentice Jedi",
};
