// Мария решава да мине на диета и отива до близкия пазар, за да купи ягоди, банани, портокали и малини.
// На конзолата се въвежда цената на ягодите в лв./кг. и количеството на бананите, портокалите, малините и ягодите, които трябва да закупи.
// Да се напише програма, която пресмята колко пари са ѝ необходими за да плати сметката, като знаете, че:
// •	цената на малините е на половина по-ниска от тази на ягодите;
// •	цената на портокалите е с 40% по-ниска от цената на малините;
// •	цената на бананите е с 80% по-ниска от цената на малините.
// Вход
// От конзолата се четат 5 реда:
// 1.	Цена на ягодите в лева – реално число в интервала [0.00 … 10000.00]
// 2.	Количество на бананите в килограми – реално число в интервала [0.00 … 1 0000.00]
// 3.	Количество на портокалите в килограми – реално число в интервала [0.00 … 10000.00]
// 4.	Количество на малините в килограми – реално число в интервала [0.00 … 10000.00]
// 5.	Количество на ягодите в килограми – реално число в интервала [0.00 … 10000.00]
// Изход
// Да се отпечата на конзолата едно число:
// •	парите, които са необходими на Мария.
// Резултатът да се форматира до вторта цифра след десетичната запетая.

function fruitMarket(input) {
  let index = 0;
  let strawberriesKgPrice = Number(input[index]); //Number(input.shift());
  index++;
  let bananasKg = Number(input[index]); //Number(input.shift());
  index++;
  let orangesKg = Number(input[index]); //Number(input.shift());
  index++;
  let raspberriesKg = Number(input[index]); //Number(input.shift());
  index++;
  let strawberriesKg = Number(input[index]); //Number(input.shift());

  let strawberriesPrice = strawberriesKgPrice * strawberriesKg;
  let raspberriesKgPrice = strawberriesKgPrice * 0.5;
  let raspberriesPrice = raspberriesKgPrice * raspberriesKg;
  let orangesPrice = raspberriesKgPrice * 0.6 * orangesKg;
  let bananasPrice = raspberriesKgPrice * 0.2 * bananasKg;
  let sum = strawberriesPrice + raspberriesPrice + orangesPrice + bananasPrice;

  console.log(sum.toFixed(2));
}

// fruitMarket([48, 10, 3.3, 6.5, 1.7]);
fruitMarket([63.5, 3.57, 6.35, 8.15, 2.5]);
