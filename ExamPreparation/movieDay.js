// Вие сте режисьор на филма "Програмирането е забавно", като имате определено време за снимки.
//От вас се иска да напишете програма, с която ще разберете дали снимачният ден ще ви стигне да заснемете филма.
//Снимачният ден започва с подготовка на терен, което е 15 процента от времето за снимки!
//Филмът има определен брой сцени, които се заснемат за определено време.
// Вход
// От конзолата се четат 3 реда:
// 1.	Време за снимки – цяло число в диапазона [0… 1440]
// 2.	Брой сцени  – цяло число в диапазона [5… 25]
// 3.	Времетраене на сцена – цяло число в диапазона [20… 90]
// Изход
// На конзолата да се отпечата един ред:
// •	Ако времето за заснемане на филма ви стигне:
//   "You managed to finish the movie on time! You have {останало време} minutes left!"
// •	Ако времето НЕ ВИ стигне:
//   "Time is up! To complete the movie you need {нужно време} minutes."
// Останалото време да се закръгли до най-близкото цяло число.

function movieDay(input) {
  let snapshotTime = Number(input[0]);
  let numScenes = Number(input[1]);
  let sceneDuration = Number(input[2]);

  let preparation = snapshotTime * 0.15;

  let movieTime = numScenes * sceneDuration + preparation;

  let diff = Math.abs(snapshotTime - movieTime);

  if (snapshotTime >= movieTime) {
    console.log(
      `You managed to finish the movie on time! You have ${Math.round(
        diff
      )} minutes left!`
    );
  } else {
    console.log(
      `Time is up! To complete the movie you need ${Math.round(diff)} minutes.`
    );
  }
}

movieDay(["120", "10", "11"]);
