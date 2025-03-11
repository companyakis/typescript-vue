class Employee {

    name: string,
    id: string
    salary: number 

    constructor(empName: string, empID: string, empSalary: number) {

        this.name = empName
        this.id = empID
        this.salary = empSalary
    }

    returnEmployeeInfo() {

        return `${this.id} - ${this.name} - ${this.salary}`
    }
}

let empAyhan = new Employee("Ayhan Bilir", "4298", 87000)

console.log(empAyhan.returnEmployeeInfo()) // 4298 - Ayhan Bilir - 87000
