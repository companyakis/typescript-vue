function sum(...numbers: number[]): number {

    let result = 0

    numbers.forEach((num) => result += num)

    return result

}

console.log(sum(3, 5, 67.76))

console.log(sum(10, 10, 10, 10, 10, 10, 100))

// 75.76
// 160
