// За Лора думите притежават голяма сила. Тя те моли да измислиш алгоритъм, с който да откриеш коя е "най-силната" дума.
// До получаване на команда "End of words" ще се четат от конзолата думи. За да се открие силата на всяка една,
// трябва да се намери сборът от ASCII стойностите на символите, от които се състои думата.
// Ако започва с гласна буква - 'a', 'e', 'i', 'o', 'u', 'y' (или техните еквивалентни главни букви),
// полученият сбор трябва да се умножи по дължината на думата, в противен случай, да се раздели на дължината и да се закръгли до най-близкото цяло число надолу.
// Вход
// До получаване на команда "End of words" се чете по един ред от конзолата:
// •	дума – текст
// Изход
// След приключване на програмата се печата на един ред думата с "най-голяма сила":
// •	"The most powerful word is {думата с най-голяма сила} - {силата на думата}"

function theMostPowerfulWord(input) {
  let word = input.shift();

  let mostPowerfulWord = "";
  let asciiPower = 0;
  while (word !== "End of words") {
    let currentWord = word;

    let charSum = 0;
    let currentWordLength = currentWord.length;
    for (let i = 0; i < currentWordLength; i++) {
      let charLetter = word.charCodeAt(i);
      charSum += charLetter;
    }

    let startLetter = word.substring(0, 1);
    if (
      startLetter === "a" ||
      startLetter === "A" ||
      startLetter === "e" ||
      startLetter === "E" ||
      startLetter === "i" ||
      startLetter === "I" ||
      startLetter === "o" ||
      startLetter === "O" ||
      startLetter === "u" ||
      startLetter === "U" ||
      startLetter === "y" ||
      startLetter === "Y"
    ) {
      charSum = charSum * currentWordLength;
    } else {
      charSum = Math.round(charSum / currentWordLength);
    }

    if (charSum > asciiPower) {
      asciiPower = charSum;
      mostPowerfulWord = word;
    }

    charSum = 0;
    word = input.shift();
  }

  console.log(`The most powerful word is ${mostPowerfulWord} - ${asciiPower}`);
}

theMostPowerfulWord([
  "The",
  "Most",
  "Powerful",
  "Word",
  "Is",
  "Experience",
  "End of words",
]);
