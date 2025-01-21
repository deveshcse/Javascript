// Polyfill for Bind method

let name1 = {
  firstName: "Devesh",
  lastName: "Mishra",
};

let printName = function (hometown, state, country) {
  console.log(
    `${this.firstName} ${this.lastName} ${hometown}  ${state} ${country}`
  );
};

let printMyName = printName.bind(name1, "basti");
printMyName("UP", "India");

// lets write polyfill
// for Bind method as MyBind

Function.prototype.myBind = function (...args1) {
  let obj = this;
  let params = args1.slice(1);
  return function (...args2) {
    obj.apply(args1[0], [...params, ...args2]);
  };
};

let printMyName2 = printName.myBind(name1, "basti");
printMyName2("UP", "India");
