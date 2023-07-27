// Предприемчив българин отваря квартални магазинчета в няколко града и продава на различни цени според града:
// град / продукт	coffee	water	beer	sweets	peanuts
// Sofia	        0.50	0.80	1.20	1.45	1.60
// Plovdiv	        0.40	0.70	1.15	1.30	1.50
// Varna	        0.45	0.70	1.10	1.35	1.55
// Напишете функция, която получава аргументи: продукт (низ), град (низ) и количество (число), и пресмята и отпечатва колко струва съответното количество от избрания продукт в посочения град. 


function smallShop(input) {
    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);

    let price = 0;

    switch (product) {
        case "coffee":
            if(city === "Sofia"){
                price = 0.5;
            } else if (city === "Plovdiv"){
                price = 0.4;
            }  else if (city === "Varna"){
                price = 0.45;
            }
            break;

        case "water":
            if(city === "Sofia"){
                price = 0.8;
            } else if (city === "Plovdiv" || city === "Varna"){
                price = 0.7;
            } 
            break;

        case "beer":
            if(city === "Sofia"){
                price = 1.2;
            } else if (city === "Plovdiv"){
                price = 1.15;
            }  else if (city === "Varna"){
                price = 1.1;
            }
            break;

        case "sweets":
            if(city === "Sofia"){
                price = 1.45;
            } else if (city === "Plovdiv"){
                price = 1.3;
            }  else if (city === "Varna"){
                price = 1.35;
            }
            break;

        case "peanuts":
            if(city === "Sofia"){
                price = 1.6;
            } else if (city === "Plovdiv"){
                price = 1.5;
            }  else if (city === "Varna"){
                price = 1.55;
            }
            break;
    }


    let sum = price * quantity;

    console.log(sum);


}

smallShop (["peanuts",
"Plovdiv",
"1"]);

