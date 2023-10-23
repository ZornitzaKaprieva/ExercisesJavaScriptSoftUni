// Трябва да напишете програма, която чете три цели числа  a1, a2, n, въведени от потребителя
// и генерира номера за билети, които се състоят от следните 4 символа:
// •	Символ 1: символ с ASCII код от а1 до а2 - 1
// •	Символ 2: цифра от 1 до n - 1
// •	Символ 3: цифра от 1 до n / 2 - 1
// •	Символ 4: цифрова репрезентация (ASCII код) на символ 1
// След като са изпълнени условията, се генерира следният билет:
// "{Символ 1}-{Символ 2}{Символ 3}{Символ  4}"
// Вход
// •	a1 – цяло число в интервала [65… 89]
// •	a2 – цяло число в интервала [66… 91]
// •	n – цяло число в интервала [1… 10]
// Изход
// На конзолата трябва да се отпечатат всички билетни номера,
// на които числовата репрезентация на символ 1 е нечетна и сборът на символ 2, символ 3 и символ 4 е нечетен.

function movieTickets(input) {
  let a1 = Number(input.shift());
  let a2 = Number(input.shift());
  let n = Number(input.shift());

  for (let symbol1 = a1; symbol1 <= a2 - 1; symbol1++) {
    if (symbol1 % 2 !== 0) {
      for (let symbol2 = 1; symbol2 <= n - 1; symbol2++) {
        for (let symbol3 = 1; symbol3 <= n / 2 - 1; symbol3++) {
          for (let symbol4 = a1; symbol4 <= a2 - 1; symbol4++) {
            if (symbol4 === symbol1) {
              if ((symbol2 + symbol3 + symbol4) % 2 != 0) {
                let asciiSymbol = String.fromCharCode(symbol1);
                console.log(`${asciiSymbol}-${symbol2}${symbol3}${symbol4}`);
              }
            }
          }
        }
      }
    }
  }
}

movieTickets(["86", "88", "4"]);
