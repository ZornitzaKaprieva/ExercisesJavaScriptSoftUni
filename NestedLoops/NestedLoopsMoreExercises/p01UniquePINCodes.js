// Да се напише програма, която генерира трицифрени PIN кодове, като цифрите на всеки PIN код са в определен интервал.
// За да бъде валиден един PIN код той трябва да отговаря на следните условия:
// •	Първата и третата цифра трябва да бъдат четни.
// •	Втората цифра трябва да бъде просто число в диапазона [2...7].
// Вход
// От конзолата се четат 3 реда:
// •	Горната граница на първото число - цяло число в диапазона [1...9]
// •	Горната граница на второто число - цяло число в диапазона [1...9]
// •	Горната граница на третото число - цяло число в диапазона [1...9]
// Изход
// Да се отпечатат на конзолата всички валидни трицифрени PIN кодове, чиито цифри отговарят на съответните интервали.

function uniquePINCodes(input) {
  let firstNumMax = Number(input[0]);
  let secNumMax = Number(input[1]);
  let thirdNumMax = Number(input[2]);

  for (let i = 2; i <= firstNumMax; i = i + 2) {
    for (let j = 2; j <= secNumMax; j++) {
      if (j === 2 || j === 3 || j === 5 || j == 7) {
        for (let k = 2; k <= thirdNumMax; k = k + 2) {
          console.log(`${i} ${j} ${k}`);
        }
      }
    }
  }
}

uniquePINCodes(["3", "5", "5", ""]);
// uniquePINCodes([ '8', '2', '8' ]);
