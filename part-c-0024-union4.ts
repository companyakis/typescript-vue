function userData(id: number | string, name: string) {

    return {
        userID: id,
        userName: name
    }
}

let userAyhan = userData(101, "Ayhan Bilici")

console.log(userAyhan)
console.log(userAyhan.userID)

let userAygun = userData("102Ax", "Aygün Arslan")

console.log(userAygun)

// { userID: 101, userName: 'Ayhan Bilici' }
// 101
// { userID: '102Ax', userName: 'Aygün Arslan' }
