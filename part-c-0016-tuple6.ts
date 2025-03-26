let depsAndHeadsEmployees: [string, string, number][] = [

    ["FinTech", "Mustafa Büyükdereli", 5],
    ["Operations", "Bilge Kağan Göktürk", 11],
    ["Sales", "Merve Aygün Kaplan", 7],
    ["Accounting", "Kutluk Bilici", 3]
]

let totalEmployee: number = 0

for (let i = 0; i < depsAndHeadsEmployees.length; i++) {

    totalEmployee += depsAndHeadsEmployees[i][2]
}

console.log(`Number of emps: ${totalEmployee}`) // Number of emps: 26
