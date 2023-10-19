// По време на Великденските празници, Деси иска да отиде на почивка.
// В таблицата са показани кои са дестинациите и каква е цената за нощувка спрямо датите, през които си е резервирала екскурзията.
// Дестинация	21-23 март	24-27 март	28-31 март
// Франция	30 лв.	35 лв.	40 лв.
// Италия	28 лв.	32 лв.	39 лв.
// Германия	32 лв.	37 лв.	43 лв.
// Напишете програма, която изчислява колко ще струва екскурзията на Деси, като знаете дестинацията,
// на която иска да отиде, кога си е резервирала екскурзията и за колко нощувки ще е в дадената страна.
// Вход
// Входът се чете от конзолата и се състои от три реда:
// •	Първи ред - дестинация - текст с възможности"France", "Italy" или "Germany"
// •	Втори ред - дати, през които си е резервирала екскурзията - текст  с възможности "21-23",
// "24-27" или "28-31"
// •	Трети ред - брой нощувки - цяло число в интервала [1… 100]
// Изход
// На конзолата трябва да се отпечата един ред:
// "Easter trip to {дестинация} : {разходи за екскурзията} leva."
// Разходите за екскурзията да бъдат форматирани до втората цифра след десетичния знак.

function easterTrip(input) {
  let destination = input[0];
  let dates = input[1];
  let nights = Number(input[2]);

  let pricePerNight = 0;

  switch (dates) {
    case "21-23":
      switch (destination) {
        case "France":
          pricePerNight = 30;
          break;
        case "Italy":
          pricePerNight = 28;
          break;
        case "Germany":
          pricePerNight = 32;
          break;
      }
      break;
    case "24-27":
      switch (destination) {
        case "France":
          pricePerNight = 35;
          break;
        case "Italy":
          pricePerNight = 32;
          break;
        case "Germany":
          pricePerNight = 37;
          break;
      }
      break;
    case "28-31":
      switch (destination) {
        case "France":
          pricePerNight = 40;
          break;
        case "Italy":
          pricePerNight = 39;
          break;
        case "Germany":
          pricePerNight = 43;
          break;
      }
      break;
  }

  let priceNights = nights * pricePerNight;

  console.log(
    `Easter trip to ${destination} : ${priceNights.toFixed(2)} leva.`
  );
}

easterTrip(["Germany", "24-27", "5"]);
