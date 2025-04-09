function greeting(name?: string) {

    if (typeof name !== "undefined") {

        console.log(`Hi ${name}!`)
    }

    else {

        console.log("There is no person!")
    } 
}

greeting()

greeting("Mustafa")

// There is no person!
// Hi Mustafa!
