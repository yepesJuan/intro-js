function findBig(arrayz) {
    let bucket = arrayz[0]
    for ( let i = 1 ; i < arrayz.length ; i++ ) {
        if (bucket < arrayz[i]) {
        bucket = arrayz[i]
        }
    }
    console.log(bucket)
}
const ages = [12,3,4,5,6,78,8,8,3,33,4]  
findBig(ages)


function findMaxNum(arr) {
    let biggestNum = arr[0]
    for (let num of arr) {
        if ( num > biggestNum ) {
            biggestNum = num
        }
    }
    console.log(biggestNum)
}

findMaxNum([1,2,3,4,45,64,5,66,7,88,201,3,4,5])
/// not done 
function findRepeatAmount() {
    let bucket = 0
    for ( let i = 1 ; i < arrayz.length ; i++ ) {
        if (bucket[i] = arrayz[i]) {
        counter++
        }
    }
    console.log(counter)
}

findRepeatAmount(ages)



