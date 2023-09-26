// Напишете програма, която генерира и принтира на конзолата четирицифрени числа,
// в които първата и втората двойка цифри образуват двуцифрени прости числа (пример за такова число 1723).
// Крайната стойност, до която трябва да се генерират двойките, се определя от други 2 цифри, подадени като вход,
// които определят с колко крайната стойност е по-голяма от началната.
// Вход
// От конзолата се четат четири реда:
// •	На първия ред – началната стойност на първата двойка числа – цяло положително число в диапазона [10… 90]
// •	На втория ред – началната стойност на втората двойка числа – цяло положително число в диапазона [10… 90]
// •	На третия ред – разликата между началната и крайната стойност на  първата двойка числа – цяло положително число в диапазона [1… 9]
// •	На четвъртия ред – разликата между началната и крайната стойност на  втората двойка числа – цяло положително число в диапазона [1… 9]
// Изход:
// Да се отпечатат на конзолата четирицифрените числа, в които първите две и вторите две цифри са прости двуцифрени числа.

function primePairs(input) {
  let startingValueFirst2 = Number(input.shift());
  let startingValueSecond2 = Number(input.shift());
  let differenceFirst2 = Number(input.shift());
  let differenceSecond2 = Number(input.shift());

  for (let first2 = startingValueFirst2; first2 <= startingValueFirst2 + differenceFirst2; first2++) {
    if (first2 % 2 !== 0 && first2 % 3 !== 0 && first2 % 5 !== 0 && first2 % 7 !== 0) {
      for (let second2 = startingValueSecond2; second2 <= startingValueSecond2 + differenceSecond2; second2++) {
        if (second2 % 2 !== 0 && second2 % 3 !== 0 && second2 % 5 !== 0 && second2 % 7 !== 0) {
          console.log(`${first2}${second2}`);
        }
      }
    }
  }
}

primePairs(["10", "20", "5", "5"]);