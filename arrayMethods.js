const fruits = ['kiwi', 'lime', 'apple', 'banana','orange','grapes']

function getNextFruit(){
    const nextFruit = fruits.shift()
    console.log('You get a', nextFruit)
    console.log('There are', fruits.length, 'fruits left')
}
const numLoops = fruits.length
for (let i = 0; i < numLoops; i++){
    getNextFruit()
}


//

let stack = [] //no pancakes yet 
function cookPancakes() {
    for( let p = 0; p < 16; p++) {
        stack.push('pancakes' + p)
    }
}

function servePancakes(num){
    for( let i = 0 ; i < num ; i++)
    console.log(stack.pop())
}

cookPancakes()

const kids = [
    {name: 'Benji', age: 2, pancakes: 2},
    {name: 'Noah', age: 17, pancakes: 5},
    {name: 'David', age: 6, pancakes: 2},
    {name: 'Daniel', age: 3, pancakes: 4},

]

for(let kid of kids) {
    console.log(kid.name + ' gets ' )
    servePancakes(kid.pancakes)
}

//console.log(stack)


