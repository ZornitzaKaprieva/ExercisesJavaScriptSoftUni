// Преди време Петър си е купил биткойн. Сега ще ходи на екскурзия из Европа и ще му трябва евро.
// Освен биткойн има и китайски юанa. Той иска да обмени парите си в евро за екскурзията.
// Напишете програма, която да пресмята колко евро може да купи спрямо следните валутни курсове:
// •	1 биткойн = 1168 лева.
// •	1 китайски юан = 0.15 долара.
// •	1 долар = 1.76 лева.
// •	1 евро = 1.95 лева.
// Обменното бюро има комисионна от 0 до 5 процента от крайната сума в евро.
// Вход
// От конзолата се четат 3 числа:
// •	На първия ред – броят биткойни. Цяло число в интервала [0…20]
// •	На втория ред – броят китайски юана. Реално число в интервала [0.00… 50 000.00]
// •	На третия ред – комисионната. Реално число в интервала [0.00 ... 5.00]
// Изход
// На конзолата да се отпечата 1 число - резултатът от обмяната на валутите.
//Резултатът да се форматира до втората цифра след десетичната запетая.

function changeBureau(input) {
  let bitcoinsQty = Number(input[0]);
  let yuanQty = Number(input[1]);
  let commission = Number(input[2]);

  let oneBitcoinInLeva = 1168;
  let levaFromBitcoins = bitcoinsQty * oneBitcoinInLeva;

  let oneYuanInLeva = 0.15 * 1.76;
  let levaFromYuan = yuanQty * oneYuanInLeva;

  let sumLeva = levaFromBitcoins + levaFromYuan;
  let sumEU = sumLeva / 1.95;

  let commissionDecimal = (commission / 100) * sumEU;
  let sum = sumEU - commissionDecimal;

  console.log(sum.toFixed(2));
}

changeBureau(["1", "5", "5"]);
//changeBureau(["20", "5678", "2.4"]);
