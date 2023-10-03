// На благотворително събитие плащанията за закупените продукти винаги се редуват:
// плащане в брой и плащане с карта. Установени са следните правила за заплащане:
// •	Ако продуктът надвишава 100лв., за него не може да се плати в брой
// •	Ако продуктът е на цена под 10лв., за него не може да се плати с кредитна карта
// Програмата приключва или след като получим команда "End" или след като средствата бъдат събрани.
// Вход
// От конзолата се четат:
// •	Сумата, която се очаква да бъде събрана от продажбите - цяло число в интервала [1 ... 10000]
// На всеки следващ ред, до получаване на командата "End" или докато не се съберат нужните средства:
// цените на предметите, които ще бъдат закупени - цяло число в интервала [1 ... 500]
// Изход
// На конзолата да се отпечата:
// •	При успешна транзакция: "Product sold!"
// •	При неуспешна транзакция: "Error in transaction!"
// •	Ако сумата на всички закупени продукти надвиши или достигне очакваната сума, програмата трябва да приключи и на конзолата да се изпишат два реда:
// o	"Average CS: {средно плащане в кеш на човек}"
// o	"Average CC: {средно плащане с карта на човек}"
//               Плащанията трябва да бъдат форматирани до втората цифра след десетичния знак.
// •	При получаване на команда "End", да се изпише един ред:
// o	"Failed to collect required money for charity."

function reportSystem(input) {
  let index = 0;
  let expectedAmount = Number(input[index]);
  index++;
  let command = input[index];

  let sum = 0;
  let cashSum = 0;
  let cardSum = 0;
  let transactionCount = 0;
  let cashCount = 0;
  let cardCount = 0;
  let isEnough = false;
  while (command !== "End") {
    let price = Number(command);

    transactionCount++;
    if (transactionCount % 2 !== 0) {
      if (price > 100) {
        console.log("Error in transaction!");
      } else {
        console.log("Product sold!");
        sum += price;
        cashSum += price;
        cashCount++;
      }
    } else {
      if (price < 10) {
        console.log("Error in transaction!");
      } else {
        console.log("Product sold!");
        sum += price;
        cardSum += price;
        cardCount++;
      }
    }

    if (expectedAmount <= sum) {
      isEnough = true;
      break;
    }

    index++;
    command = input[index];
  }

  if (!isEnough) {
    console.log("Failed to collect required money for charity.");
  } else {
    let avgCash = cashSum / cashCount;
    let avgCard = cardSum / cardCount;
    console.log(`Average CS: ${avgCash.toFixed(2)}`);
    console.log(`Average CC: ${avgCard.toFixed(2)}`);
  }
}

// reportSystem([ '600', '86', '150', '98', '227', 'End' ]); //ok
reportSystem(["500", "120", "8", "63", "256", "78", "317"]);
