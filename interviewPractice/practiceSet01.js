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
const isabove = (element) => element.age>30;
isUserAbove30 = apiResponse.users.some(isabove)
// console.log(isUserAbove30);

// 4. Add a new user to the 'users' array.
const newUser = { id: 5, name: "Charlie Green", age: 30, active: true };
apiResponse.users.push(newUser)
// console.log(apiResponse);


// 5. Remove the user with id 2 from the 'users' array.

// 6. Update the 'active' status of the user with id 4 to true.

// 7. Sort the users by age in ascending order.
let sortedUsers = [];

// 8. Find the oldest user.
let oldestUser = null;

// 9. Create a new array of user objects containing only 'id' and 'name'.
let idAndNameArray = [];

// 10. Convert the 'apiResponse' object to a JSON string.
let jsonString = "";

// 11. Parse the JSON string back to a JavaScript object.
let parsedObject = null;

// 12. Count how many users have the letter 'o' in their name.
let countNamesWithO = 0;

// 13. Group the users into two categories: active and inactive.
let groupedUsers = {
  active: [],
  inactive: [],
};

// 14. Merge the 'users' array with another array of users.
const newUsers = [
  { id: 6, name: "Emma Watson", age: 29, active: true },
  { id: 7, name: "Liam Hemsworth", age: 32, active: false },
];
let mergedUsers = [];

// 15. Find the user with the maximum age and the user with the minimum age.
let maxAgeUser = null;
let minAgeUser = null;

// 16. Create a new object summarizing the number of active and inactive users.
let userSummary = {
  activeCount: 0,
  inactiveCount: 0,
};

// 17. Filter out all users younger than 25.
let usersAbove25 = [];

// 18. Write a function that checks if all users are active.
function areAllUsersActive(users) {
  // Your logic here
  return false;
}

// 19. Find the difference in age between the oldest and youngest user.
let ageDifference = 0;

// 20. Replace all occurrences of "active" in the object with "isActive".
let modifiedApiResponse = null;

console.log("Practice Set Loaded. Start solving each problem!");
