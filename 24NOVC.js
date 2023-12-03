console.clear();
// implementation of recurssion

// sample array
const sampleArr = [1, 2, 3, 4, 5, 7, 89];
// this function will pop the elements from an array untill its length becomes 1
const getOneElement = (array) => {
  array.pop();
  if (array.length > 1) getOneElement(array);
  return array;
};
console.log(sampleArr);
console.log(getOneElement(sampleArr));
