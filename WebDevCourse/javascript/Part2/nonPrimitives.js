// coericion
let sum = '1'+2
console.log(sum);
// non primitive
const username = {
    firstName: 'devesh',
    'middel name': 'nothing',
    lastname: 'mishra',
    isLoggedIn: true,


}


console.log(username);

username.firstName = 'hiii'
username['middel name'] = undefined


console.log(username);
console.log(typeof username);

 let today = new Date();
 console.log(today);
 console.log(today.getDate());
 console.log(today.getDay());
 console.log(today.getMonth());
 console.log(today.getFullYear());
 
 
 
 
 
