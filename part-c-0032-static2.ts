class Calculus {

    static cost: number = 2100

    static calculateProfit(salesAmount: number) {
      
        return salesAmount - this.cost
    }

}

console.log("Period 1 profit or loss: " + Calculus.calculateProfit(5000))

console.log("Period 2 profit or loss: " + Calculus.calculateProfit(1700))

// Period 1 profit or loss: 2900
// Period 2 profit or loss: -400
