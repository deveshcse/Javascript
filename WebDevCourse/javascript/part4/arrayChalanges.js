//  hard copy vs soft copy

//ususal behavior

let var1 = 5;
let var2 = var1;
var1 = 9;

console.log(var1); // this is the expected / usual behavior
console.log(var2);

// Soft Copy: the operation/manipulation on original array reflects on copied array as well, because both are refernecing to same memory location;

let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;
console.log(softCopyTeas);
popularTeas.pop();

console.log(popularTeas);
console.log(softCopyTeas);

console.log(softCopyTeas);


// Hard Copy;
let topcities = ['Berlin', 'Singapore', 'New York']
let hardCopyCities = [...topcities]
// let hardCopyCities = topcities.slice()  //another way
console.log(topcities);
console.log(hardCopyCities);
topcities.pop()
console.log(topcities);
console.log(hardCopyCities);


let europianCities = ['Paris', 'Rome']
let asianCities = ['Tokyo', 'Bankok']
// let worldCities = europianCities+asianCities // adding this way arrays results in final output  as a string
// let worldCities = [...asianCities, ...europianCities] // this works fine
let worldCities = asianCities.concat(europianCities) // this also works fine
console.log(worldCities, typeof worldCities);


let teaMenu = ['masala tea', 'oolang tea', 'earl gray']
let menuLength = teaMenu.length
console.log(menuLength);
 
let cityBucketList = ['kyoto', 'london', 'cape town', 'vancuver']
let isLondonInBucketList = cityBucketList.includes('london')
console.log(isLondonInBucketList);
