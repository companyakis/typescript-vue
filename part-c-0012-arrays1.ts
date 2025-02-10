let cities: string[] = ["izmir", "ankara", "adana", "kahramanmaras"]

let ages: number[] = [35, 45, 17, 24, 87]

cities.push("istanbul") // last

console.log(cities) // [ 'izmir', 'ankara', 'adana', 'kahramanmaras', 'istanbul' ]

cities.unshift("elazığ") // first

console.log(cities) // [ 'elazığ', 'izmir', 'ankara', 'adana', 'kahramanmaras', 'istanbul' ]

cities.pop() // last

console.log(cities) // [ 'elazığ', 'izmir', 'ankara', 'adana', 'kahramanmaras' ]

cities.shift() // first

console.log(cities) // [ 'izmir', 'ankara', 'adana', 'kahramanmaras' ]
