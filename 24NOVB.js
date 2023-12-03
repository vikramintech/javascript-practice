console.clear();

const alphabets = "abcdefghij".split("");
//pushing elements after reversing them from the alphabets array into reverseAlphabets
const reverseAlphabets = [];
for (let i = alphabets.length - 1; i >= 0; i--) {
  reverseAlphabets.push(alphabets[i]);
}

console.log(alphabets);
console.log(reverseAlphabets);
