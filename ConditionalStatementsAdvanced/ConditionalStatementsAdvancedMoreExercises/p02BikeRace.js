// Предстои Вело състезание за благотворителност,
// в което участниците са разпределени в младша("juniors") и старша("seniors") група.
// Парите се набавят от таксата за участие на велосипедистите.
// Според възрастовата група и вида на трасето на което ще се провежда състезанието, таксата е различна.
// Група	    trail	    cross-country	    downhill	    road
// juniors	    5.50	        8	            12.25	        20
// seniors	    7	            9.50	        13.75	        21.50
// Ако в "cross-country" състезанието се съберат 50 или повече участника(общо младши и старши), таксата  намалява с 25%. Организаторите отделят 5% процента от събраната сума за разходи.
// Вход
// От конзолата се четат 2 числа и един стринг, всяко на отделен ред:
// •	Първият ред – броят младши велосипедисти. Цяло число в интервала [1…100]
// •	Вторият ред – броят старши велосипедисти. Цяло число в интервала [1… 100]
// •	Третият ред – вид трасе – "trail", "cross-country", "downhill" или "road"
// Изход
// Да се отпечата на конзолата едно число:
// "{дарената сума}" - форматирана с точност до 2 знака след десетичната запетая.

function bikeRace(input) {
  let numJuniors = Number(input[0]);
  let numSeniors =  Number(input[1]);
  let trace = input[2];

  let feeJuniors = 0;
  let feeSeniors = 0;
  

  switch (trace) {
    case "trail":
      feeJuniors = numJuniors * 5.5;
      feeSeniors = numSeniors * 7; 
      break;
    case "cross-country":
      feeJuniors = numJuniors * 8;
      feeSeniors = numSeniors * 9.5;
      break;
    case "downhill":
      feeJuniors = numJuniors * 12.25;
      feeSeniors = numSeniors * 13.75;
      break;
    case "road":
      feeJuniors = numJuniors * 20;
      feeSeniors = numSeniors * 21.5;
      break;
  }

  let fee = feeJuniors + feeSeniors;

  if(trace === "cross-country" && numJuniors + numSeniors >= 50){
    fee = fee * 0.75;
  }

  let amountCollected = fee * 0.95;

  console.log(`${amountCollected.toFixed(2)}`);
}

bikeRace([10, 10, "trail"]);
