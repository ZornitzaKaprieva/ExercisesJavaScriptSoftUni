// Напишете програма, която чете число n, въведено от потребителя
// и отпечатва всички числа ≤ n от редицата: 1, 3, 7, 15, 31, ….
// Всяко следващо число се изчислява като умножим предишното с 2 и добавим 1.

function sequence2kPlus1(input) {
  let num = Number(input[0]);

  let currentNum = 1;

  while (currentNum <= num) {
    console.log(currentNum);
    currentNum = currentNum * 2 + 1;
  }
}

sequence2kPlus1(["8"]);
