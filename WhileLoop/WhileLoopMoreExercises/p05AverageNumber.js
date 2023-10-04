// Напишете програма, която прочита едно число n, след това прочита n на брой цели числа
// и принтира средно аритметичното на тяхната сума число, форматирано до втората цифра след десетични знак.

function averageNumber(input) {
  let n = Number(input[0]);
  let index = 1;
  let currentNum = Number(input[index]);

  let sum = 0;

  while (index <= n) {
    sum = sum + currentNum;
    index++;
    currentNum = Number(input[index]);
  }

  let avgSum = sum / n;
  console.log(avgSum.toFixed(2));
}

averageNumber(["2", "6", "4"]);
