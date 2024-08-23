const myArray = [0, 1, 2, 3, 4, 5]

// console.log(myArray[0]);
// console.log(myArray.length);

// myArray.push(6)
// myArray.push(7)
// console.log(myArray);
// myArray.pop()
// console.log(myArray);
// myArray.unshift(9)
// console.log(myArray);
// myArray.shift()
// console.log(myArray);


const newArray = myArray.join()

console.log(typeof myArray, myArray);
console.log(typeof newArray, newArray);

// slice and splice

console.log("A:", myArray);

const myn1 = myArray.slice(1, 3)

console.log(myn1);

console.log("B:", myArray);

const myn2 = myArray.splice(1, 3)
console.log(myn2);

console.log("C:", myArray);


