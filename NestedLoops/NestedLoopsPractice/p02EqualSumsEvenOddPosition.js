// Напишете функция, която получава две шестцифрени цели числа в диапазона от 100000 до 300000.
// Винаги първото въведено число ще бъде по малко от второто.
// На конзолата да се отпечатат на 1 ред разделени с интервал всички числа,
// които се намират между двете, прочетени от конзолата числа и отговарят на следното условие:
// •	сумата от цифрите на четни и нечетни позиции да са равни.
// Ако няма числа, отговарящи на условието на конзолата не се извежда резултат.

function equalSumsEvenOddPosition(input) {
  let firstNum = Number(input[0]);
  let secondNum = Number(input[1]);

  let result = "";

  for (let currentNum = firstNum; currentNum <= secondNum; currentNum++) {
    let currentNumString = currentNum.toString();

    let oddSum = 0;
    let evenSum = 0;

    for (let index = 0; index < currentNumString.length; index++) {
      let currentDigit = Number(currentNumString[index]);

      let position = index + 1;

      if (position % 2 === 0) {
        evenSum += currentDigit;
      } else {
        oddSum += currentDigit;
      }
    }

    if (oddSum === evenSum) {
      result += `${currentNumString} `;
    }
  }

  console.log(result);
}

equalSumsEvenOddPosition(["100000", "100050"]);
