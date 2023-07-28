// Напишете функция, която получава цяло число n и отпечатва пирамида от числа, като в примерите:

function numberPyramid(input) {
  let num = Number(input[0]);

  let counter = 1;
  let isBigger = false;
  let output = "";

  for (let rows = 1; rows <= num; rows++) {
    for (let cols = 1; cols <= rows; cols++) {
      if (counter > num) {
        isBigger = true;
        break;
      }

      output += counter + " ";
      counter++;
    }

    console.log(`${output}`);

    output = "";

    if (isBigger) {
      break;
    }
  }
}

numberPyramid(["12"]);
