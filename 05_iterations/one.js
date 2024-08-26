// for loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);
    
// }

for (let i = 1; i < 10; i++) {
    // console.log(`Outer loop value ${i}`);
    
    for (let j = 1; j < 10; j++) {
        // console.log(`Inner loop value ${j} and Outer loop value ${i}`);
        // console.log(`${i} * ${j} = ${i*j}`);
        
        
    }
    
}

let myarray = ["flash", "superman", "hulk"]
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    // console.log(element);
    
    
}


// Break and continue


for (let i = 0; i < 10; i++) {
    if(i == 5){
        console.log(`detected the ${5}`);
        break;
    }
    console.log(`value of ${i}`);
    
}

for (let i = 0; i < 10; i++) {
    if(i == 5){
        console.log(`skipping this value`);
        continue;
    }
    console.log(`value of ${i}`);
    
}