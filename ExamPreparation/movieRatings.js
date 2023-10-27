// Деси много обича да гледа филми, но често й е трудно да си избере подходящ за гледане.
// Набелязва си определен брой филми и иска да си избере кой филм да гледа спрямо рейтинга на филмите.
// Напишете програма, която показва кой филм е с най-висок рейтинг, кой е с най-нисък и колко е средният рейтинг от всички филми, които си е набелязала да гледа.
// Вход
// От конзолата първо се чете един ред:
// •	Брой филми, които си е набелязала Деси – цяло число в интервала [1…20]
// За всеки филм се прочитат два отделни реда:
// •	Име на филма – текст
// •	Рейтинг на филма - реално число в интервала [1.00…10.00]
// Изход
// Отпечатват се три реда в следния формат:
// •	"{име на филма с най-висок рейтинг} is with highest rating: {рейтинг на филма}"
// •	"{име на филма с най-нисък рейтинг} is with lowest rating: {рейтинг на филма}"
// •	"Average rating: {средният рейтинг на всички филми}"
// Максималният, минималният и средният рейтинг да се форматира до първата цифра след десетичния знак.

function movieRatings(input) {
  let moviesNum = Number(input.shift());

  let highestRating = Number.MIN_VALUE;
  let highestRatingMovie = "";
  let lowestRating = Number.MAX_VALUE;
  let lowestRatingMovie = "";
  let ratingSum = 0;
  for (let i = 0; i < moviesNum; i++) {
    let movieName = input.shift();
    let rating = Number(input.shift());

    if (rating > highestRating) {
      highestRating = rating;
      highestRatingMovie = movieName;
    } else if (rating < lowestRating) {
      lowestRating = rating;
      lowestRatingMovie = movieName;
    }

    ratingSum += rating;
  }

  let avgRating = ratingSum / moviesNum;
  console.log(
    `${highestRatingMovie} is with highest rating: ${highestRating.toFixed(1)}`
  );
  console.log(
    `${lowestRatingMovie} is with lowest rating: ${lowestRating.toFixed(1)}`
  );
  console.log(`Average rating: ${avgRating.toFixed(1)}`);
}

movieRatings([
  "5",
  "A Star is Born",
  "7.8",
  "Creed 2",
  "7.3",
  "Mary Poppins",
  "7.2",
  "Vice",
  "7.2",
  "Captain Marvel",
  "7.1",
]);
