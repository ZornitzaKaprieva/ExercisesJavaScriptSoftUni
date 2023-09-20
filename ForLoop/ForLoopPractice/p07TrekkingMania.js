// Катерачи от цяла България се събират на групи и набелязват следващите върхове за изкачване. Според размера на групата, катерачите ще изкачват различни върхове.
// •	Група до 5 човека – изкачват Мусала
// •	Група от 6 до 12 човека – изкачват Монблан
// •	Група от 13 до 25 човека – изкачват Килиманджаро
// •	Група от 26 до 40 човека –  изкачват К2
// •	Група от 41 или повече човека – изкачват Еверест
// Да се напише програма, която изчислява процента на катерачите изкачващи всеки връх.
// Вход
// От конзолата се четат поредица от числа, всяко на отделен ред:
// •	На първия ред – броя на групите от катерачи – цяло число в интервала [1...1000]
// •	За всяка една група на отделен ред – броя на хората в групата – цяло число в интервала [1...1000]
// Изход
// Да се отпечатат на конзолата 5 реда, всеки от които съдържа процент между 0.00% и 100.00% с точност до втората цифра след десетичната запетая.
// •	Първи ред - процентът изкачващи Мусала
// •	Втори ред – процентът изкачващи Монблан
// •	Трети ред – процентът изкачващи Килиманджаро
// •	Четвърти ред – процентът изкачващи К2
// •	Пети ред – процентът изкачващи Еверест

function trekkingMania(input) {
  let groupsNum = Number(input[0]);

  let peopleCountMusala = 0;
  let peopleCountMontBlanc = 0;
  let peopleCountKilimanjaro = 0;
  let peopleCountK2 = 0;
  let peopleCountEverest = 0;

  for (let i = 1; i <= input.length; i++) {
    let peopleNum = Number(input[i]);

    if (peopleNum <= 5) {
      peopleCountMusala += peopleNum;
    } else if (peopleNum <= 12) {
      peopleCountMontBlanc += peopleNum;
    } else if (peopleNum <= 25) {
        peopleCountKilimanjaro += peopleNum;
    } else if (peopleNum <= 40) {
        peopleCountK2 += peopleNum;
    } else if (peopleNum >= 41) {
        peopleCountEverest += peopleNum;
      }
  }

  let peopleSum = peopleCountMusala + peopleCountMontBlanc + peopleCountKilimanjaro + peopleCountK2 + peopleCountEverest;

  let percentMusala = peopleCountMusala / peopleSum * 100;
  let percentMontBlanc = peopleCountMontBlanc / peopleSum * 100;
  let percentKilimanjaro = peopleCountKilimanjaro / peopleSum * 100;
  let percentK2 = peopleCountK2 / peopleSum * 100;
  let percentEverest = peopleCountEverest / peopleSum * 100;

  console.log(percentMusala.toFixed(2) + "%");
  console.log(percentMontBlanc.toFixed(2) + "%");
  console.log(percentKilimanjaro.toFixed(2) + "%");
  console.log(percentK2.toFixed(2) + "%");
  console.log(percentEverest.toFixed(2) + "%");
}

trekkingMania(["5", "25", "41", "31", "250", "6"]);
