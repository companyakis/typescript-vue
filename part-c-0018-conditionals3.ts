let salaryUSD: number = 4500

let salesYearlyUSD: number = 50000

let yearlyPremium: number = salesYearlyUSD > 75000 ? salaryUSD * 1.25 : salaryUSD * 0.25

console.log(yearlyPremium)
