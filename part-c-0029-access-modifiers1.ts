class Employee {

    name: string // default public
    public id: string
    salary: number
    private secretWord: string
    protected married: boolean

    constructor(empName: string, empID: string, empSalary: number, secretWord: string, married: boolean) {

        this.name = empName
        this.id = empID
        this.salary = empSalary
        this.secretWord = secretWord
        this.married = married
    }

    returnEmployeeInfo() {

        return `${this.id} - ${this.name} - ${this.salary}`
    }
}

let empAyhan = new Employee("Ayhan Bilir", "4298", 87000, "ss", true)

//console.log(empAyhan.secretWord) // Property 'secretWord' is private and only accessible within class 'Employee'.ts(2341)

//console.log(empAyhan.married) // Property 'married' is protected and only accessible within class 'Employee' and its subclasses.
