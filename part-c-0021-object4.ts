function createEmployee(name: string, department: string, id: string, married?: boolean) {

    if (typeof married !== "undefined") {

        return {
            name,
            department,
            id,
            married
        }
    }

    return {
        name,
        department,
        id
    }

}

let empKagan = createEmployee("Kağan Bilir", "Sales", "21", false)

let empYazgi = createEmployee("Yazgı Yazar", "Operations", "654")

console.log(empKagan)

console.log(empYazgi)

// { name: 'Kağan Bilir', department: 'Sales', id: '21', married: false }

// { name: 'Yazgı Yazar', department: 'Operations', id: '654' }
