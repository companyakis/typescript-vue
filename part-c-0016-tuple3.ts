function createEmployee(id: number, name: string, department: string) : [number, string, string] {

    return [id, name, department]
}

let emp_ayhan = createEmployee(102, "Ayhan Bilir", "Sales")

console.log(emp_ayhan) // [ 102, 'Ayhan Bilir', 'Sales' ]
