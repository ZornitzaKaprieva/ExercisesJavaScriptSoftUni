// Напишете функция, която отпечатва числата в диапазона от 1 до 1000, които завършват на 7.

function numbersEndingIn7() {
  
  //Solution 1:
  for (let i = 1; i <= 1000; i++) {
    if (i % 10 === 7) {
      console.log(i);
    }
  }

  //Solution 2:
  for (let i = 7; i <= 997; i += 10) {
    console.log(i);
  }
}

numbersEndingIn7();
