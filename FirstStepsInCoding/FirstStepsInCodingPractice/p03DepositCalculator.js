// Напишете програма, която изчислява каква сума ще получите 
// в края на депозитния период при определен лихвен процент. 
// Използвайте следната формула: 
// сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
// Вход:
// От конзолата се четат 3 реда:
// 1.	Депозирана сума – реално число в интервала [100.00 … 10000.00]
// 2.	Срок на депозита (в месеци) – цяло число в интервала [1…12]
// 3.	Годишен лихвен процент – реално число в интервала [0.00 …100.00]
// Изход
// Да се отпечата на конзолата сумата в края на срока.


function depositCalculator(input){
    
    let depositedSum = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let annualInterestPercent = Number(input[2]);

    let annualInterestPercentDecimal = annualInterestPercent / 100;

    let finalSum = depositedSum + depositPeriod * ((depositedSum * annualInterestPercentDecimal)/12);

    console.log(finalSum);
}

depositCalculator(["2350", "6", "7"]);
