// Семейство Иванови планират семейната си почивка.
//Вашата задача е да напишете програма, която да изчислява дали предвидения от тях бюджет ще им стигне,
//като знаете колко нощувки са планирали, каква е цената за нощувка и колко процента от бюджета са предвидили за допълнителни разходи.
//Трябва да се има предвид, че ако броят на нощувките е по-голям от 7, цената за нощувка се намаля с 5%.
// Вход
// От конзолата се четат 4 реда:
// •	Бюджетът, с който разполагат – реално число в интервала [1.00 … 10000.00]
// •	Брой нощувки – цяло число в интервала [0 … 1000]
// •	Цена за нощувка – реално число в интервала [1.00 … 500.00]
// •	Процент за допълнителни разходи – цяло число в интервала [0 … 100]
// Изход
// Отпечатването на конзолата зависи от резултата:
// •	Ако сумата е достатъчна:
// o	"Ivanovi will be left with {останали пари след почивката} leva after vacation."
// •	Ако НЕ е достигната сумата:
// o	"{парите нужни до достигане на целта} leva needed."
// Сума трябва да се форматира до втората цифра след десетичния знак.

function familyTrip(input) {
  let budget = Number(input[0]);
  let nightsNum = Number(input[1]);
  let nights1Price = Number(input[2]);
  let percentOtherCosts = Number(input[3]);

  if (nightsNum > 7) {
    nights1Price = nights1Price * 0.95;
  }

  let nightsPrice = nightsNum * nights1Price;
  let otherCosts = (percentOtherCosts / 100) * budget;
  let sumNeeded = nightsPrice + otherCosts;
  let diff = Math.abs(budget - sumNeeded);

  if (budget >= sumNeeded) {
    console.log(
      `Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`
    );
  } else {
    console.log(`${diff.toFixed(2)} leva needed.`);
  }
}

familyTrip(["800.50", "8", "100", "2"]);
