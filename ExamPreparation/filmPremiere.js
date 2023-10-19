// За предстояща премиера на три известни продукции, местно кино ви наема да напишете софтуер,
// който да изчислява цената, която клиентите трябва да заплатят, според филма и пакета, който са избрали.
// 	        John Wick	    Star Wars	    Jumanji
// Напитка	    12 лв./бр.	    18 лв. /бр.	    9 лв. /бр.
// Пуканки	    15 лв. /бр.	    25 лв. /бр.	    11 лв. /бр.
// Меню	    19 лв. /бр.	    30 лв. /бр.	    14 лв. /бр.
// Напишете програма, която изчислява цената, която трябва да се заплати, като имате в предвид следните отстъпки:
// •	При избран филм "Star Wars" и закупени поне четири билета, има 30% семейна отстъпка.
// •	При избран филм "Jumanji" и закупени точно два билета, има 15% отстъпка за двама.
// Вход
// Входът се чете от конзолата и се състои от три реда:
// •	Първи ред - прожекция - текст с възможности"John Wick", "Star Wars" или "Jumanji"
// •	Втори ред - пакет за филм - текст  с възможности "Drink", "Popcorn" или "Menu"
// •	Трети ред - брой билети - цяло число в интервала [1… 30]
// Изход
// На конзолата трябва да се отпечата един ред:
// "Your bill is {крайна цена} leva."
// Цената да бъде закръглена до втората цифра след десетичния знак.

function filmPremiere(input) {
  let movieName = input[0];
  let moviePack = input[1];
  let ticketsNum = Number(input[2]);

  let ticketPrice = 0;
  switch (movieName) {
    case "John Wick":
      switch (moviePack) {
        case "Drink":
          ticketPrice = 12;
          break;
        case "Popcorn":
          ticketPrice = 15;
          break;
        case "Menu":
          ticketPrice = 19;
          break;
      }
      break;
    case "Star Wars":
      switch (moviePack) {
        case "Drink":
          ticketPrice = 18;
          break;
        case "Popcorn":
          ticketPrice = 25;
          break;
        case "Menu":
          ticketPrice = 30;
          break;
      }
      break;
    case "Jumanji":
      switch (moviePack) {
        case "Drink":
          ticketPrice = 9;
          break;
        case "Popcorn":
          ticketPrice = 11;
          break;
        case "Menu":
          ticketPrice = 14;
          break;
      }
      break;
  }

  let sum = ticketPrice * ticketsNum;
  if (movieName === "Star Wars" && ticketsNum >= 4) {
    sum = sum * 0.7;
  }

  if (movieName === "Jumanji" && ticketsNum === 2) {
    sum = sum * 0.85;
  }

  console.log(`Your bill is ${sum.toFixed(2)} leva.`);
}

filmPremiere(["Star Wars", "Popcorn", "4"]);
