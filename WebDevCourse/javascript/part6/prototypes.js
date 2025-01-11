let computer = { cpu: 12 };

let lenevo = { screen: "HD", __proto__: computer };

let tomHardware = {};

// console.log(`Computer`, computer.__proto__);
// console.log(`lenevo`, lenevo.__proto__);

let genericCar = {tyres:4}
let tesla = {driver: "ai"}

Object.setPrototypeOf(tesla, genericCar)

// console.log(tesla);

console.log(Object.getPrototypeOf(tesla));
console.log(Object.hasOwnProperty("tyres"))