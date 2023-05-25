// Поканени сте от академията да напишете софтуер, който да пресмята точките за актьор/актриса.
// Академията ще ви даде първоначални точки за актьора. След това всеки оценяващ ще дава своята оценка.
// Точките, които актьора получава се формират от: дължината на името на оценяващия умножено по точките, които дава делено на две.
// Ако резултатът в някой момент надхвърли 1250.5 програмата трябва да прекъсне и да се отпечата, че дадения актьор е получил номинация.
// Вход
// •	Име на актьора - текст
// •	Точки от академията - реално число в интервала [2.0... 450.5]
// •	Брой оценяващи n - цяло число в интервала[1… 20]
// На следващите n-на брой реда:
// o	Име на оценяващия - текст
// o	Точки от оценяващия - реално число в интервала [1.0... 50.0]
// Изход
// Да се отпечата на конзолата един ред:
// •	Ако точките са над 1250.5:
// "Congratulations, {име на актьора} got a nominee for leading role with {точки}!"
// •	Ако точките не са достатъчни:
// 	"Sorry, {име на актьора} you need {нужни точки} more!"
// Резултатът да се форматирана до първата цифра след десетичния знак!

function oscars(input) {
  let actorName = input[0];
  let academyPoints = Number(input[1]);
  let numEvaluators = Number(input[2]);

  for (let i = 3; i < input.length; i+= 2) { // i+= 2 - обработваме информацията по двойки
    let evaluatorName = input[i];
    let evaluatorPoints = Number(input[i + 1]);
    let evaluatorNameLength = evaluatorName.length;

    let pointsResult = (evaluatorNameLength * evaluatorPoints) / 2;

    academyPoints += pointsResult;

    if (academyPoints > 1250.5) {
      console.log(
        `Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`
      );
      return; //цялата програма спира да се изпълнява
    }
  }

  let diff = 1250.5 - academyPoints;

  console.log(`Sorry, ${actorName} you need ${diff.toFixed(1)} more!`);
}

oscars([
  "Zahari Baharov",
  "205",
  "4",
  "Johnny Depp",
  "45",
  "Will Smith",
  "29",
  "Jet Lee",
  "10",
  "Matthew Mcconaughey",
  "39",
]);
