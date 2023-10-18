// Техниката в магазин за коледни украси се разваля.
// Артикулите, които съдържат четни числа в своя баркод не могат да бъдат маркирани от касиерите.
// Вашата задача е, да напишете програма, която генерира всички баркодове, които НЕ съдържат четни цифри в себе си.
// Вход:
// •	Две четирицифрени числа, които показват обхвата на баркодовете, които трябва да промените.
// •	Първи ред – четирицифрено число – началото на обхвата. Цяло число в интервала [1000…9999]
// •	Втори ред – четирицифрено число – края на обхвата. Цяло число в интервала [1000…9999]
// Изход:
// На конзолата трябва да се отпечатат всички "баркодове", които НЕ съдържат четна цифра в себе си, разделени с интервал.

function barcodeGenerator(input) {
  let startCode = input[0];
  let endCode = input[1];

  let startFirst = Number(startCode.charAt(0));
  let startSecond = Number(startCode.charAt(1));
  let startThird = Number(startCode.charAt(2));
  let startFourth = Number(startCode.charAt(3));

  let endFirst = Number(endCode.charAt(0));
  let endSecond = Number(endCode.charAt(1));
  let endThird = Number(endCode.charAt(2));
  let endFourth = Number(endCode.charAt(3));

  let code = "";
  for (let i = startFirst; i <= endFirst; i++) {
    if (i % 2 !== 0) {
      for (let j = startSecond; j <= endSecond; j++) {
        if (j % 2 !== 0) {
          for (let k = startThird; k <= endThird; k++) {
            if (k % 2 !== 0) {
              for (let l = startFourth; l <= endFourth; l++) {
                if (l % 2 !== 0) {
                  code += `${i}${j}${k}${l} `;
                }
              }
            }
          }
        }
      }
    }
  }

  console.log(code);
}
barcodeGenerator(["2345", "6789"]);
