// Магазин за плодове през работните дни работи на следните цени:
// плод	banana	apple	orange	grapefruit	kiwi	pineapple	grapes
// цена	2.50	1.20	0.85	1.45	    2.70	5.50	    3.85
// Събота и неделя магазинът работи на по-високи цени:
// плод	    banana	apple	orange	grapefruit	kiwi	pineapple	grapes
// цена	    2.70	1.25	0.90	1.60	    3.00	5.60	    4.20
// Напишете функция, която получава аргументи:
//плод (banana / apple / orange / grapefruit / kiwi / pineapple / grapes), 
//ден от седмицата (Monday / Tuesday / Wednesday / Thursday / Friday / Saturday / Sunday) 
//и количество (число) и пресмята цената според цените от таблиците по-горе. 
//Резултатът да се отпечата закръглен с 2 цифри след десетичната точка. 
//При невалиден ден от седмицата или невалидно име на плод да се отпечата "error". 


function fruitShop(input) {

    let product = input[0];
    let day = input[1];
    let quantity = Number(input[2]);

    let price = 0;

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            switch (product) {
                case "banana":
                    price = 2.5;
                    console.log((price * quantity).toFixed(2));
                    break;
                case "apple":
                    price = 1.2;
                    console.log((price * quantity).toFixed(2));
                    break;
                case "orange":
                    price = 0.85;
                    console.log((price * quantity).toFixed(2));
                    break;
                case "grapefruit":
                    price = 1.45;
                    console.log((price * quantity).toFixed(2));
                    break;
                case "kiwi":
                    price = 2.7;
                    console.log((price * quantity).toFixed(2));
                    break;
                case "pineapple":
                    price = 5.5;
                    console.log((price * quantity).toFixed(2));
                    break;
                case "grapes":
                    price = 3.85;
                    console.log((price * quantity).toFixed(2));
                    break;
                default: console.log("error"); break;
            }
            break;

        case "Saturday":
        case "Sunday":
            switch (product) {
                case "banana":
                    price = 2.7;
                    console.log((price * quantity).toFixed(2));
                    break;
                case "apple":
                    price = 1.25;
                    console.log((price * quantity).toFixed(2));
                    break;
                case "orange":
                    price = 0.9;
                    console.log((price * quantity).toFixed(2));
                    break;
                case "grapefruit":
                    price = 1.60;
                    console.log((price * quantity).toFixed(2));
                    break;
                case "kiwi":
                    price = 3;
                    console.log((price * quantity).toFixed(2));
                    break;
                case "pineapple":
                    price = 5.6;
                    console.log((price * quantity).toFixed(2));
                    break;
                case "grapes":
                    price = 4.2;
                    console.log((price * quantity).toFixed(2));
                    break;
                default: console.log("error"); break;
            }
            break;

        default: console.log("error");
            break;
    }


}

fruitShop(["tomato", "Tuesday", "2"]);
