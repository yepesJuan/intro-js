// collection of objects or variables of usually same type
let list = ['Boca Code', 24 ,true, [11]]

// an array of objects
let staff = [{
    firstName: 'Dnaiel',
    subject: 'AI',
    awesome: true
}, {
    firstName: 'Zach',
    subject: 'Typescript',
    awesome: true
}]

 console.log(staff[0].subject)

//////////////////////////////

// JSON //
// has arrays and objects and is a format to send info
// between API

// ARRAY METHODS
 
/* push adds value to the end of array */
let fruits = ['apple','banana', 'orange']
fruits.push('strawberry')
console.log(fruits)

/* pop grabs value of the end of array */
fruits.pop('strawberry')
console.log(fruits)

/* shift grabs the first element */
let myFruits = fruits.shift()
console.log(myFruits)

console.log(fruits)

/* unshift adds the first element */
fruits.unshift('strawberry')
console.log(fruits)

/////

/*spread operator ... */
let sports = ['soccer','tennis','basketball']
console.log(['football', ...sports, 'golf'])

