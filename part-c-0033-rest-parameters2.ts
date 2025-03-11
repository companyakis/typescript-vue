function sumOrMult(mathType: string, ...numbers: number[]) : number | string {

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
      
        return "Undefined math type!"
    }

}

console.log(sumOrMult("Diff", -20, 34, 145.87)) // Undefined math type!
console.log(sumOrMult("lorem", -20, 34, 145.87)) // Undefined math type!
