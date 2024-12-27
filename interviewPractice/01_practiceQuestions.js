let list1 = [];
let object1 = {};

let listAndObject1 = list1 + object1;
console.log(listAndObject1); // output: [object Object] // list of objects

//-------------------------------------------------------

let objectAndList1 = object1+list1;
console.log(objectAndList1); // output: [object Object] // list of objects

//--------------------------------------------------------
let listAndList = list1+list1;
console.log("list1+list1 = ",listAndList); // output: ''       // it is an empty string
console.log("typeOf list1+list1", typeof(listAndList)); // string

//---------------------------------------------------------
