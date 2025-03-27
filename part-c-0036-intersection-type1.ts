type EmpIdentity = {name: string, lastName: string, birthYear: number}

type EmpWorkData = {id: string, department: string, salary: number}

type Employee = EmpIdentity & EmpWorkData

let empAyhan: Employee = {
    name: "Ayhan",
    lastName: "Bilir",
    birthYear: 1982,
    id: "123",
    department: "Sales",
    salary: 65000
}

console.log(empAyhan)
