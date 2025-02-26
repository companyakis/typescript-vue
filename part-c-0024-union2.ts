function check(input: string | number | boolean) {

    if (typeof input === "string") {
        if (input.length < 10) {return "Input length must be at least 10"}
        else {return input.length}
    } 
    else if (typeof input === "number") {
        return Math.floor(input)
    }
    else if (typeof input === "boolean") {
        if (input === false) {return "Be positive"}
        else {return "Thank you"}
    }
}

let condition1 = check("Hi")
let condition2 = check("Hi there! I'm here...")

let condition3 = check(22 / 7)

let condition4 = check(false)
let condition5 = check(true)

console.log(condition1)
console.log(condition2)
console.log(condition3)
console.log(condition4)
console.log(condition5)

/*
Input length must be at least 10
21
3
Be positive
Thank you

*/
