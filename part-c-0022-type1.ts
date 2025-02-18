type someCalculations = (x: number, y: number) => number | string

let add: someCalculations = (a, b) => a + b

let subs: someCalculations = (a, b) => a - b

let mult: someCalculations = (a, b) => a * b

let division: someCalculations = function (a, b) {

    if (b == 0) {
        return "Zero division error!"
    }

    else {
        return a / b
    }
}

console.log(add(3, 5))
console.log(subs(3, 5))
console.log(mult(3, 5))
console.log(division(3, 5))
console.log(division(3, 0))

// 8
// -2
// 15
// 0.6
// Zero division error!
