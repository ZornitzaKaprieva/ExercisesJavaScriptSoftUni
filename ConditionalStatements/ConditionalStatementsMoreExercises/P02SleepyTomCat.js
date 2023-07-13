// Котката Том обича по цял ден да спи, за негово съжаление стопанинът му си играе с него винаги когато има свободно време. 
// За да се наспи добре, нормата за игра на Том е 30 000  минути в година. 
// Времето за игра на Том зависи от почивните дни на стопанина му:
// •	Когато е на работа, стопанинът му си играе с него по 63 минути на ден.
// •	Когато почива, стопанинът му си играе с него  по 127 минути на ден.
// Напишете програма, която въвежда броя почивни дни и отпечатва дали Том може да се наспи добре 
// и колко е разликата от нормата за текущата година, като приемем че годината има 365 дни.
// Вход
// Входът се чете от конзолата и се състои от едно число – броят почивни дни – цяло число в интервала [0...365]
// Изход
// На конзолата трябва да се отпечатат два реда.
// •	Ако времето за игра на Том е над нормата за текущата година:
// o	 На първия ред отпечатайте: “Tom will run away”
// o	 На втория ред отпечатайте разликата от нормата във формат:
// “{H} hours and {M} minutes more for play”
// •	Ако времето за игра на Том е под нормата за текущата година:
// o	На първия ред отпечатайте: “Tom sleeps well”
// o	 На втория ред отпечатайте разликата от нормата във формат:
// “{H} hours and {M} minutes less for play”

function sleepyTomCat(input) {

    let holidays = input[0];

    let wordays = 365 - holidays;

    let holidaysPlay = holidays * 127;
    let wordaysPlay = wordays * 63;
    let timeForPlay = holidaysPlay + wordaysPlay;

    let diff = Math.abs(30000 - timeForPlay);
    let diffH = Math.floor(diff / 60);
    let diffM = (diff % 60);

    if (timeForPlay > 30000) {
        console.log("Tom will run away");
        console.log(`${diffH} hours and ${diffM} minutes more for play`);
    } else {
        console.log("Tom sleeps well");
        console.log(`${diffH} hours and ${diffM} minutes less for play`);

    }


}

sleepyTomCat([113]);