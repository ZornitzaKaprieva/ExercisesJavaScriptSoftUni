// Дадени са 2*n-на брой числа. Първото и второто формират двойка, третото и четвъртото също и т.н.
// Всяка двойка има стойност – сумата от съставящите я числа.
// Напишете програма, която проверява дали всички двойки имат еднаква стойност
// или печата максималната разлика между две последователни двойки.
// Ако всички двойки имат еднаква стойност, отпечатайте "Yes, value={Value}" + стойността.
// В противен случай отпечатайте "No, maxdiff={Difference}" + максималната разлика.

function equalPairs(input) {
  let index = 0;
  let n = Number(input[index]);

  index++;

  let sum = 0;
  let lastSum = 0;
  let counter = 0;
  let maxDifference = 1;

  for (let i = index; i <= n; i++) {
    firstNum = Number(input[index]);
    index++;
    secondNum = Number(input[index]);
    index++;

    sum = firstNum + secondNum;

    if (sum === lastSum) {
      counter++;
    }
    if (maxDifference < Math.abs(lastSum - sum) && i >= 2) {
      maxDifference = Math.abs(lastSum - sum);
    }
    if (sum !== lastSum) {
      lastSum = sum;
    }
  }

  if (counter === n - 1) {
    console.log(`Yes, value=${sum}`);
  } else {
    console.log(`No, maxdiff=${maxDifference}`);
  }
}

equalPairs(["3", "1", "2", "0", "3", "4", "-1"]); //Yes, value=3

equalPairs(["1", "5", "5"]); //Yes, value=10

equalPairs(["2", "-1", "0", "0", "-1"]); //Yes, value=-1

equalPairs(["2", "1", "2", "2", "2"]); //No, maxdiff=1
equalPairs(["2", "-1", "2", "0", "-1"]); //No, maxdiff=2
