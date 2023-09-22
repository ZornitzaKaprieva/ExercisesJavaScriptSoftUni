// Ани се страхува от това, да не й бъде хакнат някой от профилите в социалните мрежи,
// затова решава да направи генератор за пароли, които да бъдат достатъчно сигурни.
// Вашата задача е да й помогнете да напише програма, която ще генерира тези пароли,
// разделени една от друга от знака "|".
// Да се напише програма, която генерира серия от символи като в шаблона: ABxyBA
// като при всяко генериране на нов код, стойностите на символите се увеличават с 1.
// Ако A надхвърли 55, се връща на 35. Ако B надхвърли 96, се връща на 64.
// Вход
// От конзолата се чете 1 ред:
// •	На първия ред a – цяло число в интервала [1 … 1000]
// •	На втория ред b – цяло число в интервала [1 … 1000]
// •	На третия ред максимален брой генерирани пароли – цяло число в интервала [1 … 1000000]
// Ограничения:
// •	A е символ с ASCII стойност в диапазона [35… 55]
// •	B е символ с ASCII стойност в диапазона [64 … 96]
// •	x e цяло число в диапазона [1… a]
// •	y e цяло число в диапазона [1… b]

function safePasswordsGenerator(input) {
  let a = Number(input.shift());
  let b = Number(input.shift());
  let maxGeneratedPass = Number(input.shift());
  let passCount = 0;
  let firstSymbolA = 35;
  let secondSymbolB = 64;
  let isLimit = false;
  let pass = "";

  for (let thirdSymbolX = 1; thirdSymbolX <= a; thirdSymbolX++) {
    for (let forthSymbolY = 1; forthSymbolY <= b; forthSymbolY++) {
      if (firstSymbolA > 55) {
        firstSymbolA = 35;
      }
      if (secondSymbolB > 96) {
        secondSymbolB = 64;
      }

      if (passCount >= maxGeneratedPass) {
        isLimit = true;
        break;
      }

      passCount++;

      let charFirstA = String.fromCharCode(firstSymbolA);
      let charSecondB = String.fromCharCode(secondSymbolB);

      pass += `${charFirstA}${charSecondB}${thirdSymbolX}${forthSymbolY}${charSecondB}${charFirstA}|`;
      firstSymbolA++;
      secondSymbolB++;
    }
    if (isLimit) {
      break;
    }
  }

  console.log(pass);
}

safePasswordsGenerator(["2", "3", "10"]);
