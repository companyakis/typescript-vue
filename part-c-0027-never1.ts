type Employee = "Manager" | "Assistant" | "Expert"

function calculatePremium(emp: Employee) : number {

    switch (emp) {

        case "Assistant":
            return 5000
        case "Expert":
            return 6500
        case "Manager":
            return 7000
        default:
            const unknownEmpType: never = emp
            throw new Error("Unknown employee type: ", emp)
    }
}

let premium_ayhan = calculatePremium("Assistant")
console.log(premium_ayhan)

// let premium_selda = calculatePremium("CEO")
// console.log(premium_selda)
