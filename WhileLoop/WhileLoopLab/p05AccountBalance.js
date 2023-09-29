// Напишете функция, която пресмята колко общо пари има в сметката, след като направите определен брой вноски.
// Във всеки елемент ще получавате сумата, която трябва да внесете в сметката, до получаване на команда "NoMoreMoney" .
// При всяка получена сума на конзолата трябва да се извежда "Increase: " + сумата и тя да се прибавя в сметката.
// Ако получите число по-малко от 0, на конзолата трябва да се изведе "Invalid operation!" и програмата да приключи.
// Когато програмата приключи трябва да се принтира "Total: " + общата сума в сметката.
// Всички суми, които се печатат, трябва да се форматират до втория знак след десетичната запетая.

function accountBalance(input) {
  let index = 0;
  let deposit = input[index];
  let sum = 0;

  while (deposit !== "NoMoreMoney") {
    let currentDeposit = Number(deposit);

    if (deposit < 0) {
      console.log("Invalid operation!");
      break;
    }

    console.log("Increase: " + currentDeposit.toFixed(2));
    sum += currentDeposit;
    index++;
    deposit = input[index];
  }

  console.log("Total: " + sum.toFixed(2));
}

accountBalance(["5.51", "69.42", "100", "NoMoreMoney"]);
