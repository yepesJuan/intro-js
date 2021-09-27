function getFirstElement(first) {
    return first[0]
}

function getLastElement(last) {
    const end = last.length - 1
    return last[end]
}

function matchGivenElement(a,given) {
    for( let i = 0; i < a.length ; i++ ){
        if (a[i] === given){
            return given
        }
    } 
}

function matchGivenValue(a,value) {
    for( let i = 0; i < a.length ; i++ ){
        if (a[i] === value){
            return value
        }
    } 
    // return a.indexOf(value)
}

const arr = [10,2,3,5,6,7,88,34,4]

console.log(getFirstElement(arr))
console.log(getLastElement(arr))
console.log(matchGivenElement(arr, arr[4]))
console.log(matchGivenElement(arr, 88))

console.log("\n")

/*********** MULTI DIMENSIONAL ARRAYS ************/

function getFirstElement2(first) {
    return first[0][0]
}

function getLastElement2(last) {
    let lastRow = last[last.length-1];
    let lastEl = lastRow[lastRow.length-1];

    return lastEl
}

function matchGivenElement2(a,row, column) {
    return a[row][column]
}

function matchGivenValue2(a,value) {
   return a.indexOf(value) // cant use indexOf for multiDimensionalArr
}

const arrMultiDimensional = [[2,4,5,6],[3,4,5,6]]

console.log(getFirstElement2(arrMultiDimensional))
console.log(getLastElement2(arrMultiDimensional))
console.log(matchGivenElement2(arrMultiDimensional, 1,3))
console.log(matchGivenValue2(arrMultiDimensional, 2))





