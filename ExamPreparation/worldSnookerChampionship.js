// С наближаването на световното първенство по снукър в театъра Крусибъл в Шефилд, Англия,
// феновете нямат търпение да се сдобият с ценните билети.
// Заради големия наплив от хора, организаторите ви молят да напишете програма за продаване на билети,
// като се има предвид следния ценоразпис:
// 	             Четвъртфинал   Полуфинал      Финал
// Стандартен	      55.50 £/бр.	75.88 £/бр.	   110.10 £/бр.
// Премиум	          105.20 £/бр.	125.22 £/бр.   160.66 £/бр.
// ВИП	              118.90 £/бр.	300.40 £/бр.   400 £/бр.
// При закупуване на билет, зрителят може да избере опция, снимка с трофея, на цена 40 лири.
// При достигане на определена сума има отстъпки:
// •	Над 4000 лири има 25% отстъпка и безплатни снимки с трофея (ако  опцията за снимки е избрана,
//     таксата от 40 лири за билет не се включва)
// •	Над 2500 лири има 10% отстъпка
// При избрана опция за снимки с трофея, цената се начислява след изчисляването на отстъпките.
// Вход
// От конзолата се четат 4 реда:
// 1.	Етап на първенството – текст - “Quarter final ”, “Semi final” или “Final”
// 2.	Вид на билета – текст - “Standard”, “Premium” или “VIP”
// 3.	Брой билети – цяло число в интервала [1 … 30]
// 4.	Снимка с трофея – символ – 'Y' (да) или 'N' (не)
// Изход
// На конзолата се отпечатва 1 ред:
// •	"Цената, която трябва да се заплати, форматирана до втората цифра след десетичния знак"

function worldSnookerChampionship(input) {
  let championshipStage = input.shift(); //“Quarter final”, “Semi final” или “Final”
  let ticketType = input.shift(); // “Standard”, “Premium” или “VIP”
  let ticketsNum = Number(input.shift());
  let trophyPhoto = input.shift();

  let pricePerTicket = 0;
  switch (championshipStage) {
    case "Quarter final":
      if (ticketType === "Standard") {
        pricePerTicket = 55.5;
      } else if (ticketType === "Premium") {
        pricePerTicket = 105.2;
      } else if (ticketType === "VIP") {
        pricePerTicket = 118.9;
      }
      break;
    case "Semi final":
      if (ticketType === "Standard") {
        price1Ticket = 75.88;
      } else if (ticketType === "Premium") {
        pricePerTicket = 125.22;
      } else if (ticketType === "VIP") {
        pricePerTicket = 300.4;
      }
      break;
    case "Final":
      if (ticketType === "Standard") {
        pricePerTicket = 110.1;
      } else if (ticketType === "Premium") {
        pricePerTicket = 160.66;
      } else if (ticketType === "VIP") {
        pricePerTicket = 400;
      }
      break;
  }

  let ticketsPrice = ticketsNum * pricePerTicket;
  let pricePerPhoto = 0;
  if (ticketsPrice > 4000) {
    ticketsPrice = ticketsPrice * 0.75;
  } else if (ticketsPrice > 2500) {
    ticketsPrice = ticketsPrice * 0.9;
    if (trophyPhoto === "Y") {
      pricePerPhoto = 40;
    }
  } else {
    if (trophyPhoto === "Y") {
      pricePerPhoto = 40;
    }
  }

  let photoPrice = pricePerPhoto * ticketsNum;
  let sum = ticketsPrice + photoPrice;
  console.log(sum.toFixed(2));
}

worldSnookerChampionship(["Final", "Premium", "25", "Y"]);
