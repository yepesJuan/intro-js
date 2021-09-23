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

let lol = students.push("Diana"); // adds to last, returns length
console.log(students);
console.log(lol);

students.pop(); // removes last, retruns last
console.log(students);

students.shift(); // removes first, return first
console.log(students);

students.unshift("chris"); // adds to first, returns length
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

whatever();

function addToArray(newStudent) {
  students.push(newStudent);
  console.log(students);
}

addToArray("Emily");
//////////////////

let arr = [1, 2, 3, 4];
console.log(arr.splice(1, 0, 3)); // from a postion, remove how many items, and 3rd adds to it
console.log(arr);

//.concat

function findFruitIndex(array, item) {
  let indexOfFruit = array.indexOf(item);
  return indexOfFruit;
}

function findFruitIndex2(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}

let array = [
  "mango",
  "dorian",
  "loquat",
  "jackfruit",
  "spanish lime",
  "watermelon",
  "cotton candy grape",
  123,
];

console.log(findFruitIndex(array, "dorian"));
console.log(findFruitIndex2(array, "watermelon"));
let popper = array.pop();
console.log(popper);
console.log(array);

let addKiwi = array.unshift("kiwi");
console.log(array);

let removeLoquat = array.splice(3, 1);
console.log(array);

////// string to array words

let str = "Manny is happy, and Happy Birth Manny";

console.log(str.split(" "));

//// array to strinf use join with " "

/// fizz if num is divisible by 3, buzz if num divisible by 5,
// divisible by both fizzBuzz

function fizzBuzz(num) {
  for (let i = 1; i < num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzBuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
const n = 100;
fizzBuzz(n);





/// half pyramid challenge
// output  
// function outputPyramid(rows,character)

   function outputPyramid(rows,character){
     let row = character
     for( let i = 0; i < rows ; i++){
       console.log(row)
       row += character
     }
   }
   outputPyramid(5,"#") 

   