const fruit = 'lemon'

switch (fruit) {
    case 'kiwi' :
        console.log(fruit, "is green")
        break
    case 'orange' :
    case 'mango' :
        console.log(fruit, "is orange")
        break
    case 'yellow' :
            console.log(fruit, "is yellow")
            break
    case 'strawberry' :
    case 'apple' :
            console.log(fruit, "is red")
            break
    default: 
        console.log(`I have no idea what ${fruit} is...`) // template literal
}
