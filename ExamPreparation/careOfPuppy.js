// Ани намира кученце, за което ще се грижи, докато се намери някой да го осинови. То изяжда дневно определено количество храна.
// Да се напише програма, която проверява дали количеството храна, което е закупено за кученцето, ще е достатъчно докато кученцето бъде осиновено.
// Вход
// От конзолата се прочитат:
// •	Закупеното количество храна за кученцето в килограми – цяло число в интервала [1 …100]
// •	На всеки следващ ред до получаване на команда Adopted ще получавате колко грама изяжда кученцето на всяко хранене - цяло число в интервала [10 …1000]
// Изход
// На конзолата се отпечатва 1 ред:
// •	Ако количеството храна е достатъчно да се отпечата:
//  	"Food is enough! Leftovers: {останала храна} grams."
// •	Ако количеството храна не е достатъчно да се отпечата:
//  	"Food is not enough. You need {нужно количество храна} grams more."

function careOfPuppy(input) {
  let foodKg = Number(input.shift());
  let command = input.shift();

  let eatenFood = 0;
  while (command !== "Adopted") {
    let foodEatenByPuppy = Number(command);
    eatenFood += foodEatenByPuppy;

    command = input.shift();
  }

  let foodGr = foodKg * 1000;
  let diff = Math.abs(foodGr - eatenFood);
  if (eatenFood <= foodGr) {
    console.log(`Food is enough! Leftovers: ${diff} grams.`);
  } else {
    console.log(`Food is not enough. You need ${diff} grams more.`);
  }
}

careOfPuppy(["4", "130", "345", "400", "180", "230", "120", "Adopted"]); //enough (2595gr)
//careOfPuppy(["3", "1000", "1000", "1000", "Adopted"]); //enough (0gr)
//careOfPuppy(["2", "999", "456", "999", "999", "123", "456", "Adopted"]); //not enough (2032gr)
