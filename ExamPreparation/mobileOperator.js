// Мобилен оператор предлага договори с различна месечна такса в зависимост от срока - 1 или 2 години.
// Да се напише програма, която изчислява дължимата сума, която трябва да се плати за определен брой месеци.
// срок / тип	    Small	    Middle	    Large	    ExtraLarge
// 1 година(one)	9.98 лв.	18.99 лв.	25.98 лв.	35.99 лв.
// 2 години(two)	8.58 лв.	17.09 лв.	23.59 лв.	31.79 лв.
// Условия:
// •	при добaавен мобилен интернет, към таксата за един месец се добавя:
// o	при такса по-малка или равна на 10.00 лв.  5.50 лв.
// o	при такса по-малка или равна на 30.00 лв.  4.35 лв.
// o	при такса по-голяма от 30.00 лв.  3.85 лв.
// •	ако договорът e за две години, общата сума се намалява с 3.75%
// Вход
// От конзолата се четат 3 реда:
// 1.	Срок на договор – текст – "one", или "two"
// 2.	Тип на договор – текст – "Small",  "Middle", "Large"или "ExtraLarge"
// 3.	Добавен мобилен интернет – текст – "yes" или "no"
// 4.	Брой месеци за плащане - цяло число в интервала [1 … 24]
// Изход
// На конзолата се отпечатва 1 ред:
// •	Цената, която заплаща клиентът, форматирана до втория знак след десетичната запетая, в следния формат:
//"{цената} lv."

function mobileOperator(input) {
  let contractTerm = input.shift();
  let contractType = input.shift();
  let internet = input.shift();
  let months = Number(input.shift());

  let priceMonth = 0;
  switch (contractType) {
    case "Small":
      switch (contractTerm) {
        case "one":
          priceMonth = 9.98;
          break;
        case "two":
          priceMonth = 8.58;
          break;
      }
      break;
    case "Middle":
      switch (contractTerm) {
        case "one":
          priceMonth = 18.99;
          break;
        case "two":
          priceMonth = 17.09;
          break;
      }
      break;
    case "Large":
      switch (contractTerm) {
        case "one":
          priceMonth = 25.98;
          break;
        case "two":
          priceMonth = 23.59;
          break;
      }
      break;
    case "ExtraLarge":
      switch (contractTerm) {
        case "one":
          priceMonth = 35.99;
          break;
        case "two":
          priceMonth = 31.79;
          break;
      }
      break;
  }

  let internetPrice = 0;
  if (internet === "yes") {
    if (priceMonth <= 10) {
      internetPrice = 5.5;
    } else if (priceMonth <= 30) {
      internetPrice = 4.35;
    } else if (priceMonth > 30) {
      internetPrice = 3.85;
    }
  }

  let price = (priceMonth + internetPrice) * months;
  if (contractTerm === "two") {
    price = price * 0.9625;
  }

  console.log(`${price.toFixed(2)} lv.`);
}

//mobileOperator(["one", "Small", "yes", "10"]);
mobileOperator(["two", "Large", "no", "10"]);
