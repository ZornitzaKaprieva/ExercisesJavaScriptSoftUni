// Фирма-производител на алуминиева дограма приема поръчки за изработката и монтаж със следния ценоразпис за един брой.
// Фирмата приема само поръчки на едро (над 10 бр.). В зависимост от поръчания брой дограми, фирмата прави различна отстъпка на своите клиенти.
// Фирмата предлага също и доставка на поръчките си срещу 60 лв.
// Размер	    Единична цена	    Отстъпка от цената
// 90X130	      110 лв.	            Над 30 броя – 5%
//                                  Над 60 броя – 8%
// 100X150	    140 лв.	            Над 40 броя – 6%
//                                  Над 80 броя – 10%
// 130X180	    190 лв.	            Над 20 броя – 7%
//                                  Над 50 броя – 12%
// 200X300	    250 лв.	            Над 25 броя – 9%
//                                  Над 50 броя – 14%
// Ако поръчката надвишава 99 броя – върху крайната цена се начисляват допълнителни 4% отстъпка (след като се начисли цената за доставка, ако има такава).
// При поръчка под 10 бр. на конзолата да бъде изписано "Invalid order"
// Вход:
// Потребителят въвежда 3 реда:
// 1.	Брой дограми – цяло число в интервала [0..1000];
// 2.	Вид на дограмите – текст "90X130" или "100X150" или "130X180" или "200X300";
// 3.	Начин на получаване – текст
// •	С доставка - "With delivery"
// •	Без доставка - "Without delivery"
// Изход:
// Извежда се едно число – стойността на поръчката, в следния формат:
// o	"{Обща стойност на поръчката} BGN"
// Резултатът да се форматира до втори знак след десетичната запетая.

function aluminumJoinery(input) {
  let joineryNum = Number(input.shift());
  let joineryType = input.shift();
  let delivery = input.shift();

  let unitPrice = 0;
  if (joineryType === "90X130") {
    if (joineryNum < 30) {
      unitPrice = 110;
    } else if (joineryNum < 60) {
      unitPrice = 110 * 0.95;
    } else {
      unitPrice = 110 * 0.92;
    }
  } else if (joineryType === "100X150") {
    if (joineryNum < 40) {
      unitPrice = 140;
    } else if (joineryNum < 80) {
      unitPrice = 140 * 0.94;
    } else {
      unitPrice = 140 * 0.9;
    }
  } else if (joineryType === "130X180") {
    if (joineryNum < 20) {
      unitPrice = 190;
    } else if (joineryNum < 50) {
      unitPrice = 190 * 0.93;
    } else {
      unitPrice = 190 * 0.88;
    }
  } else if (joineryType === "200X300") {
    if (joineryNum < 25) {
      unitPrice = 250;
    } else if (joineryNum < 50) {
      unitPrice = 250 * 0.91;
    } else {
      unitPrice = 250 * 0.86;
    }
  }

  let sum = unitPrice * joineryNum;
  if (delivery === "With delivery") {
    sum += 60;
  }

  if (joineryNum < 10) {
    console.log("Invalid order");
  } else if (joineryNum <= 99) {
    sum = sum;
    console.log(`${sum.toFixed(2)} BGN`);
  } else {
    sum = sum * 0.96;
    console.log(`${sum.toFixed(2)} BGN`);
  }
}

aluminumJoinery(["40", "90X130", "Without delivery"]);
