enum Managers {

    Sales = "Aygün Arslan",
    FinTech = "Mustafa Dereli",
    Finance = "İsmail Bingöl"
}

enum Employees {

    SalesExpert1 = "Kağan Öz",
    FinTechExpert1 = "Kutluk Bilir",
    FinanceExpert1 = "Secda Yazar",
    FinTechExpert2 = "Kültigin Geçmiş"
}

type Worker = Managers | Employees 

let empAygun: Worker = Managers.Sales

console.log(empAygun) // Aygün Arslan

