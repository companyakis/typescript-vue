type sum = (a: number, b: number, c?: number) => number

let addition: sum = function (a, b, c = 0) {
    
    return a + b + c
}

console.log(addition(3, 5, 7))

console.log(addition(3, 5))

// 15
// 8
