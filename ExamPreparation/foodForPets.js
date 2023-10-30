// Ани има два домашни любимеца - куче и котка.
// Напишете програма, която изготвя статистика за храната на домашните любимци за определен брой дни.
// Всеки ден кучето и котката изяждат различно количество от общата им храна.
// На всеки трети ден получават награда - бисквитки. Количеството на бисквитките е 10% от общо изядената храна за деня.
// Вашата програма трябва да отпечатва статистика за количеството бисквитки, които са изяли,
// колко процента от първоначалното количество обща храна са изяли и колко процента от изядената храна е изяло кучето и колко е изяла котката.
// Вход
// Първоначално се чете един ред:
// •	Брой дни – цяло число в диапазона [1…30]
// •	Общо количество храна – реално число в диапазона [0.00…10000.00]
// След това за всеки ден се чете:
// o	Количество изядена храна от кучето – цяло число в диапазона [10…500]
// o	Количество изядена храна от котката – цяло число в диапазона [10…500]
// Изход
// На конзолата да се отпечатват четири реда:
// •	"Total eaten biscuits: {количество изядени бисквитки}gr."
// •	"{процент изядена храна}% of the food has been eaten."
// •	"{процент изядена храна от кучето}% eaten from the dog."
// •	"{процент изядена храна от котката}% eaten from the cat."
// Количеството изядени бисквитки трябва да бъде закръглено до най–близкото цяло число,
// а процентът храна трябва да бъде форматиран до втората цифра след десетичния знак.

function foodForPets(input) {
  let days = Number(input.shift());
  let totalFood = Number(input.shift());

  let eatenDogFood = 0;
  let eatenCatFood = 0;
  let eatenFood = 0;
  let eatenBiscuits = 0;
  let daysCount = 0;
  for (let i = 1; i <= days; i++) {
    let foodEatenByDog = Number(input.shift());
    let foodEatenByCat = Number(input.shift());

    eatenDogFood += foodEatenByDog;
    eatenCatFood += foodEatenByCat;
    eatenFood += foodEatenByDog + foodEatenByCat;

    daysCount++;
    if (daysCount % 3 == 0) {
      eatenBiscuits += (foodEatenByDog + foodEatenByCat) * 0.1;
    }
  }

  let allBiscuits = Math.round(eatenBiscuits);
  let percentEatenFood = (eatenFood / totalFood) * 100;
  let percentEatenFoodByDog = (eatenDogFood / eatenFood) * 100;
  let percentEatenFoodCat = (eatenCatFood / eatenFood) * 100;

  console.log(`Total eaten biscuits: ${allBiscuits}gr.`);
  console.log(`${percentEatenFood.toFixed(2)}% of the food has been eaten.`);
  console.log(`${percentEatenFoodByDog.toFixed(2)}% eaten from the dog.`);
  console.log(`${percentEatenFoodCat.toFixed(2)}% eaten from the cat.`);
}

foodForPets(["3", "1000", "300", "20", "100", "30", "110", "40"]);
