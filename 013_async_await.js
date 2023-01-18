// ASYNC/AWAIT (https://scrimba.com/learn/introtoes6/async-await-ckRmnpCM)
//    a) Fix the `getUsers` function below so that it uses async/await to update the `userArray` const once it
// has filtered the incoming `users`.
//    b) Convert the new async/await function into an arrow function

// 🦉 After running the code, you should see the value below logged out to the console:
// {
//   resolvedUser: { name: 'Darth Vader', occupation: 'Sith Lord' },
//   userArray: [ { name: 'Darth Vader', occupation: 'Sith Lord' } ]
// }

const userArray = [];

function getUsers(users) {
  const resolvedUser = new Promise((resolve, reject) => {
    setTimeout(() => {
      const foundUser = users.find((user) => user.name === "Darth Vader");

      if (!foundUser) {
        reject("There was an error finding the user data");
      } else {
        resolve(foundUser);
      }
    }, 2000);
  });

  userArray.push(resolvedUser);

  console.log({ resolvedUser, userArray });
}

const apiUserList = [
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

getUsers(apiUserList);
