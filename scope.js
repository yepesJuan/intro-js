let globalVar = "global variable" // available everywhere

function badFunction() {
    console.log("i am bad...")
    console.log(globalVar)
    const functionVar = "function variable"
    console.log(functionVar)
}

console.log(globalVar)
//console.log(functionVar)

badFunction()
console.log(globalVar)
//console.log(functionVar)
