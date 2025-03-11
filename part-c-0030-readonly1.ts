class Employee {

    name: string 
    readonly id: string
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

empAyhan.name = "Ayhan Bilici"

console.log(empAyhan.returnEmployeeInfo()) // 4298 - Ayhan Bilici - 87000

//empAyhan.id = "6284" // Cannot assign to 'id' because it is a read-only property.ts(2540)
