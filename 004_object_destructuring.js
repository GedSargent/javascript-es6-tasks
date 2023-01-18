// OBJECT DESTRUCTURING
// 🔗 https://scrimba.com/learn/introtoes6/destructuring-objects-caZ6yQC9

//    a) Take a look at the `customer` const below. Destructure the `customerName`, `occupation`, `age` and
// `starSystem` values from it.
//    b) Interpolate these values into the string: 'The customer named ... is employed as a ... and is ... years
// old. He intends to destroy the ... star system a week on Tuesday.'
//    c) Save this new string to a `const` called `customerDetails` and log it out to the console.

const customer = {
  customerName: "Darth Vader",
  occupation: "Sith Lord",
  age: 47,
  location: {
    starSystem: "Alderaan",
  },
};
