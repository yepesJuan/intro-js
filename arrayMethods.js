const fruits = ["kiwi", "lime", "apple"]


/* push adds item to the end of array, returns length */
fruits.push("strawberry");
console.log(fruits)

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
console.log(arr)
arr.splice(1, 0, 'lol'); // from a postion, remove how many items, and 3rd adds 
console.log(arr)

//indexOf or loop through array and set arr[i] === target
//splice
//concat
// split string to array
// join  arrat to string


