// Вашата задача е да напишете програма, която да изчислява, дали даден играч е успял да спечели лег. (Лег се нарича единична игра на дартс)
// Първоначално играчът започва с 301 точки.
// Играчът хвърля стрелата върху таблото, като за всяко улучено поле, той получава определен брой точки.
// Всяко поле има по три сектора: единичен (Single) сектор от който се взимат броят точки от полето.
// Двоен (Double), от него се взимат удвоените точки от полето и троен (Triple) сектор, точките от който са умножени по 3.
// Получените точки от всеки изстрел се изваждат от началните точки, до достигане на 0.
// Забележка: При изстрел, даващ повече точки от наличните, той се зачита за неуспешен и играчът трябва да хвърля отново,
// докато не уцели точки равни на оставащите или по-малки, такъв удар се счита за успешен.
// Пример: При налични точки 100, удар даващ повече от 100 точки, неуспешен
// При налични точки 100, удар даващ по-малко или равни на 100 точки, успешен
// Вход
// Първоначално се чете един ред:
// •	Името на играча - текст
// След това до получаване на команда "Retire" се четат многократно по два реда:
// 1.	Поле – текст ("Single", "Double" или "Triple")
// 2.	Точки – цяло число в интервала [0… 100]
// Изход
// Играта приключва при въвеждане на команда "Retire" или при изравняване на началните 301 точки към 0. На конзолата трябва да се напечата един ред:
// •	Ако играчът е спечелил лега:
// o	"{името на играча} won the leg with {успешните изстрели} shots."
// •	Ако играчът се е отказал от играта:
// o	"{името на играча} retired after {неуспешни изстрели} unsuccessful shots."

function darts(input) {
  let name = input[0];

  let index = 1;
  let field = input[index];
  index++;
  let points = Number(input[index]);
  let startingPoints = 301;
  let failedShots = 0;
  let successfulShots = 0;
  let isZero = false;

  while (field !== "Retire") {
    switch (field) {
      case "Single":
        points = points;

        if (startingPoints - points >= 0) {
          startingPoints = startingPoints - points;
          successfulShots++;
        } else {
          failedShots++;
        }
        break;
      case "Double":
        points = points * 2;
        if (startingPoints - points >= 0) {
          startingPoints = startingPoints - points;
          successfulShots++;
        } else {
          failedShots++;
        }

        break;
      case "Triple":
        points = points * 3;
        if (startingPoints - points >= 0) {
          startingPoints = startingPoints - points;
          successfulShots++;
        } else {
          failedShots++;
        }

        break;
    }

    if (startingPoints === 0) {
      isZero = true;
      break;
    }

    index++;
    field = input[index];
    index++;
    points = Number(input[index]);
  }

  if (isZero) {
    console.log(`${name} won the leg with ${successfulShots} shots.`);
  } else {
    console.log(`${name} retired after ${failedShots} unsuccessful shots.`);
  }
}

darts([
  "Rob Cross",
  "Triple",
  "20",
  "Triple",
  "20",
  "Triple",
  "20",
  "Triple",
  "20",
  "Double",
  "20",
  "Triple",
  "20",
  "Double",
  "5",
  "Triple",
  "10",
  "Double",
  "6",
  "Retire",
  "",
]);
