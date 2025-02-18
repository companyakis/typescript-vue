type InternalDirections = () => string

let managerRule: InternalDirections = function () {
    
    return "Don't be rude!"
}

console.log(managerRule()) // Don't be rude!
