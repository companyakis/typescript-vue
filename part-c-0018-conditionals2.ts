function eggPriceAndTptalPayment(salesQuantity: number) : string {

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

let price1 = eggPriceAndTptalPayment(51)
console.log(price1)

let price2 = eggPriceAndTptalPayment(14)
console.log(price2) 

let price3 = eggPriceAndTptalPayment(5)
console.log(price3)

let price4 = eggPriceAndTptalPayment(-5)
console.log(price4)

// You are buying 51 eggs and total payment: 204 ₺
// You are buying 14 eggs and total payment: 59.5 ₺
// You are buying 5 eggs and total payment: 25 ₺   
// Egg quantity must be positive!
