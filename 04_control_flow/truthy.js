const useremail = "h@hitesh.ai"

if (useremail){
    console.log("got the useremail");
    
}else{
    console.log("didnt get useremail");
    
}


// Falsy values: false, 0, -0, BigInt 0n, null, undefined, NaN, 
// Rest all are truthy values examples:
// "0", 'false', " ", [], {}, function(){}

userNames = []

if (userNames.length === 0){
    console.log("Array is empty");
    
} 

emptyObjects = {}

if(Object.keys(emptyObjects).length === 0){
    console.log("Object is empty");
    
}


// Nullish Colescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 3 ?? 5
console.log(val1);

// terniary operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");



