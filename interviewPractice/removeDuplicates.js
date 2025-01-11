const removeDuplicates = (array) => {
  let uniqueElementArray = [];
  for (let i = 0; i < array.length; i++) {
    let isDuplicat = false;
    for (let j = 0; j < uniqueElementArray.length; j++) {
      if (array[i] === uniqueElementArray[j]) {
        isDuplicat = true;
        break;
      }
    }
    if (!isDuplicat) {
      uniqueElementArray.push(array[i]);
    }
  }
  return uniqueElementArray;
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
