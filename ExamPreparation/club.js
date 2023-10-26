// Времето се затопля и клубовете пускат обещаващи промоции.
//Напишете програма, която да изчислява приходите на един клуб за вечерта и дали е достигната желаната печалба,
//като знаете следните условия: цената на един коктейл е дължината неговото име.
//Ако цената на една поръчка е нечетно число, има 25% отстъпка от цената на поръчката.
// Вход
// От конзолата се четат:
// •	На първия ред – желаната печалба на клуба - реално число в интервала [1.00... 15000.00]
// Поредица от два реда до получаване на командата "Party!" или до достигане на желаната печалба:
// o	Име на коктейла – текст
// o	Брой на коктейлите за поръчката – цяло число в интервала [1… 50]
// Изход
// На конзолата първо да се отпечата един ред:
// •	При получена команда "Party!":
//  "We need {недостигаща сума} leva more."
// •	При достигане на желаната печалба:
// 	"Target acquired."
// След това да се отпечата:
// 	"Club income - {приходи от клуба} leva."
// Парите да бъдат форматирани до втората цифра след десетичния знак.

function club(input) {
  let index = 0;
  let desiredProfit = Number(input[index]);
  index++;

  let command = input[index]; //Cocktail name

  let sum = 0;
  let targetAcquired = false;

  while (command !== "Party!") {
    let cocktailName = command;
    index++;
    let cocktailsNum = Number(input[index]);
    index++;

    let price = cocktailName.length * cocktailsNum;
    if (price % 2 !== 0) {
      price = price * 0.75;
    }

    sum += price;
    if (sum >= desiredProfit) {
      targetAcquired = true;
      break;
    }

    command = input[index];
  }

  if (targetAcquired === true) {
    console.log("Target acquired.");
  } else {
    let diff = desiredProfit - sum;
    console.log(`We need ${diff.toFixed(2)} leva more.`);
  }

  console.log(`Club income - ${sum.toFixed(2)} leva.`);
}

//club(['500', 'Bellini', '6', 'Bamboo', '7', 'Party!']);
club(["100", "Sidecar", "7", "Mojito", "5", "White Russian", "10"]);
