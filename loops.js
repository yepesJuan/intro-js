//for : defined index, run action a specific # of times
for (let i = 0; i < 10; i++) {
    console.log('This is iteration #', i)
}

console.log('\n')

//do while: you dont get automatically get index, it always runs at least once
let i = 0
do {
    i++
    console.log('This is iteration #', i)
} while (i < 10)

console.log('\n')

// while: condition appears on top so it may not run the first time.
let j = 0
while (j < 10) {
    console.log('This is iteration #', j++)
}

console.log('\n')
// BREAK

for (let p = 0; p < 10; p++) {
    if (p == 3) {
        break
    }
    console.log('This is iteration #', p)
}

/// iterating over an array or an object for in and for of
// for in
console.log('\n')
let person = {
    firstName: 'Juan',
    age: 45,
    awesome: true
}

for (let k in person) {
    console.log(k + "= " + person[k] )
}

// for of
console.log('\n')
let fruits = ['apple', 'banana', 'orange']

for (let fruit of fruits) {
    console.log(fruit)
}


