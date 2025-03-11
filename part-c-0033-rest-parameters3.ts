function greetPeople(message: string, ...people: string[]) : string {

    return message + " " + people.join(", ") + "!"
}

console.log(greetPeople("Hi", "Ayhan", "Aygün"))

console.log(greetPeople("Hello", "Ayhan", "Aygün", "Aykan"))

// Hi Ayhan, Aygün!
// Hello Ayhan, Aygün, Aykan!
