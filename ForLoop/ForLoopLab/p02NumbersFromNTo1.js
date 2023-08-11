// Напишете функция, която получава положително число n, въведено от потребителя
// и печата числата от n до 1 в обратен ред. Въведеното число n, винаги ще бъде по-голямо от 1.

function numbersFromNTo1(input) {
  let n = Number(input[0]);

  for (let i = n; i >= 1; i--) {
    console.log(i);
  }
}

numbersFromNTo1(["2"]);
