// Да се напише функция, която получава час и минути от 24-часово денонощие 
// и изчислява колко ще е часът след 15 минути. Резултатът да се отпечата във формат часове:минути. 
// Часовете винаги са между 0 и 23, а минутите винаги са между 0 и 59. 
// Часовете се изписват с една или две цифри. 
// Минутите се изписват винаги с по две цифри, с водеща нула, когато е необходимо. 

function timePlus15Minutes(input) {
    let initialHour = Number(input[0]);
    let initialMin = Number(input[1]);

    let totalMins = initialHour * 60 + initialMin + 15;

    let hour = Math.floor(totalMins / 60);
    let mins = totalMins % 60;

    if(hour === 24){
        hour = 0;
    }

    if (mins < 10) {
        console.log(`${hour}:0${mins}`)
    } else {
        console.log(`${hour}:${mins}`)
    }

}

timePlus15Minutes(["1", "46"]);
