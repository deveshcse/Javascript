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

console.log(loginUserMessage());
