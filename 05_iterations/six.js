const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNums1 = myNums.filter((num) => num > 4); //sane function without return keyword
let newNums2 = myNums.filter((num) => {
  return num > 4;
});

// console.log(newNums1);
// console.log(newNums2);

const users = [
  { id: 1, name: "Alice", age: 28, city: "New York", isActive: true },
  { id: 2, name: "Bob", age: 34, city: "Los Angeles", isActive: false },
  { id: 3, name: "Charlie", age: 23, city: "Chicago", isActive: true },
  { id: 4, name: "Diana", age: 29, city: "Houston", isActive: true },
  { id: 5, name: "Evan", age: 41, city: "Phoenix", isActive: false },
  { id: 6, name: "Fiona", age: 31, city: "Philadelphia", isActive: true },
  { id: 7, name: "George", age: 27, city: "San Antonio", isActive: true },
  { id: 8, name: "Hannah", age: 33, city: "San Diego", isActive: false },
  { id: 9, name: "Ian", age: 36, city: "Dallas", isActive: true },
  { id: 10, name: "Julia", age: 24, city: "San Jose", isActive: true },
  { id: 11, name: "Kevin", age: 39, city: "Austin", isActive: false },
  { id: 12, name: "Laura", age: 26, city: "Jacksonville", isActive: true },
  { id: 13, name: "Michael", age: 32, city: "Fort Worth", isActive: true },
  { id: 14, name: "Nina", age: 30, city: "Columbus", isActive: false },
  { id: 15, name: "Oscar", age: 38, city: "Charlotte", isActive: true },
];


const filteredUser = users.filter( (user) => user.isActive === false && user.age< 35)
console.log(filteredUser);


