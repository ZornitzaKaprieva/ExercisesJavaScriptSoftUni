// Напишете софтуер, който да пресмята сметката на клиент, закупил определен брой от дадена напитка от кафемашина.
// 	          Без захар	      Нормално	    Допълнително захар
// Еспресо	  0.90 лв./бр.	  1 лв. /бр.	  1.20 лв. /бр.
// Капучино	  1.00 лв. /бр.	  1.20 лв. /бр.	1.60 лв. /бр.
// Чай	      0.50 лв. /бр.	  0.60 лв. /бр.	0.70 лв. /бр.
// Трябва да имате предвид следните отстъпки:
// •	При избрана напитка без захар има 35% отстъпка.
// •	При избрана напитка "Espresso" и закупени поне 5 броя, има 25% отстъпка.
// •	При сума надвишава 15 лева, 20% отстъпка от крайната цена,
// Отстъпките се прилагат в реда на тяхното описване.
// Вход
// Входът се чете от конзолата и се състои от три реда:
// •	Първи ред - напитка - текст с възможности"Espresso", "Cappuccino" или "Tea"
// •	Втори ред - захар - текст  с възможности "Without", "Normal" или "Extra"
// •	Трети ред - брой напитки - цяло число в интервала [1… 50]
// Изход
// На конзолата трябва да се отпечата един ред:
// "You bought {брой напитки} cups of {напитка} for {крайна цена} lv."
// Цената да бъде форматирана до втората цифра след десетичния знак.

function coffeeMachine(input) {
  let drink = input[0];
  let sugar = input[1];
  let drinksNum = input[2];

  let price = 0;
  switch (drink) {
    case "Espresso":
      switch (sugar) {
        case "Without":
          price = 0.9;
          break;
        case "Normal":
          price = 1;
          break;
        case "Extra":
          price = 1.2;
          break;
      }
      break;
    case "Cappuccino":
      switch (sugar) {
        case "Without":
          price = 1;
          break;
        case "Normal":
          price = 1.2;
          break;
        case "Extra":
          price = 1.6;
          break;
      }
      break;
    case "Tea":
      switch (sugar) {
        case "Without":
          price = 0.5;
          break;
        case "Normal":
          price = 0.6;
          break;
        case "Extra":
          price = 0.7;
          break;
      }
      break;
  }

  if (sugar === "Without") {
    price = price * 0.65;
  }

  if (drink === "Espresso" && drinksNum >= 5) {
    price = price * 0.75;
  }

  let sum = price * drinksNum;
  if (sum > 15) {
    sum = sum * 0.8;
  }

  console.log(
    `You bought ${drinksNum} cups of ${drink} for ${sum.toFixed(2)} lv.`
  );
}

coffeeMachine(["Espresso", "Without", "10"]);
