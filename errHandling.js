try {
    console.log('hello')
    const t = 'v'
    throw t
} catch (e) {
    console.log('was an error throw?')
    console.log(e)
} finally {
    console.log('all done')
}
console.log('we got through it all')

// Synchronous vs Asynchronous

/*
const fs = require('fs')

// const file = fs.readFileSync('./test.json')
// console.log(file.toString())

fs.readFile('./test.json', (err,data) => {
console.log(data.toString())
})
console.log('before')
*/

// Anonymous functions --> good to use in other functions, callbacks
function myFirstFunction() {
    console.log('we did it')
}

() => {
    console.log('did it!')
}


// wait an amount of time to execute
console.log('first')
setTimeout(() => {
    console.log('third')
},60 * 1000)

console.log('second')
