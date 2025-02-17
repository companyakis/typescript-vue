function addOrSubstract(x: number, condition: boolean) : number {

    return condition === true ? x + 10 : x - 10
}

let result1 = addOrSubstract(25, true)

console.log(result1)

let result2 = addOrSubstract(-12, false)

console.log(result2)
