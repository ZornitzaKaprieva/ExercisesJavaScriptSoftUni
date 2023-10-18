// Преподавателският екип на СофтУни организира работен ден на басейн по случай настъпването на лятото.
//Вашата задача е да напишете програма, която да изчислява каква сума трябва да се заплати.
//За всеки един човек от екипа трябва да се заплати такса вход.
//Трябва да имате предвид, че един чадър стига за двама души. Знае се, че само 75% от екипа искат шезлонги.
//При изчислението на броя на чадърите и шезлонгите, техният брой да се закръгли до по-голямото цяло число.
// Вход
// От конзолата се четат 4 числа:
// 1.	Първи ред – брой на хората. Цяло число в интервала [1…100]
// 2.	Втори ред – такса вход. Реално число в интервала [0.00…50.00]
// 3.	Трети ред – цена един за шезлонг. Реално число в интервала [0.00…50.00]
// 4.	Четвърти ред – цена за един чадър. Реално число в интервала [0.00...50.00]
// Изход
// "{сумата за покриване на разходите} lv."
// Резултатът да се форматира до втората цифра след десетичния знак.

function poolDay(input) {
  let peopleNum = Number(input[0]);
  let entranceFee = Number(input[1]);
  let lounger1Price = Number(input[2]);
  let umbrella1Price = Number(input[3]);

  let entranceSum = peopleNum * entranceFee;

  let loungerNum = Math.ceil(peopleNum * 0.75);
  let loungerSum = loungerNum * lounger1Price;

  let umbrellaNum = Math.ceil(peopleNum * 0.5);
  let umbrellaSum = umbrellaNum * umbrella1Price;

  let sum = entranceSum + loungerSum + umbrellaSum;

  console.log(`${sum.toFixed(2)} lv.`);
}

poolDay(["21", "5.50", "4.40", "6.20"]);