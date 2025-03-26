function quarterlySalesByProduct(productName: string, quarterlyQuantity: number[]) {

    return [productName, quarterlyQuantity]
}

let tvSales = quarterlySalesByProduct("TV", [2100, 2456, 1900, 1698])

let radioSales = quarterlySalesByProduct("Radio", [121, 97, 102, 90])

console.log(`Quarter 1 TV sales: ${tvSales[1][0]}`) // Quarter 1 TV sales: 2100

