//needs to update the code (code not working)
let count = 0;
const divideNumberTo1 = (num) => {
  if (num % 2 === 0 && num !== 1) {
    console.log("test");
    if (num % 2 === 1) {
      num = num / num;
      count++;
    }
  } else {
    num = num / 2;
    ++count;
    console.log(count);
    divideNumberTo1();
  }
  return count;
};

console.log(divideNumberTo1(56));
