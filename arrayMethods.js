const fruits = ["kiwi", "lime", "apple"];

/* push adds item to the end of array, returns length */
fruits.push("strawberry");
console.log(fruits);

/* pop removes & retuns last item of array */
fruits.pop("strawberry");
console.log(fruits);

/* shift removes & retuns first item of array */
let myFruits = fruits.shift();
console.log(myFruits);
console.log(fruits);

/* unshift adds item to beginning of array, returns length */
fruits.unshift("strawberry");
console.log(fruits);

/*spread operator ... */
let sports = ["soccer", "tennis", "basketball"];
console.log(["football", ...sports, "golf"]);

let arr = [1, 2, 3, 4];
console.log(arr);
arr.splice(1, 0, "lol"); // from a postion, remove how many items, and 3rd adds
console.log(arr);

//indexOf or loop through array and set arr[i] === target
//splice
//concat
// toUpper toLower

let str = "Manny is happy, and Happy Birth Manny";
let lol = [1, 2, 3, 4, 5];
console.log(str.split(" ")); // split string to array
console.log(lol.join("@")); // join array into string

// array = collection of objects or variables of usually same type
let list = ["Boca Code", 24, true, [11]];

// an array of objects
let staff = [
  {
    firstName: "Dnaiel",
    subject: "AI",
    awesome: true,
  },
  {
    firstName: "Zach",
    subject: "Typescript",
    awesome: true,
  },
];

console.log(staff[0].subject);

//////////////////////////////

// JSON //
// has arrays and objects and is a format to send info
// between API
