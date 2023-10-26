// Наети сте от "SoftUni Studios" да напишете програма която пресмята потенциалната печалба от продажбата на билети за филм.
// Прожекцията на филма трае предварително зададен брой дни, като всеки ден се продават определен брой билети.
// Цената на 1 билет се определя от студиото. За излъчване на продукцията, определен процент от общия приход остава за киното.
// Вход
// От конзолата се четат 5 реда:
// 1.	Име на филм - текст
// 2.	Брой дни - цяло число в диапазона [1… 90]
// 3.	Брой билети  - цяло число в диапазона [100… 100000]
// 4.	Цена на билет - реално число в диапазона [5.0… 25.0]
// 5.	Процент за киното - цяло число в диапазона [5... 35]
// Изход
// Да се отпечата на конзолата прихода от продажбите, в следния формат:
// •	"The profit from the movie {име на филм} is {приход на студиото} lv."
// Цената на прихода да бъде форматирана до втората цифра след десетичния знак.

function movieProfit(input) {
  let movieName = input[0];
  let daysNum = Number(input[1]);
  let ticketsNum = Number(input[2]);
  let ticketPrice = Number(input[3]);
  let cinemaPercent = Number(input[4]);

  let sum = daysNum * ticketsNum * ticketPrice;
  let cinemaDecimal = (cinemaPercent / 100) * sum;

  let income = sum - cinemaDecimal;
  console.log(
    `The profit from the movie ${movieName} is ${income.toFixed(2)} lv.`
  );
}

movieProfit(["The Programmer", "20", "500", "7.50", "7", ""]);
