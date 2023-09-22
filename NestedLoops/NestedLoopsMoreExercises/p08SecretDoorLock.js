// В града има тайна врата, за която всички знаят, но никой не е успявал да я отключи и да види какво има зад нея.
// За да бъде отключена трябва да се въведе трицифрен код.
// Напишете програма, която генерира комбинации спрямо въведени числа – предположения от потребителя.
// От конзолата се въвеждат три цифри. Тези цифри ще бъдат горната граница,
// до която ние искаме да получим всички трицифрени числа, на които всяка една цифра отговаря на следните условия:
// •	Цифрата на единиците и цифрата на стотиците трябва да бъде четна
// •	Цифрата на десетиците да бъде просто число в диапазона (2...7).
// Това ще са възможните комбинации според въведените предположения от потребителя, с които ще може евентуално да се отключи вратата.
// Вход
// От конзолата се четат 3 реда:
// •	Горната граница на стотиците - цяло число в диапазона (1-9)
// •	Горната граница на десетиците - цяло число в диапазона (1-9)
// •	Горната граница на единиците - цяло число в диапазона (1-9)

function secretDoorLock(input) {
  let upperLimitHundreds = Number(input[0]);
  let upperLimitTens = Number(input[1]);
  let upperLimitUnits = Number(input[2]);

  for (let i = 1; i <= upperLimitHundreds; i++) {
    for (let j = 1; j <= upperLimitTens; j++) {
      for (let k = 1; k <= upperLimitUnits; k++) {
        if (i % 2 == 0 && k % 2 == 0) {
          if (j == 2 || j == 3 || j == 5 || j == 7) {
            console.log(`${i} ${j} ${k}`);
          }
        }
      }
    }
  }
}

secretDoorLock(["3", "5", "5", ""]);
