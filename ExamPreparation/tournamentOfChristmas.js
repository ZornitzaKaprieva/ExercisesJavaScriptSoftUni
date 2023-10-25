// Напишете програма, която проследява представянето на вашия отбор на благотворителен коледен турнир.
// Всеки ден получавате имена на игри до команда "Finish". Със спечелването на всяка една игра печелите по 20лв. за благотворителност.
// Трябва да изчислите колко пари сте спечелили на края на деня.
// Ако имате повече спечелени игри, отколкото загубени – вие сте победители този ден и увеличавате парите от него с 10%.
// При приключване на турнира ако през повечето дни сте били победители печелите турнира и увеличавате всичките спечелени пари с 20%.
// Никога няма да имате равен брой спечелени и загубени игри.
// Вход
// Първоначално от конзолата се прочита броя дни на турнира – цяло число в интервала [1… 20]
// До получаване на командата "Finish" се чете:
// •	Спорт  – текст
// За всеки спорт се прочита:
// o	Резултат  – текст с възможности: "win" или "lose"
// Изход
// Накрая се отпечатва един ред:
// •	Ако сте спечелили турнира:
//      	"You won the tournament! Total raised money: {спечелените пари}"
// •	Ако сте загубили на турнира:
// "You lost the tournament! Total raised money: {спечелените пари}"
// Парите да бъдат форматирани до втората цифра след десетичния знак.

function tournamentOfChristmas(input) {
  let days = Number(input.shift());

  let dayWinCount = 0;
  let dayLoseCount = 0;
  let raisedMoneySum = 0;
  for (let i = 0; i < days; i++) {
    let command = input.shift();

    let raisedMoneyPerDay = 0;
    let winCount = 0;
    let loseCount = 0;
    while (command !== "Finish") {
      let sport = command;
      let result = input.shift();

      if (result === "win") {
        raisedMoneyPerDay += 20;
        winCount++;
      } else if (result === "lose") {
        loseCount++;
      }

      command = input.shift();
    }

    if (winCount > loseCount) {
      raisedMoneyPerDay += raisedMoneyPerDay * 0.1;
      dayWinCount++;
    } else {
      dayLoseCount++;
    }

    raisedMoneySum += raisedMoneyPerDay;
  }

  if (dayWinCount > dayLoseCount) {
    raisedMoneySum += raisedMoneySum * 0.2;
    console.log(
      `You won the tournament! Total raised money: ${raisedMoneySum.toFixed(2)}`);
  } else {
    console.log(`You lost the tournament! Total raised money: ${raisedMoneySum.toFixed(2)}`);
  }
}

tournamentOfChristmas([
  "2",
  "volleyball",
  "win",
  "football",
  "lose",
  "basketball",
  "win",
  "Finish",
  "golf",
  "win",
  "tennis",
  "win",
  "badminton",
  "win",
  "Finish",
]);
