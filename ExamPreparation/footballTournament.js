// Задачата ви е да напишете програма, която приема името на отбор и прави статистика за него.
//През един сезон всеки отбор изиграва определен брой футболни срещи, като за всяка среща на отбора се дават точки в зависимост от изхода от срещата.
//Има три възможни изхода от една среща:
// 	W - Отборът е победител и получава 3 точки
// 	D - Срещата е завършила без победител и отборът получава 1 точка
// 	L - Отборът е загубил срещата и не получава точки
// Напишете програма, която приема името на футболен отбор и извежда неговата статистика, на база на изиграните срещи през този сезон. Неговата статистика трябва да включва общия брой спечелени точки през настоящия сезон, подробна статистика за изхода на изиграните игри и процент победи през сезона. Ако отборът по някаква причина не е играл мачове през настоящия сезон се извежда специално съобщение.
// Вход
// От конзолата се четат два реда:
// •	Името на футболния отбор, за който водим статистика - текст
// •	Броя изиграни срещи през настоящия сезон - цяло число в интервала [0… 100]
//  За всяка изиграна среща се прочита отделен ред:
// o	Резултатът от изиграната среща в един от горепосочените формати – символ с възможности 'W', 'D' и 'L'

function footballTournament(input) {
  let index = 0;
  let team = input[index];
  index++;
  let numMatches = Number(input[index]);
  index++;

  let countW = 0;
  let countD = 0;
  let countL = 0;
  let score = 0;
  for (let i = index; i <= numMatches + 1; i++) {
    let result = input[i];

    switch (result) {
      case "W":
        countW++;
        score += 3;
        break;
      case "D":
        countD++;
        score += 1;
        break;
      case "L":
        countL++;
        score += 0;
        break;
    }
  }

  let percentW = (countW / numMatches) * 100;

  if (countW === 0 && countD === 0 && countL === 0) {
    console.log(`${team} hasn't played any games during this season.`);
  } else {
    console.log(`${team} has won ${score} points during this season.`);
    console.log("Total stats:");
    console.log(`## W: ${countW}`);
    console.log(`## D: ${countD}`);
    console.log(`## L: ${countL}`);
    console.log(`Win rate: ${percentW.toFixed(2)}%`);
  }
}

footballTournament(["Barcelona", "7", "W", "D", "L", "L", "W", "W", "D"]);
// footballTournament([
//     'Liverpool', '10',
//     'W',         'D',
//     'D',         'W',
//     'L',         'W',
//     'D',         'D',
//     'W',         'W'
//   ]);
