// Напишете програма която да пресмята средният разход за месец на семейство за даден период време.
// За всеки месец разходите са следните:
// •	За ток – всеки месец е различен, ще се чете от конзолата
// •	за вода – 20 лв.
// •	за интернет – 15 лв.
// •	за други – събират се тока, водата и интернета за месеца и към сумата се прибавят 20%.
// За всеки разход трябва да се пресметне колко общо е платено за всички месеци.
// Вход
// Входът се чете от конзолата:
// •	Първи ред – месеците за които се търси средният разход – цяло число в интервала [1...100]
// •	За всеки месец – сметката за ток – реално число в интервала [1.00...1000.00]
// Изход
// Да се отпечата на конзолата 5 реда:
// •	1ви ред: "Electricity: {ток за всички месеци} lv"
// •	2ри ред: "Water: {вода за всички месеци} lv"
// •	3ти ред: "Internet: {интернет за всички месеци} lv"
// •	4ти ред: "Other: {други за всички месеци} lv"
// •	5ти ред: "Average: {средно всички разходи за месец} lv"
// Всички числа трябва да са форматирана до вторият знак след запетаята.

function bills(input) {
  let months = Number(input[0]);

  let electricity = 0;
  let water = 0;
  let internet = 0;
  let other = 0;

  for (let i = 1; i <= months; i++) {
    let electricityBill = Number(input[i]);
    electricity += electricityBill;
    water += 20;
    internet += 15;
    other += electricityBill + 35 + (electricityBill + 35) * 0.2;
  }

  let avg = (electricity + water + internet + other) / months;

  console.log(`Electricity: ${electricity.toFixed(2)} lv`);
  console.log(`Water: ${water.toFixed(2)} lv`);
  console.log(`Internet: ${internet.toFixed(2)} lv`);
  console.log(`Other: ${other.toFixed(2)} lv`);
  console.log(`Average: ${avg.toFixed(2)} lv`);
}

bills(["5", "68.63", "89.25", "132.53", "93.53", "63.22"]);
