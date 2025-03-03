function salesPremium(salary: number, rate: 0.1 | 0.15 | 0.18) : number {

    return salary * rate
}

let premium_emp_elon_musk = salesPremium(6800, 0.15)

console.log(premium_emp_elon_musk) // 1020

//let premium_trump = salesPremium(6800, 0.5) // Error!
