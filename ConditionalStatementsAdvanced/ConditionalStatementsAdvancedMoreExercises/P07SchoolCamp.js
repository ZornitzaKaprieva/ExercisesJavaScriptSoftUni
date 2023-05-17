// Частно училище организира лагери за учениците по време на ваканциите. В зависимост от вида на ваканцията (пролетна, лятна или зимна) и вида на групата (момчета/момичета или смесена) цената на нощувката в хотела е различна, както и спортът, който ще практикуват учениците.
// 	                Зимна ваканция	Пролетна ваканция	Лятна ваканция
// момчета/момичета	    9.60	            7.20	        15
// смесена група	     10	                9.50	        20
// Училището получава отстъпка от крайната цена, в зависимост от броя на настанените в хотела ученици:
// •	Ако броят на учениците е 50 или повече, училището получава 50% отстъпка
// •	Ако броят на учениците е 20 или повече и в същото време по-малък от 50, училището получава 15% отстъпка
// •	Ако броят на учениците е 10 или повече и в същото време по-малък от 20, училището получава 5% отстъпка
// В таблицата по-долу са дадени спортовете, които ще се практикуват в зависимост от вида на ваканцията и групата:
// 	             Зимна ваканция	    Пролетна ваканция	    Лятна ваканция
// момичета	        Gymnastics	        Athletics	            Volleyball
// момчета	             Judo	          Tennis	             Football
// смесена група	      Ski	          Cycling	             Swimming
// Да се напише програма, която пресмята цената, която ще заплати училището за нощувките и принтира спорта, който ще се практикува от учениците.
// Вход
// От конзолата се четат 4 реда:
// 1.	Сезонът – текст - “Winter”, “Spring” или “Summer”;
// 2.	Видът на групата – текст - “boys”, “girls” или “mixed”;
// 3.	Брой на учениците – цяло число в интервала [1 … 10000];
// 4.	Брой на нощувките – цяло число в интервала [1 … 100].
// Изход
// На конзолата се отпечатва 1 ред:
// •	Спортът, който са практикували учениците и цената за нощувките, която е заплатило училището, форматирана до втория знак след десетичната запетая, в следния формат:
// "{спортът} {цената} lv.“

function schoolCamp(input) {
  let season = input[0];
  let typeOfGroup = input[1];
  let numStudents = Number(input[2]);
  let numStays = Number(input[3]);

  let priceStays = 0;
  let sport = "";

  switch (season) {
    case "Winter":
      switch (typeOfGroup) {
        case "boys":
          priceStays = 9.6 * numStays * numStudents;
          sport = "Judo";
          break;
        case "girls":
          priceStays = 9.6 * numStays * numStudents;
          sport = "Gymnastics";
          break;
        case "mixed":
          priceStays = 10 * numStays * numStudents;
          sport = "Ski";
          break;
      }

      break;
    case "Spring":
      switch (typeOfGroup) {
        case "boys":
          priceStays = 7.2 * numStays * numStudents;
          sport = "Tennis";
          break;
        case "girls":
          priceStays = 7.2 * numStays * numStudents;
          sport = "Athletics";
          break;
        case "mixed":
          priceStays = 9.5 * numStays * numStudents;
          sport = "Cycling";
          break;
      }

      break;
    case "Summer":
      switch (typeOfGroup) {
        case "boys":
          priceStays = 15 * numStays * numStudents;
          sport = "Football";
          break;
        case "girls":
          priceStays = 15 * numStays * numStudents;
          sport = "Volleyball";
          break;
        case "mixed":
          priceStays = 20 * numStays * numStudents;
          sport = "Swimming";
          break;
      }

      break;
  }

  if (numStudents >= 10 && numStudents < 20) {
    priceStays = priceStays * 0.95;
  } else if (numStudents >= 20 && numStudents < 50) {
    priceStays = priceStays * 0.85;
  } else if (numStudents >= 50) {
    priceStays = priceStays * 0.5;
  }

  console.log(`${sport} ${priceStays.toFixed(2)} lv.`);
}

schoolCamp(["Spring", "girls", 20, 7]);
