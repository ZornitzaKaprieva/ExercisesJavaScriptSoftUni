// Хотел предлага 2 вида стаи: студио и апартамент. 
// Напишете функция, която изчислява цената за целия престой за студио и апартамент.
//  Цените зависят от месеца на престоя:
// Май и октомври	                Юни и септември	                   Юли и август
// Студио – 50 лв./нощувка	        Студио – 75.20 лв./нощувка	       Студио – 76 лв./нощувка
// Апартамент – 65 лв./нощувка	    Апартамент – 68.70 лв./нощувка	   Апартамент – 77 лв./нощувка
// Предлагат се и следните отстъпки:
// •	За студио, при повече от 7 нощувки през май и октомври : 5% намаление.
// •	За студио, при повече от 14 нощувки през май и октомври : 30% намаление.
// •	За студио, при повече от 14 нощувки през юни и септември: 20% намаление.
// •	За апартамент, при повече от 14 нощувки, без значение от месеца : 10% намаление.
// Вход
// Получават се 2 аргумента:
// •	 месецът – May, June, July, August, September или October
// •	броят на нощувките – цяло число в интервала [0 … 200]
// Изход
// Да се отпечатат на конзолата 2 реда:
// •	На първия ред: “Apartment: {цена за целият престой} lv.”
// •	На втория ред: “Studio: {цена за целият престой} lv.”
// Цената за целия престой форматирана с точност до два знака след десетичната запетая.


function hotelRoom(input) {

    let month = input[0];
    let overnightStays = Number(input[1]);

    let sumStudio = 0;
    let sumApartment = 0;

    switch (month) {
        case "May":
        case "October":
            sumStudio = 50 * overnightStays;
            sumApartment = 65 * overnightStays;
            
            if(overnightStays > 7 && overnightStays <=14){
                sumStudio = sumStudio * 0.95;
            } else if(overnightStays > 14){
                sumStudio = sumStudio * 0.7;
                sumApartment = sumApartment * 0.9;
            }
            
            break;
        case "June":
        case "September":
            sumStudio = 75.2 * overnightStays;
            sumApartment = 68.7 * overnightStays;

            if(overnightStays > 14){
                sumStudio = sumStudio * 0.8;
                sumApartment = sumApartment * 0.9;
            }
            break;
        case "July":
        case "August":
            sumStudio = 76 * overnightStays;
            sumApartment = 77 * overnightStays;

        if(overnightStays > 14){
            sumApartment = sumApartment * 0.9;
        }
            break;

    }

    console.log(`Apartment: ${sumApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${sumStudio.toFixed(2)} lv.`);



}

hotelRoom(["June", "14"]);
