// Режисьорът на голяма кино продукция иска да разбере дали бюджетът, който са му отпуснали ще стигне за заснемане на филма. Помогнете му, като напишете програма, която изчислява колко ще му струва да заснеме филма, като знаете колко излиза един снимачен ден. Цената за един ден се определя от сезона и дестинацията:
//             Дестинация
// Сезон	Dubai	    Sofia	    London
// Winter	45 000 lv.	17 000 lv.	24 000 lv.
// Summer	40 000 lv.	12 500 lv.	20 250 lv.
// Съществуват следните данъчни облекчения/облагания:
// •	Ако дестинацията е Дубай – 30% отстъпка от крайната цена
// •	Ако дестинацията е София – цената се оскъпява с 25%
// Вход
// От конзолата се четат 4 реда:
// 1.	Бюджет на филма – реално число в диапазона [100 000.0… 2 000 000.0]
// 2.	Дестинация – текст, с възможности "Dubai", "Sofia" и "London"
// 3.	Сезон – текст, с възможности "Summer" и "Winter"
// 4.	Брой дни  – цяло число в диапазона [1… 40]
// Изход
// На конзолата да се отпечата един ред:
// •	Ако бюджета е достатъчен:
//      "The budget for the movie is enough! We have {остатък от бюджета} leva left!"
// •	  Ако бюджета НЕ е достатъчен:
//      "The director needs {нужна сума} leva more!"
// Резултатът да се закръгли до втората цифра след десетичния знак.

function movieDestination(input) {
  let budget = Number(input[0]);
  let destination = input[1];
  let season = input[2];
  let days = Number(input[3]);

  let expensesForADay = 0;
  switch (destination) {
    case "Dubai":
      switch (season) {
        case "Winter":
          expensesForADay = 45000;
          break;
        case "Summer":
          expensesForADay = 40000;
          break;
      }
      break;
    case "Sofia":
      switch (season) {
        case "Winter":
          expensesForADay = 17000;
          break;
        case "Summer":
          expensesForADay = 12500;
          break;
      }
      break;
    case "London":
      switch (season) {
        case "Winter":
          expensesForADay = 24000;
          break;
        case "Summer":
          expensesForADay = 20250;
          break;
      }
      break;
  }

  let sumNeeded = expensesForADay * days;
  if (destination === "Dubai") {
    sumNeeded = sumNeeded * 0.7;
  }

  if (destination === "Sofia") {
    sumNeeded += sumNeeded * 0.25;
  }

  let diff = Math.abs(budget - sumNeeded);
  if (budget >= sumNeeded) {
    console.log(
      `The budget for the movie is enough! We have ${diff.toFixed(
        2
      )} leva left!`
    );
  } else {
    console.log(`The director needs ${diff.toFixed(2)} leva more!`);
  }
}

movieDestination(["400000", "Sofia", "Winter", "20", ""]);
