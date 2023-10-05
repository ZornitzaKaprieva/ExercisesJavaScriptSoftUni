// Поканени сте на 30-ти рожден ден, на който рожденикът черпи с огромна торта.
// Той обаче не знае колко парчета могат да си вземат гостите от нея.
// Вашата задача е да напишете функция, която изчислява броя на парчетата, които гостите са взели, преди тя да свърши.
// Ще получите размерите на тортата (широчина и дължина – цели числа в интервала [1...1000])
// и след това на всеки ред, до получаване на командата "STOP" или докато не свърши тортата,
// броят на парчетата, които гостите вземат от нея.
// Бележка: Едно парче торта е с размер 1х1 см.
// Да се отпечата на конзолата един от следните редове:
// •	"{брой парчета} pieces are left." - ако стигнете до STOP и не са свършили парчетата торта
// •	"No more cake left! You need {брой недостигащи парчета} pieces more."

function cake(input) {
  let widthCake = Number(input[0]);
  let lengthCake = Number(input[1]);

  let cakePieces = widthCake * lengthCake;

  let index = 2;
  let piecesTaken = input[index];
  let sumPieces = 0;

  while (piecesTaken !== "STOP") {
    currentPiecesTaken = Number(input[index]);

    sumPieces += currentPiecesTaken;

    if (sumPieces > cakePieces) {
      let diff = sumPieces - cakePieces;
      console.log(`No more cake left! You need ${diff} pieces more.`);
      return;
    }

    index++;
    piecesTaken = input[index];
  }

  let diff = cakePieces - sumPieces;
  console.log(`${diff} pieces are left.`);
}

cake(["10", "2", "2", "4", "6", "STOP"]);
