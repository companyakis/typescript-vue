function sum_or_multiply(a: number, b: number, c: number) : {summation: number , multiplication: number} {

    let summation = a + b + c

    let multiplication = a * b * c 

    return {summation, multiplication}
}


let {summation, multiplication} = sum_or_multiply(3, 5.34, -4)

console.log("Summation: ", summation)

console.log("Multiplication: ", multiplication)


