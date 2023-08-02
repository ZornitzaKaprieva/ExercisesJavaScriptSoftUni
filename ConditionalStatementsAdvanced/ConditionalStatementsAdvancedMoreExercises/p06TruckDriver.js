// Напишете програма която пресмята колко пари ще изкара шофьор на ТИР за един сезон.
// На входа програмата получава през кой сезон ще работи шофьора, както и колко километра на месец ще кара.
// Един сезон е 4 месеца. Според зависи сезона и броя километри на месец ще му се заплаща различна сума на километър:

// 	                             Пролет/Есен	        Лято	        Зима
// км на месец <= 5000	            0.75 лв./км	        0.90 лв./км	    1.05 лв./км
// 5000 < км на месец <= 10000	    0.95 лв./км	        1.10 лв./км	    1.25 лв./км
// 10000 < км на месец <= 20000	                1.45 лв./км – за който и да е сезон.

// След като са извадени 10% за данъци се отпечатват останалите пари.
// Вход
// Входът се чете от конзолата и се състои от два реда:
// •	Първи ред – Сезон – текст "Spring", "Summer", "Autumn" или "Winter"
// •	Втори ред –  Километри на месец – реално число в интервала [10.00...20000.00]
// Изход
// На конзолата трябва да се отпечатат едно число:
// •	Заплатата на шофьора след данъците, форматирана до втория знак след десетичната запетая.

function truckDriver(input) {
  let season = input[0];
  let kmPerMonth = Number(input[1]);

  let kmPerSeason = kmPerMonth * 4;
  let lvPerKm = 0;

  switch (season) {
    case "Spring":
    case "Autumn":
      if (kmPerMonth <= 5000) {
        lvPerKm = 0.75;
      } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
        lvPerKm = 0.95;
      } else {
        lvPerKm = 1.45;
      }

      break;
    case "Summer":
      if (kmPerMonth <= 5000) {
        lvPerKm = 0.9;
      } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
        lvPerKm = 1.1;
      } else {
        lvPerKm = 1.45;
      }

      break;
    case "Winter":
      if (kmPerMonth <= 5000) {
        lvPerKm = 1.05;
      } else if (kmPerMonth > 5000 && kmPerMonth <= 10000) {
        lvPerKm = 1.25;
      } else {
        lvPerKm = 1.45;
      }

      break;
  }

  let salary = kmPerSeason * lvPerKm * 0.9;

  console.log(salary.toFixed(2));
}

truckDriver(["Summer", 3455]);
