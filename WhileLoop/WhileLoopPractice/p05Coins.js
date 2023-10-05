// Производителите на вендинг машини искали да направят машините си да връщат възможно най-малко монети ресто.
// Напишете функция, която приема сума - рестото, което трябва да се върне
// и изчислява с колко най-малко монети може да стане това.
// Монетите може да са от 2 лева, 1 лев, 50 стотинки, 20 стотинки, 10 стотинки, 5 стотинки, 2 стотинки или 1 стотинка.

function coins(input) {
  let sum = Number(input[0]);

  let change = Math.round(sum * 100);
  let coinCount = 0;

  while (change > 0) {
    if (change >= 200) {
      change -= 200;
      coinCount++;
    } else if (change >= 100) {
      change -= 100;
      coinCount++;
    } else if (change >= 50) {
      change -= 50;
      coinCount++;
    } else if (change >= 20) {
      change -= 20;
      coinCount++;
    } else if (change >= 10) {
      change -= 10;
      coinCount++;
    } else if (change >= 5) {
      change -= 5;
      coinCount++;
    } else if (change >= 2) {
      change -= 2;
      coinCount++;
    } else if (change >= 1) {
      change -= 1;
      coinCount++;
    }
  }

  console.log(coinCount);
}

coins(["0.56"]);
