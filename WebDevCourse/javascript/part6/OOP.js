let car = {
  make: "toyota",
  modal: "Carmy",
  year: 2020,
  start: function () {
    return `${this.modal} is started in ${this.year}`;
  },
};

// console.log(car.start());
function Person(name, age) {
  (this.name = name), (this.age = age);
}
let john = new Person("john", 20);
// console.log(john.age);

function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};

Array.prototype.hitesh = function () {
  return `Custom method ${this}`;
};

let myArray = [1, 2, 3];
// console.log(myArray.hitesh());
let myNewArray = [1, 2, 3, 4, 5];
// console.log(myNewArray.hitesh());

//---------------------------------------------

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

// Inheritance
class Car extends Vehicle {
  drive() {
    return `${this.make}: is an inheritance example.`;
  }
}

let myCar = new Car("Toyota", "Corrola");
// console.log(myCar.start());
// console.log(myCar.drive());

let vehicleOne = new Vehicle("Tata", "Curve");
// console.log(vehicleOne);
// console.log(vehicleOne.start());
// console.log(vehicleOne.drive());

// Encapsulation
class BankAccount {
  #balance = 0;
  deposit(amount) {
    this.#balance = this.#balance + amount;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}
let account = new BankAccount();
// console.log(account.getBalance())

// Abstraction

class coffeeMachine {
  start() {
    // call db
    // filter value
    return `Starting the machine......`;
  }

  brewCoffee() {
    // complex calc
    // other ops
    return `Brewing coffee.`;
  }
  pressStartButton() {
    let msgOne = this.start();
    let msgTwo = this.brewCoffee();
    return `${msgOne} ${msgTwo}`;
  }
}

let myCoffeemachine = new coffeeMachine();
// console.log(myCoffeemachine.pressStartButton());

// Polymorhism

class Bird {
  fly() {
    return `Flying......`;
  }
}
class Penguin extends Bird {
  fly() {
    return `Penguin can't fly.`;
  }
}

let myBird = new Bird();
let myPenguin = new Penguin();

// console.log(myBird.fly());
// console.log(myPenguin.fly());

// Static method
class Calculator {
  static add(a, b) {
    return a + b;
  }
}

// let miniCalc = new Calculator()
// console.log(console.log(miniCalc(4, 5)));
// console.log(Calculator.add(4, 6));

// Getters and Setters
class Employee {
    #salary;
  constructor(name, salary) {
    if(salary<0){
        throw new Error("Salary can not be negative")
    }
    this.name = name;
    this.#salary = salary;
  }
  get salary() {
    return `You are not allowed to see Salary.`;
  }
  set salary(value) {
    if (value < 0) {
      console.log("Invalid Salary");
    } else {
      this._salary = value;
    }
  }
}
let emp = new Employee("Alice", 25000);
console.log(emp._salary);
emp.salary = -400

