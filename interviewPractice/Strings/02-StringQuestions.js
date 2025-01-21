const truncate = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength).concat("...");
  } else {
    return text;
  }
};

const length = 9;

let input = "Subscribe to Roadsidecoder";

let truncatedSting = truncate(input, length);
console.log(truncatedSting);

// palindrome

const isPalindrome = (input) => {
  if (input < 0) return false;
  return input === +input.toString().split("").reverse().join("");
};

// console.log(isPalindrome(-1));

// hamming distance : count of differnet characters of string with same length
const hammingDistance = (x, y) => {
  if (x.length !== y.length) {
    throw new Error("Both strings should have same length");
  }
  let distance = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) {
      distance++;
    }
  }
  return distance;
};

// console.log(hammingDistance("hello", "bellv"));

// palindrome for binary bits

const hammingDistanceBinaryDigit = (x, y) => {
  x = x.toString(2);
  y = y.toString(2);

  while (x.length !== y.length) {
    if (x.length < y.length) {
      x = "0" + x;
    } else {
      y = "0" + y;
    }
  }
  let distance = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) {
      distance++;
    }
  }
  return distance;
};

// console.log(hammingDistanceBinaryDigit(2, 1000));

// valid Anagram
// approach1
const isAnagram1 = (s, t) => {
  let a = s.split("").sort().join("");
  let b = t.split("").sort().join("");
  return a === b;
};

console.log(isAnagram1("anagram", "nagaram"));

// approach 2: creating object of each character as key and occurances as value

const anagram2 = (s, t) => {
  if (s.length !== t.length) return false;

  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[s[i]] = (obj2[s[i]] || 0) + 1;
  }
  console.log(obj1);
  console.log(obj2);
};

console.log(anagram2("anagram", "nagaram"));
