enum Employees {
    Director = "Director",
    Manager = "Manager",
    Expert = "Expert",
    Assistant = "Assistant"
}

function setSalesPremium(emp: Employees) {

    if (emp === Employees.Director) {
        return 5000
    } 
    else if (emp === Employees.Manager) {
        return 4500
    }
    else if (emp === Employees.Expert) {
        return 5500
    }
    else if (emp === Employees.Assistant) {
        return 5000
    }
}

let employeeAyhan = Employees.Manager

console.log(`Mr Ayhan, your sales premium: ${setSalesPremium(employeeAyhan)}`) // Mr Ayhan, your sales premium: 4500
