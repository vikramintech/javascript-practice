console.clear();

// array with repeating elements
const alphabets = "123453356768".split("");
// (i) using loops storing unique elements from an array with repeating elements to another array

const uniqueAlphabets = [];

//sort and stores unique elementts in uniqueAlphabets array
for (let i = 0; i < alphabets.length; i++) {
  if (!uniqueAlphabets.includes(alphabets[i]))
    uniqueAlphabets.push(alphabets[i]);
}

console.log(uniqueAlphabets);

//using set method, creating an array of unique elements from an array with repeating elements

const uniqueChars = new Set(alphabets);

//converting a set into an array
const uniqueArray = Array.from(uniqueChars);
console.log(uniqueArray);
