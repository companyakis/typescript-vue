function addOne(x: number) : number {

    return x + 1
}

function addTen(x: number) : number {

    return x + 10
}

let numbers = [3, 7, 10, 4]

function processNumbers(arr, callback) {

    for (let i = 0; i < arr.length; i++) {

        arr[i] = callback(arr[i] * 2)
    }

    return arr
}

let result1 = processNumbers(numbers, addOne)

console.log(result1)

let result2 = processNumbers(numbers, addTen)

console.log(result2)

// [ 7, 15, 21, 9 ]
// [ 24, 40, 52, 28 ]
