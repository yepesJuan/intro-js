const question = "    do you THINK javascript is amazing?"
console.log(question.length) // --> .length is a property.. dont require processes
                            // methods are like functions, they do have process

console.log(question.toUpperCase())
console.log(question.toLowerCase())
console.log(question.trim())
console.log(question.replace('amazing', 'cool'))
console.log(question.substring(6,24)) // start from index, stop before index
console.log(question.substr(0,16)) // start from index, length

// startwith, endwith
let searchTerm = 'is'
console.log(question.includes(searchTerm))
console.log(question.indexOf('javascript'))
console.log(question.split('  '))

