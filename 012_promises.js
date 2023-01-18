// PROMISES
// 🔗 https://scrimba.com/learn/introtoes6/promises-cRDZ29H4
// 🔗 https://scrimba.com/learn/introtoes6/challenge-promises-c6W28vc7

//    a) Complete the `logUserData` function below by returning some user data if successful,
// and printing an error when not found.
//        TIP - use the .filter method for this to search for a customer with the name 'Darth Vader'
//    b) Log the user data when listening to the promise as well as log the error.

// 🦉 After running the code, you should see the value below logged out to the console:
// [ { name: 'Darth Vader', occupation: 'Sith Lord' } ]

const logUserData = (users) => {
  // 🤓 Add your code in here
};

const userListFromApiCall = [
  {
    name: "Darth Vader",
    occupation: "Sith Lord",
  },
  {
    name: "Emperor Palpatine",
    occupation: "Sith Master",
  },
  {
    name: "Grand Moff Tarkin",
    occupation: "Chief Officer",
  },
];

logUserData(userListFromApiCall)
  .then((success) => {
    // 🤓 Log the data here
  })
  .catch((error) => {
    // 🤓 Log the error here
  });
