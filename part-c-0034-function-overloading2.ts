function concatOrSum(x: string, y: string) : string

function concatOrSum(x: number, y: number) : number

function concatOrSum(x: any, y: any) : any {
    return x + y
}

console.log(concatOrSum(54, 97.21))

console.log(concatOrSum("Mustafa", " Büyükdereli"))

//console.log(concatOrSum(2025, " Büyükdereli")) // No overload matches this call
