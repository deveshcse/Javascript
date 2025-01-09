// Number 

let balance = 120; //primitive

let anotherBalance = new Number(120); //non primitive: object

console.log(balance);
console.log(anotherBalance);
console.log(anotherBalance.valueOf());


console.log(typeof balance);
console.log(typeof anotherBalance);

// Boolean
let isActive = true
let isReallyActive = new Boolean(true) //not recommended

console.log(isActive);
console.log(isReallyActive);
console.log(isReallyActive.valueOf());

// null and undefined
let firstName
let middleName = null
let lastName = undefined

console.log(firstName);
console.log(middleName);
console.log(lastName);

// string

 let myString = "hello";
 let myStringOne = "Hola"
 let username = "hitesh"

 let oldGreet = myString + " " + "hitesh";
 console.log(oldGreet);

 let greetMessage = `Hello ${username} !`;
 console.log(greetMessage);
 
 let demoOne = `the value is ${2*2}`;
 console.log(demoOne);
 
 //Symbol 

 sm1 = Symbol("devesh")
 sm2 = Symbol("devesh")

 console.log(sm1 == sm2);
 



