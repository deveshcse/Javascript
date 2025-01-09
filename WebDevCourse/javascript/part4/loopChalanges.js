//While loop

let sum = 0;
let i = 1;
while (i <= 5) {
  sum = sum + i;
  i++;
}
// console.log(sum);

// count down from 5 to 1 and store in a array

let countDown = [];
let index = 5;

while (index >= 1) {
  countDown.push(index);
  index--;
}
// console.log(countDown);

//
// let teaCollection = [];
// let tea;

// do {
//   tea = prompt(`Enter your favorite tea(type"stop" to exit)`);
//   if (tea !== "stop") {
//     teaCollection.push(tea);
//   }
// } while (tea !== "stop");
// console.log(teaCollection);

let multipliedNumbers = [];
let numbers = [2, 4, 6];

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index] * 2;
  multipliedNumbers.push(element);
}
// console.log(multipliedNumbers);

// Advanced Loops Practice Set

// 1. Use `for...of` loop to iterate over the array and log each item in uppercase.
const fruits = ["apple", "banana", "cherry"];
for (const element of fruits) {
  console.log(element.toUpperCase());
}
// 2. Use `for...of` loop with `entries()` to log the index and value of each item in the array.
const colors = ["red", "green", "blue"];
for (const element of colors) {
}

// 3. Use `forEach` to iterate over the array and log the square of each number.
const numbersNew = [1, 2, 3, 4, 5];
numbersNew.forEach((element) => {
  console.log(element * element);
});

// 4. Use `forEach` to find and log the sum of all numbers in the array.
const expenses = [200, 450, 150, 300];
let sumExpense = 0;
expenses.forEach((element) => (sumExpense = sumExpense + element));
console.log(sumExpense);

// 5. Use `for...in` to iterate over the object and log both keys and values.
const user = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
};

for (const key in user) {
  console.log(`${key}=${user[key]} `);
}

// 6. Use `Object.keys()` and `forEach` to log each key in the object.
const settings = {
  theme: "dark",
  notifications: true,
  location: "US",
};

console.log(Object.keys(settings));

// 7. Use `Object.values()` and `for...of` to log each value in the object.
const product = [
  {
    id: 101,
    name: "Laptop",
    price: 75000,
  },
];
for (const element of product) {
  console.log(Object.values(element));
}

// 8. Use `Object.entries()` and `for...of` to log each key-value pair as a formatted string.
const car = {
  make: "Tesla",
  model: "Model S",
  year: 2023,
};
for (const [key, value] of Object.entries(car)) {
  console.log(key, value);
}

// 9. Use `Array.map` to create a new array with each item in uppercase.
const cities = ["new york", "london", "paris"];
upperCities = cities.map((city) => city.toUpperCase());
console.log(upperCities);

// 10. Use `Array.filter` to create a new array with only numbers greater than 50.
const marks = [45, 67, 89, 34, 50, 73];
filteredNums = marks.filter((mark) => mark > 50);
console.log(filteredNums);

// 11. Use `Array.reduce` to calculate the total price from the array of objects.
const cart = [
  { item: "book", price: 300 },
  { item: "pen", price: 20 },
  { item: "notebook", price: 150 },
];
total = cart.reduce((acc, curr) => acc + curr.price, 0);
console.log(total);

// 12. Use `Array.some` to check if there is at least one number greater than 100.
const values = [50, 80, 120, 30];
const greater = (element) => element > 100;
console.log(values.some(greater));

// 13. Use `Array.every` to check if all numbers in the array are positive.
const testScores = [65, 70, 80, 95, 100];
const isPositive = (element) => element >= 0;
console.log(testScores.every(isPositive));

// 14. Use `Array.find` to locate the first number greater than 60.
const ages = [22, 45, 33, 60, 72];
const isgreater = (element) => element > 60;
console.log(ages.find(isgreater));
console.log(ages.some(isgreater));

// 15. Use `Array.findIndex` to find the index of the first odd number.
const nums = [2, 4, 6, 7, 8, 9, 11, 13, 24];
const isOdd = (element) => element % 2 !== 0;
console.log(nums.findIndex(isOdd));
console.log(nums.findLastIndex(isOdd));

// Advanced Loops Practice Set Template

// Task 1: Array Filtering
// Write a function filterNumbers(arr) that returns only numbers from a mixed array
function filterNumbers(arr) {
  // Your logic here
  return arr.filter((num) => typeof num === "number");
}

// Test Case:
console.log(filterNumbers([1, "a", 3, true, 5])); // Expected: [1, 3, 5]

// Task 2: Array Reversal
// Write a function reverseArray(arr) that reverses the array
function reverseArray(arr) {
  // Your logic here
  const newArr = [];
  for (let index = arr.length - 1; index >= 0; index--) {
    newArr.push(arr[index]);
  }
  return newArr;
}

// Test Case:
console.log(reverseArray([1, 2, 3, 4, 5, 8])); // Expected: [5, 4, 3, 2, 1]

// Task 3: Find Maximum in an Array
// Write a function findMax(arr) that returns the largest number in the array
function findMax(arr) {
  // Your logic here
  let max = arr[0];
  for (let index = 0; index < arr.length; index++) {
    if (max < arr[index]) {
      max = arr[index];
    }
  }
  return max;
}

// Test Case:
console.log(findMax([1, 2, 3, 4, 5])); // Expected: 5

// Task 4: Remove Duplicates from an Array
// Write a function removeDuplicates(arr) that returns a new array with all duplicates removed
function removeDuplicates(arr) {
  // Your logic here
  const newarr = [...arr];
  for (let index = 0; index < arr.length; index++) {
    const element = newarr.pop();
  }
}

// Test Case:
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Expected: [1, 2, 3, 4, 5]

// Task 5: Flatten a Nested Array
// Write a function flattenArray(arr) that takes a nested array and returns a single flattened array
function flattenArray(arr) {
  // Your logic here
  return arr.flat(Infinity)
}

// Test Case:
console.log(flattenArray([1, [2, [3, 4]], 5])); // Expected: [1, 2, 3, 4, 5]
