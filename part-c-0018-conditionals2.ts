function eggPriceAndTotalPayment(salesQuantity: number) : string {

    if (salesQuantity > 50) {
        return `You are buying ${salesQuantity} eggs and total payment: ${4 * salesQuantity} ₺`
    } 

    else if (salesQuantity < 50 && salesQuantity > 10) {
        return `You are buying ${salesQuantity} eggs and total payment: ${4.25 * salesQuantity} ₺`
    }

    else if (salesQuantity < 10 && salesQuantity > 0) {
        return `You are buying ${salesQuantity} eggs and total payment: ${5 * salesQuantity} ₺`
    }
    
    else {
        return "Egg quantity must be positive!"
    }
}

let payment1 = eggPriceAndTotalPayment(51)
console.log(payment1)

let payment2 = eggPriceAndTotalPayment(14)
console.log(payment2) 

let payment3 = eggPriceAndTotalPayment(5)
console.log(payment3)

let payment4 = eggPriceAndTotalPayment(-5)
console.log(payment4)

// You are buying 51 eggs and total payment: 204 ₺
// You are buying 14 eggs and total payment: 59.5 ₺
// You are buying 5 eggs and total payment: 25 ₺   
// Egg quantity must be positive!
