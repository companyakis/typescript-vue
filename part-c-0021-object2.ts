function employeeObject(name: string, salary: number) {

    return {name: name, salary: salary}
}

let empHakan = employeeObject("Hakan Büyük", 92000)

console.log(empHakan)

console.log(empHakan.name)

console.log(empHakan.salary)

// { name: 'Hakan Büyük', salary: 92000 }
// Hakan Büyük
// 92000
