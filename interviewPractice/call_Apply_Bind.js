let name1 = {
  firstName: "devesh",
  lastName: "mishra",
};



const printFullName = function (hometown) {
  console.log(this.firstName + " " + this.lastName + " " + hometown);
};



printFullName.call(name1);

let name2 = {
  firstName: "hiiiiii",
  lastName: "byyyyy",
};

// Call method
// function borrowing
// Syntax
// function.call(reference, argument)

printFullName.call(name2, "Ayodhya");
// Apply method
// does the same job as Call but the arguments are passed in a array
printFullName.apply(name1,["yes"])

// Bind mentod
// does the same job as call and apply but 
// rather than executing the code immediatly
// it returns a function that can be executed/called later 


const printmyname = printFullName.bind(name1, 'basti')
printmyname()



// these Call, Apply, Bind methods are 
// used in writing Polyfils and function currying