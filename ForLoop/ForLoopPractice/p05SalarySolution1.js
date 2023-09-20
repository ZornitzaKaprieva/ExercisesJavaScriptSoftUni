// Шеф на компания забелязва че все повече служители прекарват  време в сайтове, които ги разсейват.
// За да предотврати това, той въвежда изненадващи проверки на отворените табове на браузъра на служителите си.
// Според отворения сайт в таба се налагат следните глоби:
// •	"Facebook" -> 150 лв.
// •	"Instagram" -> 100 лв.
// •	"Reddit" -> 50 лв.
// От конзолата се четат два реда:
// •	Брой отворени табове в браузъра n - цяло число в интервала [1...10]
// •	Заплата - число в интервала [500...1500]
// След това n – на брой пъти се чете име на уебсайт – текст
// Изход
// •	Ако по време на проверката заплатата стане по-малка или равна на 0 лева, на конзолата се изписва
// "You have lost your salary." и програмата приключва.
// •	В противен случай след проверката на конзолата се изписва остатъкът от заплатата (да се изпише като цяло число).

function salary(input) {

  let openTabs = Number(input[0]);
  let salary = Number(input[1]);

  let fine = 0;

  for (let i = 2; i <= input.length; i++) { //i <= openTabs
    let website = input[i];

    if (salary > fine) {
      switch (website) {
        case "Facebook":
          fine += 150;
          break;
        case "Instagram":
          fine += 100;
          break;
        case "Reddit":
          fine += 50;
          break;
      }
    }
  }

  let diff = salary - fine;

  if (salary > fine) {
    console.log(diff.toFixed(0));
  } else {
    console.log("You have lost your salary.");
  }
}

salary([
  "10",
  "750",
  "Facebook",
  "Dev.bg",
  "Instagram",
  "Facebook",
  "Reddit",
  "Facebook",
  "Facebook",
]);
