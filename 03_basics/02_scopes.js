// var c = 300

let a = 300

if (true){
    let a = 10
    const b = 20
    console.log("Inner:", a);

    
}

console.log("Outer:",a);


function one(){
    const username = "devesh"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);

    two()
    
}

// one()


if (true){
    const username = "hitesh"
    if (username === "hitesh"){
        const website = " youtube"
        console.log(username + website);
        
    }
    // console.log(website);
    
}

// console.log(username);


//-------------------interesting------------------

addone(5)
function addone(num){
    return num+1
}




// addTwo(5)   
// const addTwo = function(num){
//     return num+2
// }
