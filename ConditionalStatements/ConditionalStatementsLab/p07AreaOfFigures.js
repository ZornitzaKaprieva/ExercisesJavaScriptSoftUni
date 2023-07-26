// Да се напише функция,  която получава като вида и размерите на геометрична фигура и пресмята лицето й. Фигурите са четири вида: квадрат (square), правоъгълник (rectangle), кръг (circle) и триъгълник (triangle). На първия ред на входа се чете вида на фигурата (текст със следните възможности: square, rectangle, circle или triangle). 
// •	Ако фигурата е квадрат (square): на следващия ред се чете едно дробно число - дължина на страната му
// •	Ако фигурата е правоъгълник (rectangle): на следващите два реда четат две дробни числа - дължините на страните му
// •	Ако фигурата е кръг (circle): на следващия ред чете едно дробно число - радиусът на кръга
// •	Ако фигурата е триъгълник (triangle): на следващите два реда четат две дробни числа - дължината на страната му и дължината на височината към нея
// Резултатът да се закръгли до 3 цифри след десетичната запетая. 

function areaOfFigures(input) {

    let shape = input[0];

    if (shape === "square") {

        let a = Number(input[1]);
        let area = a * a;
        console.log(area.toFixed(3));

    } else if (shape === "rectangle") {

        let a = Number(input[1]);
        let b = Number(input[2]);
        let area = a * b;
        console.log(area.toFixed(3));

    } else if (shape === "circle") {

        let r = Number(input[1]);
        let area = Math.PI * r * r;
        console.log(area.toFixed(3));

    } else if (shape === "triangle") {

        let a = Number(input[1]);
        let h = Number(input[2]);
        let area = (a * h) / 2;
        console.log(area.toFixed(3));

    }

}

areaOfFigures(["rectangle", "7", "2.5"]);
