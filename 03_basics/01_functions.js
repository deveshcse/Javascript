// function addTwoNumbers(numberOne, numberTwo){
//     console.log(numberOne + numberTwo);
    
// }

// const result = addTwoNumbers(5, 6) // Arguments------------>Parameters

// console.log(result);


function addTwoNumbers(numberOne, numberTwo){
    // let result = numberOne + numberTwo
    // return result

    return numberOne + numberTwo
    
}

const result = addTwoNumbers(5, 6) // Arguments------------>Parameters

// console.log(result);

function loginUserMessage(user = "Default user") {

    if (user === undefined) {
        console.log("Please enter a user name");
        return
        
    }

    // above condition can be written as 
    if (!user) {
        console.log("Please enter a user name");
        return
        
    }
    return `${user} just logged in`
}

// console.log(loginUserMessage("devesh"))

// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(100, 200, 300, 5000, 8000));

const user = {
    username: "devesh",
    price: 199
}

function handleObject(anObject) {
    console.log(`Username is ${anObject.username} and price is ${anObject.price}`);
    
}

// handleObject(user)

handleObject({
    username: "devesh",
    price: 199
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(anArray){
    return anArray[1]
}

console.log(returnSecondValue(myNewArray));
