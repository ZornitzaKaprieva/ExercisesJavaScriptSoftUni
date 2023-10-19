// Вашата задача е да напишете програма, която да изчислява, дали даден играч е успял да спечели лег.
// (Лег се нарича единична игра на дартс)
// Първоначално играчът започва с 301 точки.
// Играчът хвърля стрелата върху таблото, като за всяко улучено поле, той получава определен брой точки.
// Всяко поле има по три сектора: единичен (Single) сектор от който се взимат броят точки от полето.
// Двоен (Double), от него се взимат удвоените точки от полето и троен (Triple) сектор, точките от който са умножени по 3.
// Получените точки от всеки изстрел се изваждат от началните точки, до достигане на 0.
// Забележка: При изстрел, даващ повече точки от наличните, той се зачита за неуспешен и играчът трябва да хвърля отново,
// докато не уцели точки равни на оставащите или по-малки, такъв удар се счита за успешен.
// Пример: При налични точки 100, удар даващ повече от 100 точки, неуспешен.
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

function darts2(input) {
  let name = input.shift();
  let command = input.shift();

  let score = 301;
  let successfulShots = 0;
  let unsuccessfulShots = 0;
  let isZero = false;
  while (command !== "Retire") {
    let field = command;
    let points = Number(input.shift());

    switch (field) {
      case "Single":
        score -= points;
        if (score > 0) {
          successfulShots++;
        } else if (score == 0) {
          successfulShots++;
          isZero = true;
          break;
        } else if (score < 0) {
          unsuccessfulShots++;
          score += points;
        }
        break;
      case "Double":
        score = score - points * 2;

        if (score > 0) {
          successfulShots++;
        } else if (score == 0) {
          successfulShots++;
          isZero = true;
          break;
        } else if (score < 0) {
          unsuccessfulShots++;
          score += points * 2;
        }
        break;
      case "Triple":
        score = score - points * 3;

        if (score > 0) {
          successfulShots++;
        } else if (score == 0) {
          successfulShots++;
          isZero = true;
          break;
        } else if (score < 0) {
          unsuccessfulShots++;
          score += points * 3;
        }
        break;
    }

    if (isZero) {
      break;
    }

    command = input.shift();
  }

  if (isZero) {
    console.log(`${name} won the leg with ${successfulShots} shots.`);
  } else {
    console.log(
      `${name} retired after ${unsuccessfulShots} unsuccessful shots.`
    );
  }
}

darts2([
  "Michael van Gerwen",
  "Triple",
  "20",
  "Triple",
  "19",
  "Double",
  "10",
  "Single",
  "3",
  "Single",
  "1",
  "Triple",
  "20",
  "Triple",
  "20",
  "Double",
  "20",]);

// darts2([
//   "Stephen Bunting",
//   "Triple",
//   "20",
//   "Triple",
//   "20",
//   "Triple",
//   "20",
//   "Triple",
//   "20",
//   "Triple",
//   "20",
//   "Triple",
//   "20",
//   "Double",
//   "7",
//   "Single",
//   "12",
//   "Double",
//   "1",
//   "Single",
//   "1",
// ]);

// darts2([
//   "Rob Cross",
//   "Triple",
//   "20",
//   "Triple",
//   "20",
//   "Triple",
//   "20",
//   "Triple",
//   "20",
//   "Double",
//   "20",
//   "Triple",
//   "20",
//   "Double",
//   "5",
//   "Triple",
//   "10",
//   "Double",
//   "6",
//   "Retire",
// ]);
