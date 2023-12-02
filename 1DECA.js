console.clear();

// sample object

const fan = {
  brand: "Bajaj",
  model: "farrata fan",
  serialNo: 1245783,
  noOfBlades: 3,
  color: "grey",
};

// cloning fan object using Object.assign() method

const fanClone = Object.assign(fan);

console.log(fanClone);
//changing a property's value to check for same reference concept
fanClone.model = "farrata";

console.log(fan);
