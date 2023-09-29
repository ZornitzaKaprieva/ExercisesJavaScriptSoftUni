// Напишете функция, която чете цяло число от масив и на всеки следващ ред цели числа, 
// докато тяхната сума стане по-голяма или равна на първоначалното число. 
// След приключване да се отпечата сумата на въведените числа.

function sumNumbers(input){

    let num = Number(input[0]);

    let index = 1;
    let currentNum = Number(input[index]);
    let sum = 0;

    while(num > sum){
        

    sum += currentNum;
    index++
    currentNum = Number(input[index]);

    }

    console.log(sum);

}

sumNumbers(["100",
"10",
"20",
"30",
"40"]);
