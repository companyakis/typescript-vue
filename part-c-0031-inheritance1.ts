class Department {

    depName: string
    manager: string

    constructor(depName: string, manager: string) {
        this.depName = depName
        this.manager = manager
    }
}

class Employee extends Department {

    name: string 
    id: string
    salary: number

    constructor(empName: string, empID: string, empSalary: number, depName: string, manager: string) {
        super(depName, manager)
        this.name = empName
        this.id = empID
        this.salary = empSalary
    }

    returnEmployeeInfo() {

        return `${this.id} - ${this.name} - ${this.salary}`
    }
}


let empAyhan = new Employee("Ayhan Bilir", "4564", 65000, "HR", "Aygun Arslan")

console.log(empAyhan.manager)
console.log(empAyhan.depName)
