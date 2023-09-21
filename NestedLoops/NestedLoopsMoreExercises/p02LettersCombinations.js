// Напишете програма, която да принтира на конзолата всички комбинации от 3 букви в зададен интервал,
// като се пропускат комбинациите съдържащи зададена от конзолата буква.
// Накрая трябва да се изпринтира броят на отпечатаните комбинации.
// Вход
// Входът се чете от конзолата и съдържа точно 3 реда:
// Ред 1.	Малка буква от английската азбука за начало на интервала – от ‘a’ до ‚z’.
// Ред 2.	Малка буква от английската азбука за край на интервала  – от първата буква до ‚z’.
// Ред 3.	Малка буква от английската азбука – от ‘a’ до ‚z’ – като комбинациите съдържащи тази буквата се пропускат.
// Изход
// Да се отпечатат на един ред всички комбинации отговарящи на условието плюс броят им разделени с интервал.

function lettersCombinations(input) {
  let start = input.shift().charCodeAt(0);
  let end = input.shift().charCodeAt(0);
  let omitted = input.shift();
  let combinations = "";
  let count = 0;
  
  for (let i = start; i <= end; i++) {
    for (let j = start; j <= end; j++) {
      for (let k = start; k <= end; k++) {
        let firstLetter = String.fromCharCode(i);
        let secondLetter = String.fromCharCode(j);
        let thirdLetter = String.fromCharCode(k);

        if (firstLetter !== omitted && secondLetter !== omitted && thirdLetter !== omitted) {
          count++;
          combinations += firstLetter + secondLetter + thirdLetter + " ";
        }
      }
    }
  }

  console.log(`${combinations}${count}`);
}

lettersCombinations(["a", "c", "b", ""]);
// lettersCombinations([ 'f', 'k', 'h', '' ]);
