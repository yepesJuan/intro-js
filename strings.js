// template literals

const question = "    do you THINK javascript is amazing?"
console.log(question.length) // --> .length is a property.. dont require processes
                            // methods are like functions, they do have process
console.log(question)
console.log(question.toUpperCase())
console.log(question.toLowerCase())
console.log(question.trim())
console.log(question.replace('amazing', 'cool'))
console.log(question.substring(6,24))
console.log(question.substr(0,15))

// startwith, endwith
let searchTerm = 'is'
console.log(question.includes(searchTerm))
console.log(question.indexOf('javascript'))
console.log(question.split('  ')) // ?
console.log(question.indexOf('y'))


///////////////////////////////////////////////////////

// casting types
