// Трима спортни състезатели финишират за някакъв брой секунди (между 1 и 50). 
// Да се напише функция, която получава три аргумента - секунди и пресмята сумарното им време във формат 
// "минути:секунди". Секундите да се изведат с водеща нула (2  "02", 7  "07", 35  "35"). 

function  sumSeconds(input){

    let player1 = Number(input[0]);
    let player2 = Number(input[1]);
    let player3 = Number(input[2]);

    let sum = player1 + player2 + player3;

    let min = Math.floor(sum/60);
    let sec = sum % 60; 

   if(sec < 10){
    console.log(`${min}:0${sec}`);
   } else{
     console.log(`${min}:${sec}`);
   }
}

sumSeconds(["22", "7", 
"34"]);
