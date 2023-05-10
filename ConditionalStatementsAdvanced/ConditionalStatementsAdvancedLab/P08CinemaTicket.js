// Да се напише функция, която получава ден от седмицата (текст) 
// и принтира на конзолата цената на билет за кино според деня от седмицата:
// Monday	Tuesday  Wednesday	Thursday   Friday	Saturday Sunday
//  12	     12	      14	       14	      12	  16	      16

function cinemaTicket(input) {

    let day = input[0];

    let price = 0;

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Friday":
            price = 12;
            break;
        case "Wednesday":
        case "Thursday":
            price = 14;
            break;
        case "Saturday":
        case "Sunday":
            price = 16;
            break;
    }

    console.log(price);

}

cinemaTicket(["Monday"]);