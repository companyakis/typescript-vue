//let emp_data: (string | string | number)[] 

function create_employee_data(name: string, department: string, salary: number):  (string | string | number)[] {

    return [name, department, salary]
}

let emp_ayhan = create_employee_data("Ayhan Bilir", "Sales", 65000)

console.log(emp_ayhan) // [ 'Ayhan Bilir', 'Sales', 65000 ]

