// Practice Set: JSON Objects and Operations in JavaScript

// Sample JSON Object
const apiResponse = {
  users: [
    { id: 1, name: "John Doe", age: 28, active: true },
    { id: 2, name: "Jane Smith", age: 34, active: false },
    { id: 3, name: "Alice Johnson", age: 23, active: true },
    { id: 4, name: "Bob Brown", age: 45, active: false },
  ],
  meta: {
    totalUsers: 4,
    lastUpdated: "2025-01-11T10:00:00Z",
  },
};

// Problem Set

// 1. Extract the names of all users into a new array.
const userNames = [];
apiResponse.users.map((user) => userNames.push(user.name));
// console.log(userNames);

// 2. Find the total age of all active users.
let totalAgeOfActiveUsers = 0;
// // Method1
// let activeUsers = apiResponse.users.filter((user) => user.active === true);
// console.log(activeUsers);

// totalAgeOfActiveUsers = activeUsers.reduce(
//   (totalAge, currentUser) => totalAge + currentUser.age,
//   0
// );

// Method2
totalAgeOfActiveUsers = apiResponse.users
  .filter((user) => user.active === true)
  .reduce((totalAge, currentUser) => totalAge + currentUser.age, 0);

// console.log(totalAgeOfActiveUsers);

// 3. Check if there is any user aged 30 or older.
let isUserAbove30 = false;
const isabove = (element) => element.age > 30;
isUserAbove30 = apiResponse.users.some(isabove);
// console.log(isUserAbove30);

// 4. Add a new user to the 'users' array.
const newUser = { id: 5, name: "Charlie Green", age: 30, active: true };
apiResponse.users.push(newUser);
// console.log(apiResponse);

// 5. Remove the user with id 2 from the 'users' array.
// console.log(apiResponse);
// console.log('-----------------------------------------------------------------');

// apiResponse.users = apiResponse.users.filter(user=> user.id !== 2)
// console.log(apiResponse);

// 6. Update the 'active' status of the user with id 4 to true.

apiResponse.users = apiResponse.users.map((user) =>
  user.id === 4 ? { ...user, active: false } : user
);
// console.log(apiResponse);

// 7. Sort the users by age in ascending order.

let sortedUsers = [];
sortedUsers = apiResponse.users.sort((a, b) => a.age - b.age); // a-b for ascending b-a for descending
// console.log(sortedUsers);

// 8. Find the oldest user.
let oldestUser = sortedUsers[4];
// console.log(oldestUser);

// 9. Create a new array of user objects containing only 'id' and 'name'.
let idAndNameArray = [];
idAndNameArray = apiResponse.users.map((user) => {
  return { id: user.id, name: user.name };
});
// console.log(idAndNameArray);

// 10. Convert the 'apiResponse' object to a JSON string.
let jsonString = JSON.stringify(apiResponse);
// console.log(jsonString);

// 11. Parse the JSON string back to a JavaScript object.
let parsedObject = JSON.parse(jsonString);
// console.log(parsedObject);

// 12. Count how many users have the letter 'o' in their name.
let countNamesWithO = 0;
countNamesWithO = apiResponse.users.filter((user) =>
  user.name.includes("o")
).length;
// console.log(countNamesWithO)

// 13. Group the users into two categories: active and inactive.
let groupedUsers = {
  active: [],
  inactive: [],
};

apiResponse.users.map((user) => {
  if (user.active === true) {
    groupedUsers.active.push(user);
  } else {
    groupedUsers.inactive.push(user);
  }
});
// console.log(groupedUsers);

// 14. Merge the 'users' array with another array of users.
const newUsers = [
  { id: 6, name: "Emma Watson", age: 29, active: true },
  { id: 7, name: "Liam Hemsworth", age: 32, active: false },
];
let mergedUsers = [];
mergedUsers = apiResponse.users.concat(newUsers);
// console.log(mergedUsers);

// 15. Find the user with the maximum age and the user with the minimum age.
let maxAgeUser = mergedUsers.sort((a, b) => a.age - b.age)[
  mergedUsers.length - 1
];
let minAgeUser = mergedUsers.sort((a, b) => a.age - b.age)[0];
// console.log(minAgeUser);
// console.log(maxAgeUser);
// console.log(mergedUsers);

// 16. Create a new object summarizing the number of active and inactive users.
let userSummary = {
  activeCount: groupedUsers.active.length,
  inactiveCount: groupedUsers.inactive.length,
};
// console.log(userSummary);

// 17. Filter out all users younger than 25.

let usersAbove25 = [];
usersAbove25 = mergedUsers.filter((user) => user.age > 25);
// console.log(usersAbove25);

// 18. Write a function that checks if all users are active.
function areAllUsersActive(users) {
  if (users.active) {
    return true;
  } else {
    return false;
  }
}
// mergedUsers.forEach((user) => console.log(areAllUsersActive(user)));

// 19. Find the difference in age between the oldest and youngest user.
let ageDifference = 0;
const yongest = mergedUsers.sort((a, b) => a.age - b.age)[0];
const eldest = mergedUsers.sort((a, b) => b.age - a.age)[0];
// console.log(eldest.age - yongest.age);

// 20. Replace all occurrences of "active" in the object with "isActive".
let modifiedApiResponse = null;

modifiedApiResponse = apiResponse.users.map((user) => {
  // user.isActive = user.active;
  // delete user.active;
  const newUser = { ...user, isActive: user.active };
  delete newUser.active;
  return newUser;
});
console.log(modifiedApiResponse);

console.log("Practice Set Loaded. Start solving each problem!");
