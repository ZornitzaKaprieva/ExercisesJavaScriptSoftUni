// Времето се затопля и туристи, започват да си правят разходки високо в планината, където все още сняг,
// като за целта те трябва да закупят нужната туристическа екипировка.
// Вашата задача е да напишете програма, която да изчислява, стойността на екипировката,
// както и дали определеният бюджет е достатъчен или не, като се знае, че в магазина има следната промоция:
// Всеки трети продукт е на половин цена.
// Вход
// От конзолата се чете:
// •	На първи ред – бюджетът - реално число в интервала [1.00… 100000.00]
// •	След това поредица от два реда (до получаване на команда "Stop" или при заявка за купуване на продукт, чиято стойност е по-висока от наличния бюджет) :
// o	Име на продукта – текст
// o	Цена на продукта – реално число в интервала [1.00… 5000.00]
// Изход
// На конзолата да се отпечатат следните редове според случая:
// •	При получаване на командата "Stop", на един ред:
// o	"You bought {брой на закупените продукти} products for {цена на покупките} leva."
// •	При заявка за покупка на продукт, чиято цена е по-висока от останалите пари, на два реда:
// o	"You don't have enough money!"
// o	"You need {недостигащи пари} leva!"

function touristShop(input) {
  let budget = Number(input.shift());
  let command = input.shift();

  let sum = 0;
  let productCount = 0;
  let isFinish = false;
  while (command !== "Stop") {
    let product = command;
    let price = Number(input.shift());
    productCount++;
    if (productCount % 3 === 0) {
      price = price * 0.5;
    }

    sum += price;
    if (budget < sum) {
      isFinish = true;
      break;
    }

    command = input.shift();
  }

  if (isFinish) {
    let diff = Math.abs(budget - sum);
    console.log(`You don't have enough money!`);
    console.log(`You need ${diff.toFixed(2)} leva!`);
  } else {
    console.log(
      `You bought ${productCount} products for ${sum.toFixed(2)} leva.`
    );
  }
}

touristShop([
  "153.20",
  "Backpack",
  "25.20",
  "Shoes",
  "54",
  "Sunglasses",
  "30",
  "Stop",
]);
