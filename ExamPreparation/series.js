// От телевизионна компания ви наемат да създадете програма, която да изчислява дали за клиентите ще е възможно
// да си закупят желаните сериали. Разполагате с бюджет и брой сериали, които потребителят ще желае да закупи.
// Всеки сериал съответно има заглавие и цена.
// Някои от сериалите имат намаление:
// •	Thrones – 50%
// •	Lucifer – 40%
// •	Protector – 30%
// •	TotalDrama – 20%
// •	Area – 10%
// Вход
// От конзолата се четат:
// •	Бюджет  - реално  число в интервала [10.0… 100.0]
// •	Брой сериали - n - цяло положително число в интервала [1… 10]
// За всеки сериал се четат по два реда:
// o	Име на сериал - текст
// o	Цена за сериал -  реално  число в интервала [1.0… 15.0]
// Изход
// На конзолата да се изпише един ред:
// •	Ако бюджета ви е по-голям или равен на цената на сериалите:
// 	"You bought all the series and left with {останали пари} lv."
// •	Ако бюджета ви е по-малък от цената на сериалите:
// 	"You need {нужни пари} lv. more to buy the series!"
// Резултатът да бъде закръглен до втората цифра след десетичния знак.

function series(input) {
  let budget = Number(input[0]);
  let seriesNum = Number(input[1]);

  let index = 2;
  let sum = 0;
  for (let i = index; i <= seriesNum * 2; i++) {
    let name = input[i];
    i++;
    let price = Number(input[i]);

    switch (name) {
      case "Thrones":
        sum += price * 0.5;
        break;
      case "Lucifer":
        sum += price * 0.6;
        break;
      case "Protector":
        sum += price * 0.7;
        break;
      case "TotalDrama":
        sum += price * 0.8;
        break;
      case "Area":
        sum += price * 0.9;
        break;
      default:
        sum += price;
        break;
    }
  }

  let diff = Math.abs(budget - sum);
  if (budget >= sum) {
    console.log(
      `You bought all the series and left with ${diff.toFixed(2)} lv.`
    );
  } else {
    console.log(`You need ${diff.toFixed(2)} lv. more to buy the series!`);
  }
}

series(["10", "3", "Thrones", "5", "Riverdale", "5", "Gotham", "2"]);
