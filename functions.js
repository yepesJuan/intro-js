//// create a function to calculate tax
let myTotal = 17.25;
let myTaxRate = 0.07;

function calcTax(total, taxRate) {
  const tax = total * taxRate;
  return tax;
}

let myTax = calcTax(myTotal, myTaxRate);
console.log(myTax);

//// create a function to calculate area of pizza
//// and another for price per square inch

const diameter = 12;
const cost = 18.99;

function calculateAreaOfPie(diameter) {
  const radius = diameter / 2;
  return Math.PI * radius ** 2;
}
function pricePerSqIn(area, price) {
  return price / area;
}

const area = calculateAreaOfPie(diameter);
const pricePerUnitArea = pricePerSqIn(area, cost);

console.log(
  `a ${diameter}" pizza is ${calculateAreaOfPie(diameter).toFixed(3)} sq. in.`
);
console.log(
  ` a ${diameter}" pizza cost $${pricePerUnitArea.toFixed(2)} / sq. in.`
);
