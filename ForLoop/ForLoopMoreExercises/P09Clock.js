// Напишете програма, която отпечатва часовете в денонощието от 0:0 до 23:59, всеки на отделен ред.
// Часовете трябва да се изписват във формат "{час} : {минути}".

function clock() {
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m++) {
      console.log(`${h} : ${m}`);
    }
  }
}

clock();
