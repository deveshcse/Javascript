const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularsUser = {
    email: "someone@gmail.com",
    fullname: {
        userfullname:{
                    firstname: "devesh",
                    lastname: "mishra"
        }
    }
}

// console.log(regularsUser.fullname.userfullname.lastname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = {obj1, obj2}
// console.log(obj3);

obj4 = Object.assign({}, obj1, obj2)

// console.log(obj4);

const obj5 = {...obj1, ...obj2}
// console.log(obj5);


// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));

const course = {
    coursename: "js hindi playlist",
    price: "999",
    courseInstructor: "hitesh"
}


const {courseInstructor} = course

console.log(courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);
