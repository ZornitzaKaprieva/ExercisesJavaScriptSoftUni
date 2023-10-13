// В кутия имаме неопределен брой топки с различни цветове, които ни носят различен брой точки.
// Задачата ни е да извадим Х бр. топки, които ще бъдат въведени от конзолата, като се има в предвид,
// че всеки различен цвят влияе на точките ни по следния начин:
// •	Ако топката е “red” точките ни се повишават с 5.
// •	Ако топката е “orange” точките ни се повишават с 10.
// •	Ако топката е “yellow” точките ни се повишават с 15.
// •	Ако топката е “white” точките ни се повишават с 20.
// •	Ако топката е “black” точките ни се делят на 2, като закръгляме към по-малкото цяло число.
// Ако топката е с какъвто и да е цвят, различен от по-горните, точките не се манипулират и програмата продължава да работи.
// Вход:
// 1.	От конзолата се чете 1 цяло число N, което е броят на топките в диапазон (0-1000).
// 2.	След това се четат N на брой цветове.
// Изход:
// Отпечатват се следните редове:
// "Total points: {всичките събрани точки}"
// "Red balls: {броят червени топки}"
// "Orange balls: {броят оранжеви топки}"
// "Yellow balls: {броят жълти топки}"
// "White balls: {броят бели топки}"
// "Other colors picked: {броят на избраните топки извън зададените цветове}"
// "Divides from black balls: {броят на пътите, в които точките са били разделяни на 2}"

function balls(input) {
  let ballsNum = Number(input[0]);

  let redCount = 0;
  let orangeCount = 0;
  let yellowCount = 0;
  let whiteCount = 0;
  let blackCount = 0;
  let otherCount = 0;
  let totalPoints = 0;
  for (let i = 1; i <= ballsNum; i++) {
    let color = input[i];

    if (color === "red") {
      redCount++;
      totalPoints += 5;
    } else if (color === "orange") {
      orangeCount++;
      totalPoints += 10;
    } else if (color === "yellow") {
      yellowCount++;
      totalPoints += 15;
    } else if (color === "white") {
      whiteCount++;
      totalPoints += 20;
    } else if (color === "black") {
      blackCount++;
      totalPoints = Math.floor(totalPoints / 2);
    } else {
      otherCount++;
    }
  }

  console.log(`Total points: ${totalPoints}`);
  console.log(`Red balls: ${redCount}`);
  console.log(`Orange balls: ${orangeCount}`);
  console.log(`Yellow balls: ${yellowCount}`);
  console.log(`White balls: ${whiteCount}`);
  console.log(`Other colors picked: ${otherCount}`);
  console.log(`Divides from black balls: ${blackCount}`);
}

balls(["3", "white", "black", "pink"]);
