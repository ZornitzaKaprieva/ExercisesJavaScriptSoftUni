// Вашата задача е да напишете програма, която да изчислява процента на билетите за всеки тип от продадените билети: студентски(student), стандартен(standard) и детски(kid), за всички прожекции.
//  Трябва да изчислите и колко процента от залата е запълнена за всяка една прожекция.
// Вход
// Входът е поредица от цели числа и текст:
// •	На първия ред до получаване на командата "Finish" - име на филма – текст
// •	На втори ред – свободните места в салона за всяка прожекция – цяло число [1 … 100]
// •	За всеки филм, се чете по един ред до изчерпване на свободните места в залата или до получаване на командата "End":
// o	Типа на закупения билет - текст ("student", "standard", "kid")
// Изход
// На конзолата трябва да се печатат следните редове:
// •	След всеки филм да се отпечата, колко процента от кино залата е пълна
// "{името на филма} - {процент запълненост на залата}% full."
// •	При получаване на командата "Finish" да се отпечатат четири реда:
// o	"Total tickets: {общият брой закупени билети за всички филми}"
// o	"{процент на студентските билети}% student tickets."
// o	"{процент на стандартните билети}% standard tickets."
// o	"{процент на детските билети}% kids tickets."

function cinemaTickets(input) {
  let command = input.shift();

  let totalTicketsCount = 0;
  let studentCount = 0;
  let standardCount = 0;
  let kidsCount = 0;
  while (command !== "Finish") {
    let movieName = command;
    let freeSeats = Number(input.shift());

    let currentTicketCount = 0;
    for (let i = 1; i <= freeSeats; i++) {
      let ticketType = input.shift();

      switch (ticketType) {
        case "student":
          studentCount++;
          break;
        case "standard":
          standardCount++;
          break;
        case "kid":
          kidsCount++;
          break;
      }

      if (ticketType === "End" || currentTicketCount >= freeSeats) {
        break;
      }

      currentTicketCount++;
      totalTicketsCount++;
    }

    let percentFull = (currentTicketCount / freeSeats) * 100;
    console.log(`${movieName} - ${percentFull.toFixed(2)}% full.`);

    command = input.shift();
  }

  let percentStudent = (studentCount / totalTicketsCount) * 100;
  let percentStandard = (standardCount / totalTicketsCount) * 100;
  let percentKids = (kidsCount / totalTicketsCount) * 100;

  console.log(`Total tickets: ${totalTicketsCount}`);
  console.log(`${percentStudent.toFixed(2)}% student tickets.`);
  console.log(`${percentStandard.toFixed(2)}% standard tickets.`);
  console.log(`${percentKids.toFixed(2)}% kids tickets.`);
}

cinemaTickets([
  "Taxi",
  "10",
  "standard",
  "kid",
  "student",
  "student",
  "standard",
  "standard",
  "End",
  "Scary Movie",
  "6",
  "student",
  "student",
  "student",
  "student",
  "student",
  "student",
  "Finish",
]);
