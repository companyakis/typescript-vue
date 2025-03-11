function sumOrMult(mathType: string, ...numbers: number[]) : number {

    if (mathType.toLowerCase() === "sum") {

        let result = 0

        numbers.forEach((num) => result += num)

        return result
    }

    if (mathType.toLowerCase() === "mult") {

        let result = 1

        numbers.forEach((num) => result *= num)

        return result.toFixed(2)
    }

    else {
        return 0
    }

}

console.log(sumOrMult("Sum", 20, 14, 45.87))
console.log(sumOrMult("Mult", 20, 14, 45.87))
console.log(sumOrMult("Mult", 2, 3, 0))
console.log(sumOrMult("Sum", -20, 34, 145.87))

// 79.87
// 12843.60
// 0.00
// 159.87
