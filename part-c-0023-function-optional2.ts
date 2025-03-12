function sum(x: number, y: number, z?: number) : number {

    if (typeof z !== "undefined") {

        return x + y + z
    }

    return x + y
}

console.log(sum(2.32, 4, 87))

console.log(sum(2.32, 3287))

// 93.32
// 3289.32
