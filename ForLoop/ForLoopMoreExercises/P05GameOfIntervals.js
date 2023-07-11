// Напишете програма, която да пресмята резултата от игра.
// Първо получавате число, което показва колко хода ще продължи играта.
// После за всеки ход на играта ще получавате по едно ново число.
// Според интервала в който попада числото се прибавят точки.
// Ако числото е отрицателно или по-голямо 50, тогава то е невалидно.
// В началото на играта резултата е 0 и на всеки ход се прибавят точки по следният начин:

// •	От 0 до 9  20 % от числото
// •	От 10 до 19  30 % от числото
// •	От 20 до 29  40 % от числото
// •	От 30 до 39  50 точки
// •	От 40 до 50  100 точки
// •	Невалидно число  резултата се дели на 2

// Освен резултата програмата трябва да изкарва статистика за проценти числа в дадените интервали.
// Вход
// Входът се чете от конзолата:
// •	Първи ред - колко хода ще има по време на играта – цяло число в интервала [1...100]
// •	За всеки ход – числата, които се проверяват в кой интервал са – цели числа в интервала [-100...100]
// Изход
// Да се отпечата на конзолата 7 реда:
// •	1ви ред: "{Краен резултат}"
// •	2ри ред: "From 0 to 9: {процент в интервала}%"
// •	3ти ред: "From 10 to 19: {процент в интервала}%"
// •	4ти ред: "From 20 to 29: {процент в интервала}%"
// •	5ти ред: "From 30 to 39: {процент в интервала}%"
// •	6ти ред: "From 40 to 50: {процент в интервала}%"
// •	7ми ред: "Invalid numbers: {процент в интервала}%"
// Всички числа трябва да са форматирана до вторият знак след запетаята.

function gameOfIntervals(input) {
  let numMoves = Number(input[0]);

  let score = 0;

  let countTo9 = 0;
  let countTo19 = 0;
  let countTo29 = 0;
  let countTo39 = 0;
  let countTo50 = 0;
  let countInvalid = 0;

  for (let i = 1; i <= numMoves; i++) {
    let num = Number(input[i]);

    if (num < 0 || num > 50) {
      score = score / 2;
      countInvalid++;
    }

    if (num >= 0 && num <= 9) {
      score += num * 0.2;
      countTo9++;
    } else if (num >= 10 && num <= 19) {
      score += num * 0.3;
      countTo19++;
    } else if (num >= 20 && num <= 29) {
      score += num * 0.4;
      countTo29++;
    } else if (num >= 30 && num <= 39) {
      score += 50;
      countTo39++;
    } else if (num >= 40 && num <= 50) {
      score += 100;
      countTo50++;
    }
  }

  let percentTo9 = (countTo9 / numMoves) * 100;
  let percentTo19 = (countTo19 / numMoves) * 100;
  let percentTo29 = (countTo29 / numMoves) * 100;
  let percentTo39 = (countTo39 / numMoves) * 100;
  let percentTo50 = (countTo50 / numMoves) * 100;
  let percentInvalid = (countInvalid / numMoves) * 100;

  console.log(`${score.toFixed(2)}`);
  console.log(`From 0 to 9: ${percentTo9.toFixed(2)}%`);
  console.log(`From 10 to 19: ${percentTo19.toFixed(2)}%`);
  console.log(`From 20 to 29: ${percentTo29.toFixed(2)}%`);
  console.log(`From 30 to 39: ${percentTo39.toFixed(2)}%`);
  console.log(`From 40 to 50: ${percentTo50.toFixed(2)}%`);
  console.log(`Invalid numbers: ${percentInvalid.toFixed(2)}%`);
}

gameOfIntervals([
  "10",
  "43",
  "57",
  "-12",
  "23",
  "12",
  "0",
  "50",
  "40",
  "30",
  "20",
]);
