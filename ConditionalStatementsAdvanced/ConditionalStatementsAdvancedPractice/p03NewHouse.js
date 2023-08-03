// Марин и Нели си купуват къща не далеч от София. Нели толкова много обича цветята, че Ви убеждава да напишете функция, която да изчисли колко  ще им струва, да си засадят определен брой цветя и дали наличния бюджет ще им е достатъчен. Различните цветя са с различни цени.
// цвете	                Роза	Далия	Лале	Нарцис	Гладиола
// Цена на брой в лева	      5	    3.80	2.80	  3	      2.50
// Съществуват следните отстъпки:
// •	Ако Нели купи повече от 80 Рози - 10% отстъпка от крайната цена
// •	Ако Нели купи повече от 90  Далии - 15% отстъпка от крайната цена
// •	Ако Нели купи повече от 80 Лалета - 15% отстъпка от крайната цена
// •	Ако Нели купи по-малко от 120 Нарциса - цената се оскъпява с 15%
// •	Ако Нели Купи по-малко от 80 Гладиоли - цената се оскъпява с 20%
// Функцията получава 3 аргумента:
// •	Вид цветя - текст с възможности - "Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"
// •	Брой цветя - цяло число в интервала [10…1000]
// •	Бюджет - цяло число в интервала [50…2500]
// Да се отпечата на конзолата на един ред:
// •	Ако бюджета им е достатъчен - "Hey, you have a great garden with {броя цвета} {вид цветя} and {останалата сума} leva left."
// •	Ако бюджета им е НЕ достатъчен - "Not enough money, you need {нужната сума} leva more."
// Сумата да бъде форматирана до втория знак след десетичната запетая.

function newHouse(input) {
  let flower = input[0];
  let numberFlowers = Number(input[1]);
  let budget = Number(input[2]);

  let priceRoses = 5 * numberFlowers;
  let priceDahlias = 3.8 * numberFlowers;
  let priceTulips = 2.8 * numberFlowers;
  let priceNarcissus = 3 * numberFlowers;
  let priceGladiolus = 2.5 * numberFlowers;

  let sum = 0;

  switch (flower) {
    case "Roses":
      sum = priceRoses;

      if (numberFlowers > 80) {
        sum = priceRoses * 0.9;
      }

      break;

    case "Dahlias":
      sum = priceDahlias;

      if (numberFlowers > 90) {
        sum = priceDahlias * 0.85;
      }

      break;

    case "Tulips":
      sum = priceTulips;

      if (numberFlowers > 80) {
        sum = priceTulips * 0.85;
      }

      break;

    case "Narcissus":
      sum = priceNarcissus;

      if (numberFlowers < 120) {
        sum = priceNarcissus + priceNarcissus * 0.15;
      }

      break;

    case "Gladiolus":
      sum = priceGladiolus;

      if (numberFlowers < 80) {
        sum = priceGladiolus + priceGladiolus * 0.2;
      }

      break;
  }

  let diff = Math.abs(budget - sum);

  if (budget >= sum) {
    console.log(
      `Hey, you have a great garden with ${numberFlowers} ${flower} and ${diff.toFixed(
        2
      )} leva left.`
    );
  } else {
    console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
  }
}

newHouse(["Roses", "55", "250"]);
