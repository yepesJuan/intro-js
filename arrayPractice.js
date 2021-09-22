let students = [
  "John",
  "Alina",
  "Juan",
  "Dariel",
  "Amir",
  "Sebas",
  "Manny",
  { instrcutors: ["Vitoria", "Daniel", "Jonathan", "Zach"] },
  { hours: 400 },
];

students.push("Diana"); // adds to last
console.log(students);

students.pop(); // removes last
console.log(students);

students.shift(); // removes first
console.log(students);

students.unshift("chris"); // adds to first
console.log(students);

const ammount = students.length;

////////////////
function whatever() {
  if (ammount < 12) {
    console.log("not enought items");
  } else {
    console.log("just enough items");
  }
}

whatever() 

function addToArray(newStudent) {
    students.push(newStudent)
    console.log(students)
}

addToArray('Emily')
//////////////////

