type Manager = {
    title: string,
    department: string,
    numberOfEmps: number
}

type Employee = {
    department: string,
    salary: number
}

let person: Manager | Employee

person = {title: "CFO", department: "Finance", numberOfEmps: 12}

console.log(person)

person = {department: "Sales", salary: 45000}

console.log(person)

// { title: 'CFO', department: 'Finance', numberOfEmps: 12 }
// { department: 'Sales', salary: 45000 }
