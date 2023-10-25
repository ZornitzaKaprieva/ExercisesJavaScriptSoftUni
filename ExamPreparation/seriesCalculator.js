// Напишете програма, която изчислява колко време ще ви отнеме да изгледате всички епизоди на един сериал в минути. Ще разполагате с брой сезони, брой епизоди на сезон и времетраене на един епизод. Във всеки епизод има реклами, които са с продължителност 20% от времето на един епизод. Също така знаете, че всеки сезон завършва със специален епизод, който е с 10м по-дълъг от обичайното.
// Вход
// От конзолата се четат 4 реда:
// •	Име на сериал - текст
// •	Брой сезони – цяло число в диапазона [1… 10]
// •	Брой епизоди  – цяло число в диапазона [10… 80]
// •	Времетраене на обикновен епизод без рекламите – реално число в диапазона [40.0… 65.0]
// Изход
// Да се отпечата на конзолата времето, необходимо за изглеждане на всички епизоди, закръглено до най-близкото цяло число надолу в следния формат:
// "Total time needed to watch the {име на сериал} series is {време} minutes."

function seriesCalculator(input) {
  let series = input[0];
  let seasons = Number(input[1]);
  let episodes = Number(input[2]);
  let durationWithoutAds = Number(input[3]);

  let adsTime = durationWithoutAds * 0.2;
  let durationPlusAds = durationWithoutAds + adsTime;
  let specialEpisodesDuration = seasons * 10;

  let neededTime =
    seasons * episodes * durationPlusAds + specialEpisodesDuration;
  console.log(
    `Total time needed to watch the ${series} series is ${Math.floor(
      neededTime.toFixed(0)
    )} minutes.`
  );
}

seriesCalculator(["Lucifer", "3", "18", "55"]);
