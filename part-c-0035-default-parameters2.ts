function personInfo(firstName: string, lastName: string, country: string = "Greenland") : string {

    return `Name: ${firstName} - Surname: ${lastName} - Country: ${country}`
}

console.log(personInfo("Ayhan", "Bengüsoy", "Göktürk Empire"))

console.log(personInfo("John", "Wizard"))

// Name: Ayhan - Surname: Bengüsoy - Country: Göktürk Empire
// Name: John - Surname: Wizard - Country: Greenland
