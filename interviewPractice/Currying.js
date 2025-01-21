// Currying can be achieved using two ways
// 1. using Bind method

let multiply = function (x, y) {
  console.log(x * y);
};

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);

// -------------------------------------
// using Closure

let addition = function (x) {
  return function (y) {
    console.log(x + y);
  };
};

let addByFive = addition(5);
addByFive(20)

let addByTen = addition(10)
addByTen(3)
