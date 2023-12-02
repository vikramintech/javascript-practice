console.clear();

//creating clone of sample object using loops

//sample object
const blanket = {
  brand: "signature",
  quality: "soft feather",
  size: "king",
  color: "skyblue",
  serialNo: 45677,
  price: 3456,
};

const blanketClone = {};

//Using for-in loop for creating a clone of sample object
for (let key in blanket) {
  blanketClone[key] = blanket[key];
}

// checking for same reference concept of objects

blanket.price = 3400;
console.log(blanket);
console.log(blanketClone);
