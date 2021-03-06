//for : defined index, run action a specific # of times
for (let i = 0; i < 10; i++) {
  console.log("This is for loop #", i);
}
console.log("\n");

//do while: you dont get automatically get index, it always runs at least once
let k = 0;
do {
  k++;
  console.log("This is do while #", k);
} while (k < 5);

console.log("\n");

// while: condition appears on top so it may not run the first time.
let j = 0;
while (j < 5) {
  console.log("This is while loop #", j++);
}
console.log("\n");

// BREAK
for (let p = 0; p < 10; p++) {
  if (p == 3) {
    break;
  }
  console.log("This is about break #", p);
}
console.log("\n");
/// iterating over an array or an object
// for in
let person = {
  firstName: "Juan",
  age: 45,
  awesome: true,
};

for (let k in person) {
  console.log(k + " = " + person[k]);
}
console.log("\n");

// for of
let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
  console.log(fruit);
}
