// Младоженците искат да направят списък кой на кое място ще седи на сватбената церемония.
// Местата са разделени на различни сектори. Секторите са главните латински букви като започват от A.
// Във всеки сектор има определен брой редове. От конзолата се чете броят на редовете в първия сектор (A),
// като във всеки следващ сектор редовете се увеличават с 1.
// На всеки ред има определен брой места - тяхната номерация е представена с малките латински букви.
// Броят на местата на нечетните редове се прочита от конзолата, а на четните редове местата са с 2 повече.
// Вход
// От конзолата се четaт 3 реда:
// •	Последният сектор от секторите - символ (B-Z)
// •	Броят на редовете в първия сектор - цяло число (1-100)
// •	Броят на местата на нечетен ред - цяло число (1-24)
// Изход
// Да се отпечата на конзолата всяко място на отделен ред по следния формат:
// {сектор}{ред}{място}
// Накрая трябва да отпечата броя на всички места.

function weddingSeats (input){
    let lastSector = input.shift();
    let initialRowNum = Number(input.shift());
    let seatOddNum = Number(input.shift());

    let firstSector = 'A';
    let firstCharNum = 'a'.charCodeAt(0);
    let totalSeats = 0;

    for (let i = firstSector.charCodeAt(0); i <= lastSector.charCodeAt(0); i++) {
        for (let row = 1; row <= initialRowNum; row++) {
            if (row % 2 !== 0) {
                for (let j = firstCharNum; j < firstCharNum + seatOddNum; j++) {
                    let currentLetter = String.fromCharCode(i);
                    let currentSmallLetter = String.fromCharCode(j);
                    console.log(`${currentLetter}${row}${currentSmallLetter}`);
                    totalSeats++;
                }
            } else {
                for (let j = firstCharNum; j < firstCharNum + seatOddNum + 2; j++) {
                    let currentLetter = String.fromCharCode(i);
                    let currentSmallLetter = String.fromCharCode(j);
                    console.log(`${currentLetter}${row}${currentSmallLetter}`);
                    totalSeats++;
                }
            }
        }

        initialRowNum++;
    }

    console.log(totalSeats);
}

weddingSeats([ 'B', '3', '2' ]);