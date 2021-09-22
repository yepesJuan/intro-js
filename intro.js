const firstName = "Juan"
const age  = 10
const awesome =  true 

console.log('Hello', firstName)
if (age >= 18){
    console.log("You're an adult")
} else { 
    (console.log("You're not an ault"))
}

const message = (awesome) ? "You're awesome" : "You're okay"
console.log(message)
 


if(age === 23) {
console.log("yerr") 
} else if(age == 24) { console.log("lolol") }

//ternary (condition) ? ___ : _____
let hour = 12
let message = (hour < 11) ? 'Good morning' : 'Good afternnon!'
console.log('drink') 

let animal = 'duck'
switch (animal) {
    case 'dog': console.log('woof') 
    break;
    case 'duck': console.log('quack')
    break;
    case 'cat': console.log('meow')
    break;
    default: console.log(`hello ${animal}.`)
} 

