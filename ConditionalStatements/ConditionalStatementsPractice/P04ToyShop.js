// Петя има магазин за детски играчки. Тя получава голяма поръчка, която трябва да изпълни. С парите, които ще спечели иска да отиде на екскурзия. 
// Цени на играчките:
// •	Пъзел - 2.60 лв.
// •	Говореща кукла - 3 лв.
// •	Плюшено мече - 4.10 лв.
// •	Миньон - 8.20 лв.
// •	Камионче - 2 лв.
// Ако поръчаните играчки са 50 или повече магазинът прави отстъпка 25% от общата цена. От спечелените пари Петя трябва да даде 10% за наема на магазина. Да се пресметне дали парите ще ѝ стигнат да отиде на екскурзия.
// Вход
// От конзолата се четат 6 реда:
// 1.	Цена на екскурзията - реално число в интервала [1.00 … 10000.00]
// 2.	Брой пъзели - цяло число в интервала [0… 1000]
// 3.	Брой говорещи кукли - цяло число в интервала [0 … 1000]
// 4.	Брой плюшени мечета - цяло число в интервала [0 … 1000]
// 5.	Брой миньони - цяло число в интервала [0 … 1000]
// 6.	Брой камиончета - цяло число в интервала [0 … 1000]
// Изход
// На конзолата се отпечатва:
// •	Ако парите са достатъчни се отпечатва:
// o	"Yes! {оставащите пари} lv left."
// •	Ако парите НЕ са достатъчни се отпечатва:
// o	"Not enough money! {недостигащите пари} lv needed."

// Резултатът трябва да се форматира до втория знак след десетичната запетая.

function toyShop(input){

    let trip = Number(input[0]);
    
    let numPuzzles = Number(input[1]);
    let numDolls = Number(input[2]);
    let numTeddyBears = Number(input[3]);
    let numMinions = Number(input[4]);
    let numTrucks = Number(input[5]);

    let pricePuzzles = numPuzzles * 2.60;
    let priceDolls = numDolls * 3;
    let priceTeddyBears = numTeddyBears * 4.10;
    let priceMinions = numMinions * 8.20;
    let priceTrucks = numTrucks * 2;

    let sumNum = numPuzzles + numDolls + numTeddyBears + numMinions + numTrucks;
    let sumPrice = pricePuzzles + priceDolls + priceTeddyBears + priceMinions + priceTrucks;

    if(sumNum >= 50){
        sumPrice = sumPrice - (sumPrice*0.25);
    }

    let rent = sumPrice * 0.1;

    let income = sumPrice - rent;
    
    
    let diff = Number(Math.abs(trip-income)).toFixed(2);

    if (trip <= income) {
        console.log(`Yes! ${diff} lv left.`);
    } else{
        console.log(`Not enough money! ${diff} lv needed.`);
    }

}

toyShop(["40.8",
"20",
"25",
"30",
"50",
"10"]);
