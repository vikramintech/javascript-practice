console.clear();

// function that takes in a number and returns in a btc format

const getInBtc = (num) =>
  num.toLocaleString("en", { style: "currency", currency: "btc" }); //using toLocaleString method

console.log(getInBtc(56));
