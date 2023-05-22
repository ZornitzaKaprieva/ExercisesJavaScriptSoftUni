// Напишете функция, която получава цяло число n, сумира всички негови цифри и отпечатва сумата.

//Solution 1:
function sumOfNumbers(string) {
  let n = string[0];
  let sum = 0;

  for (let i = 0; i < n.length; i++) {
    sum = sum + Number(n.charAt(i));

    // let currentNum = Number(n[i]);
    // sum += currentNum;
  }

  console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers(["12345"]);

//Solution 2:
function sumOfNumbersN(number) {
  let n = number.toString();
  // let n = number + "";
  // let n = `${number}`;

  let sum = 0;

  for (let i = 0; i < n.length; i++) {
    let currentNum = Number(n[i]);
    sum += currentNum;
  }

  console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbersN([1234]);
