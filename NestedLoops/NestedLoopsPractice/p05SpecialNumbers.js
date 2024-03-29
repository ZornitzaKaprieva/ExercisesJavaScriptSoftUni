// Да се напише програма, която чете едно цяло число N, въведено от потребителя,
// и генерира всички възможни "специални" числа от 1111 до 9999.
// За да бъде "специално" едно число, то трябва да отговаря на следното условие:
// •	N да се дели на всяка една от неговите цифри без остатък.
// Пример: при N = 16, 2418 е специално число:
// •	16 / 2 = 8 без остатък
// •	16 / 4 = 4 без остатък
// •	16 / 1 = 16 без остатък
// •	16 / 8 = 2 без остатък
// Вход
// Входът се чете от конзолата и се състои от едно цяло число в интервала [1…600000]
// Изход
// На конзолата трябва да се отпечатат всички "специални" числа, разделени с интервал

function specialNumbers(input) {
  let num = Number(input[0]);

  let isValid = false;
  let specialNum = "";

  for (let i1 = 1; i1 <= 9; i1++) {
    for (let i2 = 1; i2 <= 9; i2++) {
      for (let i3 = 1; i3 <= 9; i3++) {
        for (let i4 = 1; i4 <= 9; i4++) {
          if (
            num % i1 === 0 &&
            num % i2 === 0 &&
            num % i3 === 0 &&
            num % i4 === 0
          ) {
            specialNum += `${i1}${i2}${i3}${i4} `;
            isValid = true;
          }
        }
      }
    }
  }

  if (isValid) {
    console.log(specialNum);
  }
}

specialNumbers(["16"]);
