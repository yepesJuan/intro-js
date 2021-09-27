const firstName = "Juan";
const age = 10;
const awesome = true;

console.log("Hello", firstName);

if (age >= 18) {
  console.log("You're an adult");
} else if (age <= 17) {
  console.log("You're under age");
} else {
  console.log("No age available");
}

//iternary (condition) ? _if_ : _else_

const message = awesome ? "You're awesome" : "You're okay";
console.log(message);

let hour = 12;
let message = hour < 11 ? "Good morning" : "Good afternnon!";

// switch

let animal = "duck";
switch (animal) {
  case "dog":
  case "wolf":
    console.log("woof");
    break;
  case "duck":
    console.log("quack");
    break;
  default:
    console.log(`hello ${animal}.`);
}
