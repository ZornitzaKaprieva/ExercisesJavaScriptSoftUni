// Петър иска да купи N видеокарти, M процесора и P на брой рам памет. 
//Ако броя на видеокартите е по-голям от този на процесорите получава 15% отстъпка от крайната сметка. 
//Важат следните цени:
// •	Видеокарта – 250 лв./бр.
// •	Процесор – 35% от цената на закупените видеокарти/бр.
// •	Рам памет – 10% от цената на закупените видеокарти/бр.
// Да се изчисли нужната сума за закупуване на материалите и да се пресметне дали бюджета ще му стигне.
// Вход
// Входът се състои от четири реда:
// 1.	Бюджетът на Петър - реално число в интервала [0.0…100000.0]
// 2.	Броят видеокарти - цяло число в интервала [0…100]
// 3.	Броят процесори - цяло число в интервала [0…100]
// 4.	Броят рам памет - цяло число в интервала [0…100]
// Изход
// На конзолата се отпечатва 1 ред, който трябва да изглежда по следния начин:
// •	Ако бюджета е достатъчен:
// "You have {остатъчен бюджет} leva left!"
// •	Ако сумата надхвърля бюджета:
// "Not enough money! You need {нужна сума} leva more!"
// Резултатът да се форматира до втория знак след десетичната запетая.

function shopping(input){
    let budget = Number(input[0]);
    let numVideoCards = Number(input[1]);
    let numProcessors = Number(input[2]);
    let numRAM = Number(input[3]);

    let priceVideoCards = numVideoCards * 250;
    let priceProcessors = numProcessors * (priceVideoCards * 0.35);
    let priseRAM = numRAM * (priceVideoCards * 0.1);

    let sum = priceVideoCards + priceProcessors + priseRAM;

    if(numVideoCards > numProcessors){
        sum = sum * 0.85;
    }

    let diff = Math.abs(budget-sum).toFixed(2);

    if(budget >= sum){
        console.log(`You have ${diff} leva left!`);
    } else{
        console.log(`Not enough money! You need ${diff} leva more!`);
    }
}

shopping(["900",
"2",
"1",
"3"])
