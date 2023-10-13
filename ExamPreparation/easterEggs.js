// Предстои Великден и едно от най-вълнуващите неща е боядисването на яйца. Наличните цветове за боядисване са:
// •	червено (red)
// •	оранжев (orange)
// •	син (blue)
// •	зелен (green)
// Напишете програма, която изчислява какъв е броят на яйцата от всеки цвят
// и от кой цвят яйцата са най - много, като знаете общия им брой и цвета на всяко яйце.
// Вход
// От конзолата се чете 1 ред:
// •	 Броят на боядисаните яйца – цяло число в интервала [1 ... 100]
// За всяко яйце се чете:
// o	Цветът на яйцето – текст с възможности: "red", "orange", "blue", "green"
// Изход
// Да се отпечатат на конзолата 5 реда:
// •	"Red eggs: {брой на червените яйца}"
// •	"Orange eggs: {брой на оранжевите яйца}"
// •	"Blue eggs: {брой на сините яйца}"
// •	"Green eggs: {брой на зелените яйца}"
// •	"Max eggs: {максимален брой на яйцата от цвят} -> {цвят}"

function easterEggs(input) {
  let numEggs = Number(input[0]);

  let redCounter = 0;
  let orangeCounter = 0;
  let blueCounter = 0;
  let greenCounter = 0;

  let maxEggs = Number.MIN_SAFE_INTEGER;
  let maxColor = "";

  for (let i = 1; i <= numEggs; i++) {
    let color = input[i];

    switch (color) {
      case "red":
        redCounter++;

        if (redCounter > maxEggs) {
          maxEggs = redCounter;
          maxColor = color;
        }

        break;
      case "orange":
        orangeCounter++;

        if (orangeCounter > maxEggs) {
          maxEggs = orangeCounter;
          maxColor = color;
        }

        break;
      case "blue":
        blueCounter++;

        if (blueCounter > maxEggs) {
          maxEggs = blueCounter;
          maxColor = color;
        }

        break;
      case "green":
        greenCounter++;

        if (greenCounter > maxEggs) {
          maxEggs = greenCounter;
          maxColor = color;
        }

        break;
    }
  }

  console.log(`Red eggs: ${redCounter}`);
  console.log(`Orange eggs: ${orangeCounter}`);
  console.log(`Blue eggs: ${blueCounter}`);
  console.log(`Green eggs: ${greenCounter}`);
  console.log(`Max eggs: ${maxEggs} -> ${maxColor}`);
}

easterEggs(["7", "orange", "blue", "green", "green", "blue", "red", "green"]);
