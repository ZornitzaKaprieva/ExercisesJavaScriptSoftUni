// Ани обича да пътува и иска тази година да посети няколко различни дестинации.
// Като си избере дестинация, ще прецени колко пари ще й трябват, за да отиде до там и ще започне да спестява.
// Когато е спестила достатъчно, ще може да пътува.
// Функцията получава масив, като всеки път ще се четат първо дестинацията и минималния бюджет, който ще е нужен за пътуването.
// След това ще се четат няколко суми, които Ани спестява като работи и когато успее да събере достатъчно за пътуването, ще заминава, като на конзолата трябва да се изпише:
//  "Going to {дестинацията}!"
// Когато е посетила всички дестинации, които иска, вместо дестинация ще въведе "End" и програмата ще приключи.

function traveling(input) {
  let index = 0;
  let command = input[index];

  while (command != "End") {
    let destination = command;
    index++;
    let priceDestination = Number(input[index]);
    index++;
    let savedMoney = 0;

    while (priceDestination > savedMoney) {
      let income = Number(input[index]);

      savedMoney += income;

      if (savedMoney >= priceDestination) {
        console.log(`Going to ${command}!`);
        break;
      }

      index++;
      income = Number(input[index]);
    }

    index++;
    command = input[index];
  }
}

traveling([
  "Greece",
  "1000",
  "200",
  "200",
  "300",
  "100",
  "150",
  "240",
  "Spain",
  "1200",
  "300",
  "500",
  "193",
  "423",
  "End",
]);
