console.clear();

//sample object

const plywoods = {
  brand: "century",
  variety: "HDHMR",
  isWaterproof: true,
  isCustomSize: false,
  price: 3300,
  warranty: 3,
};

// looping over object values using for-in

for (let plywood in plywoods) {
  console.log(plywoods[plywood]);
}

// second method

const plywoodProperties = Object.keys(plywoods);
console.log(plywoodProperties);

for (let i = 0; i < plywoodProperties.length; i++) {
  console.log(plywoods[plywoodProperties[i]]);
}
