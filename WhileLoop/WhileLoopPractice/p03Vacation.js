// Джеси е решила да събира пари за екскурзия и иска от вас да ѝ помогнете да разбере дали ще успее да събере необходимата сума. Тя спестява или харчи част от парите си всеки ден. Ако иска да похарчи повече от наличните си пари, то тя ще похарчи всичко, което има и ще ѝ останат 0 лева.
// Вход
// От масива се четат:
// •	Пари нужни за екскурзията - реално число в интервала [1.00.. .25000.00]
// •	Налични пари - реално число в интервала [0.00... 25000.00]
// След това многократно се четат по два реда:
// •	Вид действие – текст с възможности "spend" и "save".
// •	Сумата, която ще спести/похарчи - реално число в интервала [0.01… 25000.00]
// Изход
// Функцията трябва да приключи при следните случаи:
// •	Ако 5 последователни дни Джеси само харчи, на конзолата да се изпише:
// o	"You can't save the money."
// o	"{Общ брой изминали дни}"
// •	Ако Джеси събере парите за почивката на конзолата се изписва:
// o	"You saved the money for {общ брой изминали дни} days."

function vacation(input) {
  let neededMoney = Number(input[0]);
  let availableMoney = Number(input[1]);

  index = 2;
  let action = input[index];
  index++;
  let amount = Number(input[index]);

  let spendCount = 0;
  let days = 0;

  while (availableMoney < neededMoney) {
    days++;

    if (action === "spend") {
      if (amount > availableMoney) {
        availableMoney = 0;
      } else {
        availableMoney -= amount;
      }
      spendCount++;
    } else {
      availableMoney += amount;
      spendCount = 0; //за да нулираме (броим последователните дни)
    }

    if (spendCount === 5) {
      console.log(`You can't save the money.`);
      console.log(`${days}`);
      return;
    }

    index++;
    action = input[index];
    index++;
    amount = Number(input[index]);
  }

  console.log(`You saved the money for ${days} days.`);
}

vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
