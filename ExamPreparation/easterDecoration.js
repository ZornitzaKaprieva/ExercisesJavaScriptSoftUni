// За великденските празници, магазин започва да продава три вида великденска украса – кошнички за яйца (basket), великденски венци (wreath) и шоколадови зайци (chocolate bunny).
// Вашата задача е да напишете програма, която да изчислява каква сметка трябва да плати всеки един клиент на магазина,
// като се има в предвид, че всеки клиент закупил четен брой продукти, ще получи 20% отстъпка от крайната цена.
// След като всички клиенти приключат с покупките, трябва да се отпечата средно по колко пари е похарчил всеки човек.
// Цените на продуктите са:
// •	кошничка за яйца (basket) – 1.50 лв.
// •	великденски венец (wreath) – 3.80 лв.
// •	шоколадов заек (chocolate bunny) – 7 лв.
// Вход
// От конзолата първоначално се чете един ред:
// •	Брои на клиентите в магазина – цяло число [1… 100]
// •	След това за всеки един клиент на нов ред до получаване на командата "Finish" се чете:
// o	Покупката която клиента е избрал – текст ("basket", "wreath" или "chocolate bunny")
// Изход
// •	При получаване на командата "Finish" да се отпечата един ред:
// o	"You purchased {броя на покупките} items for {крайната цена} leva."
// •	Накрая, след като всички клиенти приключат с покупките, да се отпечата на един ред
// o	"Average bill per client is: {средно аритметично на парите които е похарчил всеки един клиент} leva."
// Всички пари трябва да бъдат форматирани до втората цифра след десетичния знак.

function easterDecoration(input) {
  let index = 0;
  let numCustomers = Number(input[index]);
  index++;

  let sum = 0;
  let average = 0;
  let purchaseCount = 0;

  for (let i = 0; i < numCustomers; i++) {
    let purchase = input[index];
    index++;

    while (purchase !== "Finish") {
      switch (purchase) {
        case "basket":
          sum += 1.5;
          purchaseCount++;
          break;
        case "wreath":
          sum += 3.8;
          purchaseCount++;
          break;
        case "chocolate bunny":
          sum += 7;
          purchaseCount++;
          break;
      }

      purchase = input[index];
      index++;
    }

    if (purchaseCount % 2 === 0) {
      sum = sum * 0.8;
    }

    console.log(
      `You purchased ${purchaseCount} items for ${sum.toFixed(2)} leva.`
    );

    average = average + sum;
    sum = 0;
    purchaseCount = 0;
  }

  let avgSum = average / numCustomers;

  console.log(`Average bill per client is: ${avgSum.toFixed(2)} leva.`);
}

easterDecoration([
  "2",
  "basket",
  "wreath",
  "chocolate bunny",
  "Finish",
  "wreath",
  "chocolate bunny",
  "Finish",
]);
