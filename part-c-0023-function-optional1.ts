function personInfo(firstName: string, lastName: string, secondName?: string) : string {

    if (typeof secondName !== "undefined") {

        return `Person: ${firstName} ${secondName} ${lastName}`
    }

    return `Person: ${firstName} ${lastName}`

}

console.log(personInfo("Mustafa", "Büyükdereli", "Barbaros"))

console.log(personInfo("Hakan", "Büyükdereli"))


// Person: Mustafa Barbaros Büyükdereli
// Person: Hakan Büyükdereli
