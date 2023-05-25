// За даден период от време, всеки ден в болницата пристигат пациенти за преглед. Тя разполага първоначално със 7 лекари.
// Всеки лекар може да преглежда само по един пациент на ден, но понякога има недостиг на лекари,
// затова останалите пациенти се изпращат в други болници.
// Всеки трети ден, болницата прави изчисления и ако броят на непрегледаните пациенти е по-голям от броя на прегледаните,
// се назначава още един лекар. Като назначаването става преди да започне приемът на пациенти за деня.
// Напишете програма, която изчислява за дадения период броя на прегледаните и непрегледаните пациенти.
// Вход
// Входът се чете от конзолата и съдържа:
// •	На първия ред – периода, за който трябва да направите изчисления. Цяло число в интервала [1 ... 1000]
// •	На следващите редове(равни на броят на дните) – броя пациенти, които пристигат за преглед за текущия ден. Цяло число в интервала [0…10 000]
// Изход
// Да се отпечатат на конзолата 2 реда :
// •	На първия ред: "Treated patients: {брой прегледани пациенти}."
// •	На втория ред: "Untreated patients: {брой непрегледани пациенти}."

function hospital(input) {
  let period = Number(input[0]);

  let untreatedPatients = 0;
  let treatedPatients = 0;
  let doctorsCount = 7;

  for (let i = 1; i < input.length; i++) {
    let patientsNum = Number(input[i]);

    if (i % 3 === 0 && treatedPatients < untreatedPatients) {
      doctorsCount++;
    }

    if (patientsNum >= doctorsCount) {
      treatedPatients += doctorsCount;
      untreatedPatients += patientsNum - doctorsCount;
    } else {
      treatedPatients += patientsNum;
      untreatedPatients += 0;
    }
  }

  console.log(`Treated patients: ${treatedPatients}.`);
  console.log(`Untreated patients: ${untreatedPatients}.`);
}

hospital(["6", "25", "25", "25", "25", "25", "2"]);
