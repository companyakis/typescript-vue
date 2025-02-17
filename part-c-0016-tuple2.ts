function returnNameArray(nameAndSalary: [string, number][]): string[] {
  
    return nameAndSalary.map((d) => d[0])
}

let empSalaryData = [
    ["Ayhan", 8500],
    ["Hakan", 3600]
]

let names = returnNameArray(empSalaryData)

console.log(names) // [ 'Ayhan', 'Hakan' ]
