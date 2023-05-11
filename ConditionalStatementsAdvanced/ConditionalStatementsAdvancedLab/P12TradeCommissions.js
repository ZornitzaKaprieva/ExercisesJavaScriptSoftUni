// Фирма дава следните комисионни на търговците си според града, 
//в който работят и обема на продажбите:
// Град    	0 ≤ s ≤ 500	    500 < s ≤ 1 000	    1 000 < s ≤ 10 000	    s > 10 000
// Sofia	    5%	               7%	                8%	                12%
// Varna	    4.5%	           7.5%	                10%	                13%
// Plovdiv	    5.5%	            8%	                12%	                14.5%
// Напишете функция, която  получава име на град (стринг) 
//и обем на продажби (число) и изчислява и извежда размера на търговската комисионна според горната таблица. 
//Резултатът да се изведе форматиран до 2 цифри след десетичната точка. 
//При невалиден град или обем на продажбите (отрицателно число) да се отпечата "error". 

function tradeCommissions(input) {

    let city = input[0];
    let sales = Number(input[1]);

    let commissionPercent = 0;


    switch (city) {
        case "Sofia":

            if (sales >= 0 && sales <= 500) {
                commissionPercent = 5;
            } else if (sales > 500 && sales <= 1000) {
                commissionPercent = 7;
            } else if (sales > 1000 && sales <= 10000) {
                commissionPercent = 8;
            } else if (sales > 10000) {
                commissionPercent = 12;
            } else {
                console.log("error");
            }

            break;

        case "Varna":

            if (sales >= 0 && sales <= 500) {
                commissionPercent = 4.5;
            } else if (sales > 500 && sales <= 1000) {
                commissionPercent = 7.5;
            } else if (sales > 1000 && sales <= 10000) {
                commissionPercent = 10;
            } else if (sales > 10000) {
                commissionPercent = 13;
            } else {
                console.log("error");
            }

            break;

        case "Plovdiv":

            if (sales >= 0 && sales <= 500) {
                commissionPercent = 5.5;
            } else if (sales > 500 && sales <= 1000) {
                commissionPercent = 8;
            } else if (sales > 1000 && sales <= 10000) {
                commissionPercent = 12;
            } else if (sales > 10000) {
                commissionPercent = 14.5;
            } else {
                console.log("error");
            }

            break;

        default: console.log("error");
            break;
    }

    let sum = commissionPercent / 100 * sales;
    let isValidCity = city === "Sofia" || city === "Varna" || city === "Plovdiv";
    let isValidSales = sales >= 0;

    if (isValidCity && isValidSales) {

        console.log(sum.toFixed(2));

    }
}

tradeCommissions(["Sofia", "1500"]);
