// Габи иска да започне здравословен начин на живот
// и си е поставила за цел да върви 10 000 стъпки всеки ден.
// Някои дни обаче е много уморена от работа и ще иска да се прибере преди да постигне целта си.
// Напишете функция, която чете от масив по колко стъпки изминава тя
// всеки път като излиза през деня и когато постигне целта си да се изписва "Goal reached! Good job!"
// и колко стъпки повече е извървяла "{разликата между стъпките} steps over the goal!"
// Ако иска да се прибере преди това, тя ще въведе командата "Going home"
// и ще въведе стъпките, които е извървяла докато се прибира.
// След което, ако не е успяла да постигне целта си, на конзолата трябва да се изпише:
// "{разликата между стъпките} more steps to reach goal."

function walking(input) {
  let index = 0;
  let steps = input[index];

  let sumSteps = 0;

  while (sumSteps <= 10000) {
    currentSteps = Number(input[index]);

    if (steps === "Going home") {
      let stepsToHome = Number(input[index + 1]);

      sumSteps = sumSteps + stepsToHome;

      if (sumSteps < 10000) {
        let diff = 10000 - sumSteps;
        console.log(`${diff} more steps to reach goal.`);
      } else {
        let diff = sumSteps - 10000;
        console.log(`Goal reached! Good job!\n${diff} steps over the goal!`);
      }

      return;
    }

    sumSteps += currentSteps;

    index++;
    steps = input[index];
  }

  let diff = sumSteps - 10000;
  console.log(`Goal reached! Good job!\n${diff} steps over the goal!`);
}

// walking(["1000", "1500", "2000", "6500"]);
walking(["1500", "300", "2500", "3000", "Going home", "200"]);
