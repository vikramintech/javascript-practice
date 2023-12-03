console.clear();

// use of pre ES6 method of giving default values to parameters in a function

function getDouble(num) {
  if (num === undefined) {
    num = 0;
  }
  return num * 2;
}

console.log(getDouble());

// use of post ES6 method of giving default values to parameters in a function

const greet = (name = "javascript") => `hello ${name}`;

console.log(greet());
