console.clear();

//  variable declared inside if block disrepecting block scope
const number = 234;
if (number % 2 === 0) {
  var str = `${number} is even.`;
  console.log(str);
}

console.log(str);

// variable declared inside function respectiong functional scope
const num1 = 34;
const num2 = 45;
const add = () => {
  var total = num1 + num2;
  console.log(num1 + num2);
};
console.log(total);
