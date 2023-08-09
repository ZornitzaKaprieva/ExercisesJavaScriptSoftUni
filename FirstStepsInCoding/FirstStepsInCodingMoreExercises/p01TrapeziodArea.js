// Напишете програма, която чете от конзолата три дробни числа b1, b2 и h 
// и пресмята лицето на трапец с основи b1 и b2 и височина h. 
// Формулата за лице на трапец е (b1 + b2) * h / 2.

function trapeziodArea(input){

    let b1 = Number(input[0]);
    let b2 = Number(input[1]);
    let h = Number(input[2]);

    let area = (b1 + b2) * h / 2;

    console.log(Number(area).toFixed(2));

}

trapeziodArea(["8", "13", "7"])
