// Напишете функция за конвертиране на щатски долари (USD) в български лева (BGN). 
// Използвайте фиксиран курс между долар и лев: 
// 1 USD = 1.79549 BGN.

function usdToBgn(input){

    let usd = Number(input[1]); // начинът да превръщаме стринг в число
    let bgn = usd * 1.79549 
    
    console.log(bgn);
}

usdToBgn(["22"]);
