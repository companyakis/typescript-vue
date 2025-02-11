class Employee {

    firstName: string
    lastName: string
    department: string
    title: string
    salary: number

    constructor(firstName: string, lastName: string, department: string, title: string, salary: number) {

        this.firstName = firstName
        this.lastName = lastName
        this.department = department
        this.title = title
        this.salary = salary
    }

    giveInfo(): void {
        console.log(`Employee info: ${this.firstName} - ${this.lastName} - ${this.department} - ${this.title} - ${this.salary}`)
    }

    salaryIncrease(rate: number): void {
        this.salary += this.salary*rate
    }
}

let emp_ayhan = new Employee("Ayhan", "Bilir", "HR", "Expert", 65000)

emp_ayhan.giveInfo() // Employee info: Ayhan - Bilir - HR - Expert - 65000

emp_ayhan.salaryIncrease(0.10)

console.log(emp_ayhan.salary) // 71500

emp_ayhan.giveInfo() // Employee info: Ayhan - Bilir - HR - Expert - 71500
