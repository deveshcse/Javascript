const today = new Date();
console.log("today: ",today);
const tomorrow = new Date(today);
console.log("tomorrow: ",tomorrow);
tomorrow.setDate(today.getDate() + 1)
console.log("tomorrow: ",tomorrow);

const month = (tomorrow.getMonth() + 1).toString().padStart(2,'0');
console.log("month: ", month);
const day = tomorrow.getDate().toString().padStart(2, '0');
console.log('day', day);
const year = tomorrow.getFullYear();
console.log('year', year);
