let quarterlySales: number[][] = [
    [500, 450, 700],
    [652, 457, 687],
    [750, 700, 985],
    [547, 874, 654]
]

let cities: string[] = [ 'elazığ', 'izmir', 'ankara', 'adana', 'kahramanmaras', 'istanbul' ]

console.log(`Sales in May: ${quarterlySales[1][1]}`)

console.log(`Her city is ${cities[cities.length - 2].toLocaleUpperCase()}`)

// Sales in May: 457
// Her city is KAHRAMANMARAS
