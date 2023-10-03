// Напишете функция, която до получаване на командата "Stop",
// чете цели числа, и намира най-малкото измежду тях.
// Въвежда се по едно число на ред.

function minNumber(input) {
  let index = 0;
  let num = input[index];

  let minNum = Number.MAX_SAFE_INTEGER;

  while (num !== "Stop") {
    let currentNum = Number(num);

    if (currentNum < minNum) {
      minNum = currentNum;
    }

    index++;
    num = input[index];
  }

  console.log(minNum);
}

minNumber(["45", "-20", "7", "99", "Stop"]);
