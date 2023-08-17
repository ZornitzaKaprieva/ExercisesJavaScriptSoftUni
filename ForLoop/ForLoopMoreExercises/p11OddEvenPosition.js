// Напишете програма, която чете n-на брой числа, въведени от потребителя,
// и пресмята сумата, минимума и максимума на числата на четни и нечетни позиции (броим от 1).
// Когато няма минимален / максимален елемент, отпечатайте "No".
// Изходът да се форматира в следния вид:
// "OddSum=" + {сума на числата на нечетни позиции},
// "OddMin=" + { минимална стойност на числата на нечетни позиции } / {“No”},
// "OddMax=" + { максимална стойност на числата на нечетни позиции } / {“No”},
// "EvenSum=" + { сума на числата на четни позиции },
// "EvenMin=" + { минимална стойност на числата на четни позиции } / {“No”},
// "EvenMax=" + { максимална стойност на числата на четни позиции } / {“No”}
// Всяко число трябва да е форматирано до втория знак след десетичната запетая.

function oddEvenPosition(input) {
  let num = Number(input[0]);

  let evenSum = 0;
  let oddSum = 0;

  let evenMin = Number.MAX_SAFE_INTEGER;
  let oddMin = Number.MAX_SAFE_INTEGER;

  let evenMax = Number.MIN_SAFE_INTEGER;
  let oddMax = Number.MIN_SAFE_INTEGER;

  let evenCount = 0;
  let oddCount = 0;

  for (let i = 1; i <= num; i++) {
    let currentNum = Number(input[i]);

    if (i % 2 === 0) {
      evenSum += currentNum;
      evenCount++;

      if (currentNum <= evenMin) {
        evenMin = currentNum;
      }

      if (currentNum > evenMax) {
        evenMax = currentNum;
      }
    } else {
      oddSum += currentNum;
      oddCount++;

      if (currentNum <= oddMin) {
        oddMin = currentNum;
      }

      if (currentNum > oddMax) {
        oddMax = currentNum;
      }
    }
  }

  if (oddCount > 0) {
    console.log(`OddSum=${oddSum.toFixed(2)},`);
    console.log(`OddMin=${oddMin.toFixed(2)},`);
    console.log(`OddMax=${oddMax.toFixed(2)},`);
  } else {
    console.log(`OddSum=${oddSum.toFixed(2)},`);
    console.log(`OddMin=No,`);
    console.log(`OddMax=No,`);
  }

  if (evenCount > 0) {
    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    console.log(`EvenMin=${evenMin.toFixed(2)},`);
    console.log(`EvenMax=${evenMax.toFixed(2)}`);
  } else {
    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    console.log(`EvenMin=No,`);
    console.log(`EvenMax=No`);
  }
}

// oddEvenPosition(["2", "1.5", "-2.5"]);
oddEvenPosition(["1", "1"]);
