// singelton
//object.create


//object literal

const mySym = Symbol("key1")

const jsUser = {
    name: "Devesh",
    "full name": "Devesh Mishra",
    [mySym]: "mykey1",
    age: 18,
    location: "jaipur",
    email: "devesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser.email = "devesh@chatgpt.com"

// Object.freeze(jsUser)

jsUser.email = "devesh@microsoft.com"

console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello js user");
}

jsUser.greeting2 = function(){
    console.log(`Hello js user ${this["full name"]}`);
}

console.log(jsUser.greeting2());
