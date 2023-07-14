// Мария иска да купи подарък на сина си. Тя работи в магазин за цветя. В магазина идва поръчка за цветя. 
// Напишете програма, която пресмята сумата от поръчката и дали печалбата е достатъчна за подаръка. 
// Цветята имат следните цени:
// •	Магнолии – 3.25 лева
// •	Зюмбюли – 4 лева
// •	Рози – 3.50 лева
// •	Кактуси – 8 лева
// От общата сума, Мария трябва да плати 5% данъци.
// Вход
// Входът се чете от конзолата и се състои от 5 реда:
// •	Брой магнолии – цяло число в интервала [0 … 50]
// •	Брой зюмбюли – цяло число в интервала [0 … 50]
// •	Брой рози – цяло число в интервала [0 … 50]
// •	Брой кактуси – цяло число в интервала [0 … 50]
// •	Цена на подаръка – реално число в интервала [0.00 … 500.00]
// Изход
// На конзолата трябва да се отпечата един ред.
// •	Ако парите СА стигнали: "She is left with {останали} leva." – сумата трябва да е закръглена към по-малко цяло число (пр. 1.90 -> 1).
// •	Ако парите НЕ достигат: "She will have to borrow {останали} leva." – сумата трябва да е закръглена към по-голямо цяло число (пр. 1.10 -> 2).


function flowerShop(input) {
    let magnoliasNum = input[0];
    let hyacinthsNum = input[1];
    let rosesNum = input[2];
    let cactiNum = input[3];
    let giftPrice = input[4];

    let magnoliasPrice = magnoliasNum * 3.25;
    let hyacinthsPrice = hyacinthsNum * 4;
    let rosesPrice = rosesNum * 3.5;
    let cactiPrice = cactiNum * 8;

    let sumFlowers = magnoliasPrice + hyacinthsPrice + rosesPrice + cactiPrice;
    let sum = sumFlowers * 0.95;

    let diff = Math.abs(giftPrice - sum);
    if (giftPrice <= sum) {
        console.log(`She is left with ${Math.floor(diff)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(diff)} leva.`);
    }
}

flowerShop([2,
    3,
    5,
    1,
    50
]);
