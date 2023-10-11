// Магазин за компютърни игри ви наема за да направите статистика на процента продажби на игрите от последния месец,
//като изчислите по колко процента от общите продажби са за някоя от игрите.
// Процентите трябва да бъдат разделени на четири части, три заглавия на игри и всички останали :
// •	Hearthstone
// •	Fornite
// •	Overwatch
// •	Others
// Вход
// От конзолата се четат:
// •	Брой продадени игри- n - цяло положително число в интервала [1… 100]
// За следващите n реда се чете по един ред:
// o	Име на игра - текст
// Изход
// На конзолата да се изпишат четири реда:
// 	"Hearthstone - {процент продажби на Hearthstone}%"
// 	"Fornite - {процент продажби на Fornite}%"
// 	"Overwatch - {процент продажби на Overwatch}%"
// 	"Others - {процент продажби на всички останали игри}%"
// Резултатът да бъде закръглен до втората цифра след десетичния знак.

function pcGameShop(input) {
  let gamesSold = Number(input[0]);

  let countHearthstone = 0;
  let countFornite = 0;
  let countOverwatch = 0;
  let countOthers = 0;

  for (let i = 1; i <= gamesSold; i++) {
    let gameName = input[i];

    switch (gameName) {
      case "Hearthstone":
        countHearthstone++;
        break;
      case "Fornite":
        countFornite++;
        break;
      case "Overwatch":
        countOverwatch++;
        break;
      default:
        countOthers++;
        break;
    }
  }

  let percentHearthstone = (countHearthstone / gamesSold) * 100;
  let percentFornite = (countFornite / gamesSold) * 100;
  let percentOverwatch = (countOverwatch / gamesSold) * 100;
  let percentOthers = (countOthers / gamesSold) * 100;

  console.log(`Hearthstone - ${percentHearthstone.toFixed(2)}%`);
  console.log(`Fornite - ${percentFornite.toFixed(2)}%`);
  console.log(`Overwatch - ${percentOverwatch.toFixed(2)}%`);
  console.log(`Others - ${percentOthers.toFixed(2)}%`);
}

pcGameShop(["4", "Hearthstone", "Fornite", "Overwatch", "Counter-Strike"]);
