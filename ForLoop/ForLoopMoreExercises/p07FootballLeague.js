// Екипът на СофтУни си организира футболен турнир.
// Първоначално прочитаме от конзолата капацитета на стадиона и броят на всички фенове.
// След това за всеки фен се чете секторът, в който се намира.
// Феновете на първия отбор са в сектор А и Б, а на втория – В и Г.
// Да се напише програма, която изчислява процентите на феновете във всеки сектор,
// спрямо общия брой фенове на стадиона, както и общият процент на феновете за двата отбора,
// спрямо капацитета на стадиона. Общият брой на феновете НЕ надвишава капацитета на стадиона.
// Вход
// Oт конзолата се четат поредица от числа, всяко на отделен ред:
// 1.	Капацитетът на стадиона – цяло число в интервала [1 … 10000];
// 2.	Броят на всички фенове – цяло число в интервала [1 … 10000].
// За всеки един фен, на отделен ред се прочита:
// 1.	Секторът, на който се намира – текст – "A", "B", "V" и "G".
// Изход
// Да се отпечатат на конзолата 5 реда, всеки от които съдържа процент между 0.00% и 100.00%, форматирани до втората цифра след десетичната запетая:
// 1.	Процентът на феновете в сектор А
// 2.	Процентът на феновете в сектор Б
// 3.	Процентът на феновете в сектор В
// 4.	Процентът на феновете в сектор Г
// 5.	Процентът на всички фенове, спрямо капацитета на стадиона.

function footballLeague(input) {
  let capacity = Number(input[0]);
  let numFans = Number(input[1]);

  let sectorA = 0;
  let sectorB = 0;
  let sectorV = 0;
  let sectorG = 0;

  for (let i = 2; i <= numFans + 2; i++) {
    let sector = input[i];

    switch (sector) {
      case "A":
        sectorA++;
        break;
      case "B":
        sectorB++;
        break;
      case "V":
        sectorV++;
        break;
      case "G":
        sectorG++;
        break;
    }
  }

  let percentFansA = (sectorA / numFans) * 100;
  let percentFansB = (sectorB / numFans) * 100;
  let percentFansV = (sectorV / numFans) * 100;
  let percentFansG = (sectorG / numFans) * 100;
  let percentFans = (numFans / capacity) * 100;

  console.log(percentFansA.toFixed(2) + "%");
  console.log(percentFansB.toFixed(2) + "%");
  console.log(percentFansV.toFixed(2) + "%");
  console.log(percentFansG.toFixed(2) + "%");
  console.log(percentFans.toFixed(2) + "%");
}

footballLeague(["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);
