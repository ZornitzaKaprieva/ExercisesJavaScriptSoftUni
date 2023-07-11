// Отговаряте за логистиката на различни товари. В зависимост от теглото на товара е нужно различно превозно средство.
// Цената на тон, за която се превозва товара е различна за всяко превозно средство:
// •	До 3 тона – микробус (200 лева на тон)
// •	От 4 до 11 тона – камион (175 лева на тон)
// •	12 и повече тона – влак (120 лева на тон)
// Вашата задача е да изчислите средната цена на тон превозен товар,
// както и процента на тоновете  превозвани с всяко превозно средство, спрямо общото тегло(в тонове) на всички товари.
// Вход
// От конзолата се четат поредица от числа, всяко на отделен ред:
// •	На първия ред – броя на товарите за превоз – цяло число в интервала [1...1000]
// •	За всеки един товар на отделен ред – тонажа на товара – цяло число в интервала [1...1000]
// Изход
// Да се отпечатат на конзолата 4 реда, както следва:
// •	Първи ред – средната цена на тон превозен товар (закръглена до втория знак след дес. запетая);
// •	Втори ред – процентът тона превозвани с микробус (процент между 0.00% и 100.00%);
// •	Трети ред – процентът  тона превозвани с камион (процент между 0.00% и 100.00%);
// •	Четвърти ред – процентът тона превозвани с влак (процент между 0.00% и 100.00%).

function logistics(input) {
  let load = Number(input[0]);

  let tonsVan = 0;
  let tonsTruck = 0;
  let tonsTrain = 0;

  for (let i = 1; i <= load; i++) {
    let loadTonnage = Number(input[i]);

    if (loadTonnage <= 3) {
      tonsVan += loadTonnage;
    } else if (loadTonnage <= 11) {
      tonsTruck += loadTonnage;
    } else {
      tonsTrain += loadTonnage;
    }
  }

  let priceVan = tonsVan * 200;
  let priceTruck = tonsTruck * 175;
  let priceTrain = tonsTrain * 120;

  let sumTons = tonsVan + tonsTruck + tonsTrain;
  let sumPrice = priceVan + priceTruck + priceTrain;
  let avgSum = sumPrice / sumTons;
  let percentVan = (tonsVan / sumTons) * 100;
  let percentTruck = (tonsTruck / sumTons) * 100;
  let percentTrain = (tonsTrain / sumTons) * 100;

  console.log(avgSum.toFixed(2));
  console.log(percentVan.toFixed(2) + "%");
  console.log(percentTruck.toFixed(2) + "%");
  console.log(percentTrain.toFixed(2) + "%");
}

logistics(["4", "1", "5", "16", "3"]);
