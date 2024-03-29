// На световно първенство по художествена гимнастика три от държавите се изявяват като лидери в класирането (Русия, България, Италия).
// Вашата задача е да изчислите каква е оценката дадена от журито за конкретно съчетание,
// като знаете държавата, която е играла и с кой уред е играла - лента, обръч или въже. За съчетанието си, отбора е получил две оценки:
// оценка за трудност и оценка за изпълнение на съчетанието, като крайната оценка е сбор на двете оценки.
// В таблицата са показани какви оценки за трудност и изпълнение са получили ансамблите за всеки един уред.
// Уред	            Русия	            България	        Италия
// Лента(ribbon)	Трудност: 9.100     Трудност: 9.600     Трудност: 9.200
//                 Изпълнение: 9.400	Изпълнение: 9.400   Изпълнение: 9.500
// Обръч(hoop)	    Трудност: 9.300     Трудност: 9.550     Трудност: 9.450
//                 Изпълнение: 9.800	Изпълнение: 9.750	Изпълнение: 9.350
// Въже(rope)	    Трудност: 9.600     Трудност: 9.500     Трудност: 9.700
//                 Изпълнение: 9.000	Изпълнение: 9.400	Изпълнение: 9.150
// Напишете програма, която изчислява каква е оценката на дадена държава за определен уред
//и колко процента не им достигат, за да имат максималната оценка, която е 20.
// Вход
// Входът се чете от конзолата и се състои от два реда:
// •	Първи ред – държава – текст ("Russia", "Bulgaria" или "Italy")
// •	Втори ред – уред - текст ("ribbon", "hoop" или "rope")
// Изход
// На конзолата трябва да се отпечатат два реда:
//  •	Първи ред: "The team of {държава} get {обща оценка} on {уред}."
//  •	Втори ред:  "{процентът, който не им достига до максималния брой точки}%"
//  Общата оценка да бъде форматирана до третата цифра след десетичния знак, а процентът да бъде форматиран до втората цифра след десетичния знак.

function gymnastics(input) {
  let country = input.shift();
  let aparatus = input.shift();

  let score = 0;
  switch (country) {
    case "Russia":
      switch (aparatus) {
        case "ribbon":
          score = 9.1 + 9.4;
          break;
        case "hoop":
          score = 9.3 + 9.8;
          break;
        case "rope":
          score = 9.6 + 9;
          break;
      }
      break;
    case "Bulgaria":
      switch (aparatus) {
        case "ribbon":
          score = 9.6 + 9.4;
          break;
        case "hoop":
          score = 9.55 + 9.75;
          break;
        case "rope":
          score = 9.5 + 9.4;
          break;
      }
      break;
    case "Italy":
      switch (aparatus) {
        case "ribbon":
          score = 9.2 + 9.5;
          break;
        case "hoop":
          score = 9.45 + 9.35;
          break;
        case "rope":
          score = 9.7 + 9.15;
          break;
      }
      break;
  }

  console.log(`The team of ${country} get ${score.toFixed(3)} on ${aparatus}.`);
  let percentScore = (score / 20) * 100;
  let percent = 100 - percentScore;
  console.log(`${percent.toFixed(2)}%`);
}

gymnastics(["Bulgaria", "ribbon", ""]);
