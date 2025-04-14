type City = "Ankara" | "İstanbul" | "İzmir" | "Adana"

type UserID = number | string

class Employee {

    name: string
    title: string
    id: UserID
    city: City
    married: boolean

    constructor(name: string, title: string, id: UserID, city: City, isMarried?: boolean ) {

        this.name = name
        this.title = title
        this.id = id
        this.city = city
        this.married = isMarried ? isMarried: false
    }
}

let empAyhan = new Employee("Ayhan Bilir", "Expert", "A2016-101", "Ankara")

console.log(empAyhan)

let empAygun = new Employee("Aygün Arslan", "Expert", 20241, "Adana", true)

console.log(empAygun)

{}

/*

Employee {
  name: 'Ayhan Bilir',
  title: 'Expert',
  id: 'A2016-101',
  city: 'Ankara',
  married: false
}
Employee {
  name: 'Aygün Arslan',
  title: 'Expert',
  id: 20241,
  city: 'Adana',
  married: true
}

*/
