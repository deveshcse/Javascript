// creating string
const string1 = new String("hi........");
const string2 = "hi......";
const string3 = "hi....";
let string4 = `this is a test string`;

// string length

// console.log(string4.length);

// accessing the characters
// console.log(string4[0]);

for (let i = 0; i < string4.length; i++) {
  //   console.log(string4[i]);
}

// modifying string
let str = `hello tell me about yourself`;
for (let i = 0; i < str.length; i++) {
  str[i] = "DD"; // this does not affect the string4 since in js the string are immutable
}

// console.log(string4);

let newStr = str.replace("hello", "0");
console.log(newStr); // replaces first occurences
console.log(str.replaceAll("a", "e")); // replaces all occurances

let str1 = "      hii     ";
let str2 = "    hello        ";
let str3 = str1.concat(str2);
console.log(str3);
console.log(str3.trim());

// searching

console.log(str.indexOf("a"));

console.log(str.lastIndexOf("a"));
console.log(str.startsWith("h"));
console.log(str.endsWith("self"));

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.charCodeAt(0));

let test = "az"; //"AZ";
let start = test.charCodeAt(0);
let end = test.charCodeAt(1);
for (let j = start; j <= end; j++) {
  console.log(String.fromCharCode(j));
}


 