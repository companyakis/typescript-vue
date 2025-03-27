function department(depName: string, depHead: string, depEmps: string[], depYearlyBudgetUSD: number) {

    return {
        name: depName,
        head: depHead,
        employees: depEmps,
        budget: depYearlyBudgetUSD
    }
}

let dep_fintech = department("FinTech Department", "Mustafa Buyukdereli", ["Ayhan Bilir", "Bengü Yazar"], 85000)

console.log(dep_fintech)

console.log(dep_fintech.employees[0])

// {
//     name: 'FinTech Department',
//     head: 'Mustafa Buyukdereli',
//     employees: [ 'Ayhan Bilir', 'Bengü Yazar' ],
//     budget: 85000
//   }

//   Ayhan Bilir
