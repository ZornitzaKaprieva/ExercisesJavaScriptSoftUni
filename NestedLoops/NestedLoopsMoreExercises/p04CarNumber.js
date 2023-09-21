// Поздравления, поради вашите задълбочени знания в сферата на програмирането
// МВР реши да наеме точно вас за създаването на новата им система за генериране на специални автомобилни номера.
// Всеки един специален автомобилен номер се състои от четири числа.
// Условията, които разграничават специалните от обикновените номера са следните:
// •	Ако номерът започва с четна цифра, то той трябва да завършва на нечетна цифра и обратното – ако започва с нечетна,  завършва на четна
// •	Първата цифра от номера е по-голяма от последната
// •	Сумата от втората и третата цифра трябва да е четно число
// Входът се състои от две числа - начало и край на интервал, между които трябва да се генерира всяко едно число от номера.
// Вход
// 1.	Първи ред - едноцифрено число - началото на интервала – цяло число в интервала [1…9]
// 2.	Втори ред - едноцифрено число - края на интервала – цяло число в интервала [1…9]
// Изход
// На конзолата трябва да се отпечатат всички специални номера, разделени с интервал.carNumber

function carNumber(input) {
  let start = Number(input[0]);
  let end = Number(input[1]);

  let special = "";
  for (let i = start; i <= end; i++) {
    for (let j = start; j <= end; j++) {
      for (let k = start; k <= end; k++) {
        for (let l = start; l <= end; l++) {
          if ((i % 2 == 0 && l % 2 != 0) || (i % 2 != 0 && l % 2 == 0)) {
            if (i > l) {
              if ((j + k) % 2 == 0){ 
                special += "" + i + j + k + l + " "
              };
            }
          }
        }
      }
    }
  }

  console.log(special);
}

carNumber(["2", "3", ""]);
