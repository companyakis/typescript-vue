function sumNumbers(...numbers: number[]) : number {

    return numbers.reduce((x, y) => x + y, 0)
}

function multNumbers(...myNumbers: number[]) : number {

    return myNumbers.reduce((a, b) => a * b, 1)
}

let total = sumNumbers(121, 962, -54, 25.567)

console.log(total)

let mult = multNumbers(3, 4, 5, -2)

console.log(mult)

// 1054.567
// -120
