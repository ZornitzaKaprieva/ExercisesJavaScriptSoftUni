// От лозе с площ X квадратни метри се заделя 40% от реколтата за производство на вино. 
// От 1 кв.м лозе се изкарват Y килограма грозде. За 1 литър вино са нужни 2,5 кг. грозде.
//  Желаното количество вино за продан е Z литра.
// Напишете програма, която пресмята колко вино може да се произведе и дали това количество е достатъчно. 
// Ако е достатъчно, остатъкът се разделя по равно между работниците на лозето.
// Вход
// Входът се чете от конзолата и се състои от точно 4 реда:
// •	1ви ред: X кв.м е лозето – цяло число в интервала [10 … 5000]
// •	2ри ред: Y грозде за един кв.м – реално число в интервала [0.00 … 10.00]
// •	3ти ред: Z нужни литри вино – цяло число в интервала [10 … 600]
// •	4ти ред: брой работници – цяло число в интервала [1 … 20]
// Изход
// На конзолата трябва да се отпечата следното:
// •	Ако произведеното вино е по-малко от нужното:
// o	“It will be a tough winter! More {недостигащо вино} liters wine needed.”
// 	Резултатът трябва да е закръглен към по-ниско цяло число
// •	Ако произведеното вино е колкото или повече от нужното:
// o	“Good harvest this year! Total wine: {общо вино} liters.”
// 	Резултатът трябва да е закръглен към по-ниско цяло число
// o	“{Оставащо вино} liters left -> {вино за 1 работник} liters per person.”
// 	И двата резултата трябва да са закръглени към по-високото цяло число


function harvest(input) {

    let x = input[0];
    let y = input[1];
    let z = input[2];
    let workers = input[3];


    let grapesKg = x * y;

    let grapesForWine = 40 / 100 * grapesKg;

    let wineL = grapesForWine / 2.5

    let diff = Math.abs(z - wineL);

    if (z > wineL) {
        console.log(`It will be a tough winter! More ${Math.floor(diff)} liters wine needed.`);
    } else {
        let winePerPerson = diff / workers;
        console.log(`Good harvest this year! Total wine: ${Math.floor(wineL)} liters.`);
        console.log(`${Math.ceil(diff)} liters left -> ${Math.ceil(winePerPerson)} liters per person.`);
    }
}

harvest([650,
    2,
    175,
    3
]);
