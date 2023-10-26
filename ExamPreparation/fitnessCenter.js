// Напишете програма, която да изчислява броя на посетителите в един фитнес център.
// В началото програмата получава броя на посетителите на фитнеса и за всеки човек - дейността, която извършва във фитнеса.
// На края програмата трябва да отпечата броят трениращи за всяка една дейност ("Back", "Chest", 'Legs", "Abs")
// и броят клиенти, закупили продукт ("Protein shake", "Protein bar").
// Също така - процентът трениращи (спрямо общия брой посетители) и процентът на клиентите, закупили продукт от фитнеса.
// Вход
// От конзолата се чете число, след това поредица от низове, всяко на отделен ред:
// •	На първия ред – броят на посетителите във фитнеса – цяло число в интервала [1...1000]
// •	За всеки един посетител на отделен ред – дейността във фитнеса – текст ("Back", "Chest", "Legs", "Abs", "Protein shake" или "Protein bar")
// Изход
// Да се отпечатат на конзолата 8 реда, които съдържат следната информация:
// Ред 1 -	"{брой хора трениращи гръб} - back"
// Ред 2 -	"{брой хора трениращи гърди} - chest"
// Ред 3 -	"{брой хора трениращи крака} - legs"
// Ред 4 -	"{брой хора трениращи коремни мускули} - abs"
// Ред 5 -	"{брой хора закупили протеинов шейк} - protein shake"
// Ред 6 -	"{брой хора закупили протеинов блок} - protein bar"
// Ред 7 -	"{процент на хората дошли да тренират}% - work out"
// Ред 8 -	"{процент на хората дошли да купят протеин}% - protein"
// Всички проценти трябва да са форматирани до втората цифра след десетичния знак.

function fitnessCenter(input) {
  let visitors = Number(input.shift());

  let backCount = 0;
  let chestCount = 0;
  let legsCount = 0;
  let absCount = 0;
  let shakesCount = 0;
  let barsCount = 0;
  let cameToWorkOutCount = 0;
  let cameToBuyCount = 0;
  for (let i = 0; i < visitors; i++) {
    let activity = input[i];

    if (activity === "Back") {
      backCount++;
      cameToWorkOutCount++;
    }
    if (activity === "Chest") {
      chestCount++;
      cameToWorkOutCount++;
    }
    if (activity === "Legs") {
      legsCount++;
      cameToWorkOutCount++;
    }
    if (activity === "Abs") {
      absCount++;
      cameToWorkOutCount++;
    }
    if (activity === "Protein shake") {
      shakesCount++;
      cameToBuyCount++;
    }
    if (activity === "Protein bar") {
      barsCount++;
      cameToBuyCount++;
    }
  }

  console.log(`${backCount} - back`);
  console.log(`${chestCount} - chest`);
  console.log(`${legsCount} - legs`);
  console.log(`${absCount} - abs`);
  console.log(`${shakesCount} - protein shake`);
  console.log(`${barsCount} - protein bar`);
  let percentCameToWorkOut = (cameToWorkOutCount / visitors) * 100;
  let percentCameToBuy = (cameToBuyCount / visitors) * 100;
  console.log(`${percentCameToWorkOut.toFixed(2)}% - work out`);
  console.log(`${percentCameToBuy.toFixed(2)}% - protein`);
}

fitnessCenter([
  "10",
  "Back",
  "Chest",
  "Legs",
  "Abs",
  "Protein shake",
  "Protein bar",
  "Protein shake",
  "Protein bar",
  "Legs",
  "Abs",
]);
