//Using Spread ES6, useful upto 2D array
const spreadFlatten = (arr) => {
  let flatArray = [];
  return flatArray.concat(...arr);
};
let testArray1 = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]];
console.log(spreadFlatten(testArray1));

//Using Reduce (works on two dimensional arrays)
const reduceFlatten = (arr) => {
  const reducer = (accumulator, currentValue) =>
    accumulator.concat(currentValue);
  return arr.reduce(reducer, []);
};
let testArray2 = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8], [10]];
console.log(reduceFlatten(testArray2));

// using recursion works upto any depth
function flatten(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
let testArr3 = [[3, 2, 1, [3, [0, [0,[999]]],4]], [4, 6, 5], [], [9, 7, 8]]
console.log(flatten(testArr3));
