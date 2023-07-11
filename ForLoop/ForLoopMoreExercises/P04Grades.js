// Напишете програма, която да пресмята статистика на оценки от изпит.
// В началото програмата получава броят на студентите явили се на изпита и за всеки студент неговата оценка.
// На края програмата трябва да изпечата процента на студенти с оценка между 2.00 и 2.99, между 3.00 и 3.99, между 4.00 и 4.99, 5.00 или повече.
// Също така и средният успех на изпита.
// Вход
// От конзолата се четат поредица от числа, всяко на отделен ред:
// •	На първия ред – броя на студентите явили се на изпит – цяло число в интервала [1...1000]
// •	За всеки един студент на отделен ред – оценката от изпита – реално число в интервала [2.00...6.00]
// Изход
// Да се отпечатат на конзолата 5 реда, които съдържат следната информация:
// Ред 1 -	"Top students: {процент студенти с успех 5.00 или повече}%"
// Ред 2 -	"Between 4.00 and 4.99: {между 4.00 и 4.99 включително}%"
// Ред 3 -	"Between 3.00 and 3.99: {между 3.00 и 3.99 включително}%"
// Ред 4 -	"Fail: {по-малко от 3.00}%"
// Ред 5 -	"Average: {среден успех}"
// Всички числа трябва да са форматирани до вторият знак след десетичната запетая.

function grades(input) {
  let numStudents = Number(input[0]);

  let students5PlusCount = 0;
  let students4PlusCount = 0;
  let students3PlusCount = 0;
  let students3minusCount = 0;
  let sumGrades = 0;

  for (let i = 1; i <= numStudents; i++) {
    let grade = Number(input[i]);

    sumGrades += grade;

    if (grade < 3) {
      students3minusCount++;
    } else if (grade < 4) {
      students3PlusCount++;
    } else if (grade < 5) {
      students4PlusCount++;
    } else if (grade >= 5) {
      students5PlusCount++;
    }

  }

  let percentStudents5Plus = (students5PlusCount / numStudents) * 100;
  let percentStudents4Plus = (students4PlusCount / numStudents) * 100;
  let percentStudents3Plus = (students3PlusCount / numStudents) * 100;
  let percentStudents3minus = (students3minusCount / numStudents) * 100;
  let avgGrade = sumGrades / numStudents;

  console.log(`Top students: ${percentStudents5Plus.toFixed(2)}%`);
  console.log(`Between 4.00 and 4.99: ${percentStudents4Plus.toFixed(2)}%`);
  console.log(`Between 3.00 and 3.99: ${percentStudents3Plus.toFixed(2)}%`);
  console.log(`Fail: ${percentStudents3minus.toFixed(2)}%`);
  console.log(`Average: ${avgGrade.toFixed(2)}`);
}

grades([
  "10",
  "3",
  "2.99",
  "5.68",
  "3.01",
  "4",
  "4",
  "6",
  "4.5",
  "2.44",
  "5",
  "",
]);
