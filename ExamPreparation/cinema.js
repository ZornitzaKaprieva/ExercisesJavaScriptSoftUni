// От кино ви наемат да напишете програма, чрез която да разберете дали на една прожекцията ще се запълни залата
// и колко пари ще се изкарат от нея. Получавате места в залата и на всеки следващ ред до команда "Movie time!", колко хора влизат в залата. Цената на един билет е 5 лв. Ако текущия брой хора влезли в залата се дели на 3 без остатък, се прави отстъпка 5лв от общата им сметка.
// Ако в залата се опитат да влязат повече хора от колкото места са останали,
// то се счита че местата са изчерпани и програмата трябва да приключи четенето на вход.
// Вход
// От конзолата се четат:
// •	На първия ред - капацитет на залата - цяло число в интервала [50... 150]
// На всеки следващ ред до команда "Movie time!":
// o	Брой хора влизащи в киното - цяло число в интервала [1… 15]
// Изход
// На конзолата първо да се отпечата един ред:
// •	При получена команда "Movie time!":
//  "There are {останали места} seats left in the cinema."
// •	При изчерпване на местата в залата:
// 	"The cinema is full."
// След това да се отпечата:
// 	"Cinema income - {приходи от залата} lv."

function cinema(input) {
  let index = 0;
  let capacity = Number(input[index]);
  index++;
  let command = input[index];

  let income = 0;
  let isFull = false;
  while (command !== "Movie time!") {
    let peopleNum = Number(command);

    capacity -= peopleNum;
    if (capacity < 0) {
      isFull = true;
      break;
    }

    if (peopleNum % 3 !== 0) {
      income += peopleNum * 5;
    } else {
      income += peopleNum * 5 - 5;
    }

    index++;
    command = input[index];
  }

  if (isFull) {
    console.log("The cinema is full.");
  } else {
    console.log(`There are ${capacity} seats left in the cinema.`);
  }

  console.log(`Cinema income - ${income} lv.`); 
}

cinema(["60", "10", "6", "3", "20", "15", "Movie time!"]);
