// Българският лекоатлет Тихомир Иванов започва тренировки за предстоящото европейско първенство по лека атлетика на закрито в Глазгоу, Шотландия.
// Вашата задача е да напишете софтуер, с който Иванов да следи своя прогрес и дали е достигнал желаните резултати.
// В началото програмата получава желаната височина на летвата от Тихомир, той започва тренировката си като поставя летвата на височина 30см по-ниско от целта.
// За всяка височина той има право на 3 скока, като за да бъде един скок успешен, той трябва да бъде над височината на летвата.
// При успешен скок (над летвата), височината й се вдига с 5 сантиметра. При три неуспешни скока на една и съща височина, тренировката приключва с неуспех.
// При достигане на желаната височина и нейното успешно прескачане, тренировката приключва с успех.
// Вход
// Входът е поредица от цели числа в интервала [100…300]:
// •	На първия ред се прочита желаната от Тихомир Иванов височина в сантиметри
// •	На всеки следващ ред до приключване на програмата се прочита височината от скока на Иванов
// Изход
// На конзолата трябва да се отпечата един ред:
// •	Ако Тихомир не успее да преодолее желаната височина:
// o	"Tihomir failed at {височина на летвата към момента на провала}cm after {брой скокове от началото на тренировката} jumps."
// •	Ако Тихомир успее да преодолее височината:
// o	"Tihomir succeeded, he jumped over {височина на прескочената последно летва}cm after {брой скокове за цялата тренировка} jumps."

function highJump(input) {
  let desiredHeight = Number(input.shift());

  let initialHeight = desiredHeight - 30;
  let numOfJumps = 0;
  let unsuccesCount = 0;
  let jump = Number(input.shift());

  let isNewRecord = false;
  let isFailed = false;
  while (initialHeight <= desiredHeight) {
    let currentJump = jump;
    numOfJumps++;

    if (currentJump > initialHeight) {
      if (initialHeight >= desiredHeight) {
        isNewRecord = true;
        break;
      }
      initialHeight += 5;
      unsuccesCount = 0;
    } else {
      unsuccesCount++;
      if (unsuccesCount == 3) {
        isFailed = true;
        break;
      }
    }

    jump = Number(input.shift());
  }

  if (isNewRecord) {
    console.log(
      `Tihomir succeeded, he jumped over ${desiredHeight}cm after ${numOfJumps} jumps.`
    );
  }

  if (isFailed) {
    console.log(
      `Tihomir failed at ${initialHeight}cm after ${numOfJumps} jumps.`
    );
  }
}

highJump(["231", "205", "212", "213", "228", "229", "230", "235"]);
