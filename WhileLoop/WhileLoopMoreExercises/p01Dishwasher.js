// Гошо работи в ресторант и отговаря за зареждането на съдомиялната накрая на деня.
// Вашата задача е да напишете програма, която изчислява,
// дали дадено закупено количество бутилки от препарат за съдомиялна е достатъчно, за да измие определено количество съдове.
// Знае се, че всяка бутилка съдържа 750 мл. препарат, за 1 чиния са нужни 5 мл., а за тенджера 15 мл.
// Приемете, че на всяко трето зареждане със съдове, съдомиялната се пълни само с тенджери, а останалите пъти с чинии.
// Докато не получите команда "End" ще продължите да получавате бройка съдове, които трябва да бъдат измити.
// Вход
// От конзолата се четат:
// •	Брой бутилки от препарат, който ще бъде използван за миенето на чинии - цяло число в интервала [1…10]
// На всеки следващ ред, до получаване на командата "End" или докато количеството препарат не се изчерпи, брой съдове, които трябва да бъдат измити - цяло число в интервала [1…100]
// Изход
// В случай, че количеството препарат е било достатъчно за измиването на съдовете:
// "Detergent was enough!"
// "{брой чисти чинии} dishes and {брой чисти тенджери} pots were washed."
// "Leftover detergent {количество останал препарат} ml."
// В случай, че количеството препарат не е било достатъчно за измиването на съдовете:
// "Not enough detergent, {количество не достигнал препарат} ml. more necessary!"

function dishwasher(input) {
  let bottlesNum = Number(input[0]);

  let detergent = bottlesNum * 750;

  let index = 1;
  let command = input[index];

  let spentdetergent = 0;
  let plateCount = 0;
  let potCount = 0;
  let loadCount = 0;
  let isFinish = false;
  while (command !== "End") {
    let amount = Number(command);

    loadCount++;
    if (loadCount % 3 === 0) {
      potCount += amount;
      spentdetergent += amount * 15;
    } else {
      plateCount += amount;
      spentdetergent += amount * 5;
    }

    if (detergent < spentdetergent) {
      isFinish = true;
      break;
    }

    index++;
    command = input[index];
  }

  let diff = Math.abs(detergent - spentdetergent);
  if (isFinish) {
    console.log(`Not enough detergent, ${diff} ml. more necessary!`);
  } else {
    console.log("Detergent was enough!");
    console.log(`${plateCount} dishes and ${potCount} pots were washed.`);
    console.log(`Leftover detergent ${diff} ml.`);
  }
}

dishwasher(["2", "53", "65", "55", "End"]);
