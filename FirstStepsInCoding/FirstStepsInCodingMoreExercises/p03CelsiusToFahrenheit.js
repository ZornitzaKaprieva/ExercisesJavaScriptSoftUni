// Напишете програма, която чете градуси по скалата на Целзий (°C) 
// и ги преобразува до градуси по скалата на Фаренхайт (°F). 
// Потърсете в Интернет подходяща формула, с която да извършите изчисленията. 
// Форматирате изхода до втория знак след десетичната запетая. 

function celsiusToFahrenheit(input){

    let celsius = input[0];

    let fahrenheit = Number(celsius * 1.8 + 32).toFixed(2);

    console.log(fahrenheit);
}

celsiusToFahrenheit([25]);
