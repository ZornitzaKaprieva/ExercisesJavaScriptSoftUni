// Напишете програма, която чете от конзолата число r 
// и пресмята и отпечатва лицето и периметъра на кръг / окръжност с радиус r, 
// като форматирате изхода в следния вид: "<calculated area>" "<calculated parameter>". 
// Форматирайте изходните данни до втория знак след десетичната запетая.

function circleAreaAndPerimeter(input) {

    let r = input[0];

    let area = Math.PI * r * r;
    let param = 2 * Math.PI * r;

    console.log(`${area.toFixed(2)}`);
    console.log(`${param.toFixed(2)}`);

}

circleAreaAndPerimeter([3])