// Туристическа агенция има нужда от система за изчисляване на дължимата сума при резервация.
//В зависимост от различните дестинации и различните пакети, цената е различна.
// Цените за ден са следните:
// 	                    Банско/Боровец	                Варна/Бургас
// 	            с екипировка	без екипировка	    със закуска     без закуска
// Цена за ден	    100лв.	        80лв	            130лв.	        100лв.
// VIP отстъпка	    10%	            5%	                12%	            7%
// Ако клиентът е заявил престой повече от 7 дни, получава единия ден безплатно.
// Вход
// От конзолата се четат 4 реда:
// 1.	Име на града - текст с възможности ("Bansko",  "Borovets", "Varna" или "Burgas")
// 2.	Вид на пакета - текст с възможности ("noEquipment",  "withEquipment", "noBreakfast" или "withBreakfast")
// 3.	Притежание на VIP отстъпка - текст с възможности  "yes" или "no"
// 4.	Дни за престой - цяло число в интервала [-10000 … 10000]
// Изход
// На конзолата се отпечатва 1 ред:
// •	Когато потребителят е въвел всички данни правилно, отпечатваме:
// "The price is {цената, форматирана до втория знак}lv! Have a nice time!"
// •	Ако потребителят е въвел по-малко от 1 ден за престой, отпечатваме:
// "Days must be positive number!"
// •	Когато при въвеждането на града или вида на пакета се въведат невалидни данни, отпечатваме: "Invalid input!"

function travelAgency(input) {
  let city = input[0];
  let package = input[1];
  let vip = input[2];
  let days = Number(input[3]);

  let price1Day = 0;
  switch (city) {
    case "Bansko":
    case "Borovets":
      switch (package) {
        case "withEquipment":
          if (vip === "no") {
            price1Day = 100;
          } else {
            price1Day = 100 * 0.9;
          }
          break;
        case "noEquipment":
          if (vip === "no") {
            price1Day = 80;
          } else {
            price1Day = 80 * 0.95;
          }
          break;
      }
      break;
      break;
    case "Varna":
    case "Burgas":
      switch (package) {
        case "withBreakfast":
          if (vip === "no") {
            price1Day = 130;
          } else {
            price1Day = 130 * 0.88;
          }
          break;
        case "noBreakfast":
          if (vip === "no") {
            price1Day = 100;
          } else {
            price1Day = 100 * 0.93;
          }
          break;
      }
      break;
  }

  let sum = days * price1Day;
  if (days > 7) {
    sum = (days - 1) * price1Day;
  }

  //isValid check
  let isValidDAysOfStay = days >= 1;
  let isValidCity =
    city === "Bansko" ||
    city === "Borovets" ||
    city === "Varna" ||
    city === "Burgas";
  let isValidPackageType =
    package === "noEquipment" ||
    package === "withEquipment" ||
    package === "noBreakfast" ||
    package === "withBreakfast";
  let isValidInput = isValidCity && isValidPackageType && isValidDAysOfStay;

  if (!isValidDAysOfStay) {
    console.log("Days must be positive number!");
  } else if (!isValidCity || !isValidPackageType) {
    console.log("Invalid input!");
  } else if (isValidInput) {
    console.log(`The price is ${sum.toFixed(2)}lv! Have a nice time!`);
  }
}

travelAgency(["Borovets", "noEquipment", "yes", "6"]);
