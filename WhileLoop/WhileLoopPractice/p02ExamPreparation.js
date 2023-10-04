// Напишете функция, в която Марин решава задачи от изпити докато не получи съобщение "Enough" от лектора си. При всяка решена задача той получава оценка. Функцията трябва да приключи прочитането на данни при команда "Enough" или ако Марин получи определеният брой незадоволителни оценки.
// Незадоволителна е всяка оценка, която е по-малка или равна на 4.
// Вход
// •	На първи ред - брой незадоволителни оценки - цяло число в интервала [1…5]
// •	След това многократно се четат по два реда:
// o	Име на задача - текст (низ)
// o	Оценка - цяло число в интервала [2…6]
// Изход
// •	Ако Марин стигне до командата "Enough", отпечатайте на 3 реда:
// o	"Average score: {средна оценка}"
// o	"Number of problems: {броя на всички задачи}"
// o	"Last problem: {името на последната задача}"
// •	Ако получи определеният брой незадоволителни оценки:
// o	"You need a break, {брой незадоволителни оценки} poor grades."
// Средната оценка да бъде форматирана до втория знак след десетичната запетая.

function examPreparation(input) {
  let permissibleUnsatisfactoryGrades = Number(input[0]);

  let index = 1;
  let name = input[index];
  index++;
  let result = Number(input[index]);

  let satisfactoryGradesCount = 0;
  let unsatisfactoryGradesCount = 0;
  let gradesCount = 0;
  let sumGrade = 0;
  let lastTask = "";
  let isFailed = false;

  while (name !== "Enough") {
    lastTask = name;

    if (result <= 4) {
      unsatisfactoryGradesCount++;
    } else {
      satisfactoryGradesCount++;
    }

    if (unsatisfactoryGradesCount === permissibleUnsatisfactoryGrades) {
      isFailed = true;
      break;
    }

    sumGrade = sumGrade + result;
    gradesCount++;

    index++;
    name = input[index];
    index++;
    result = Number(input[index]);
  }

  let avgScore = sumGrade / gradesCount;

  if (isFailed) {
    console.log(`You need a break, ${unsatisfactoryGradesCount} poor grades.`);
  } else {
    console.log(`Average score: ${avgScore.toFixed(2)}`);
    console.log(`Number of problems: ${gradesCount}`);
    console.log(`Last problem: ${lastTask}`);
  }
}

examPreparation([
  "3",
  "Money",
  "6",
  "Story",
  "4",
  "Spring Time",
  "5",
  "Bus",
  "6",
  "Enough",
]);
