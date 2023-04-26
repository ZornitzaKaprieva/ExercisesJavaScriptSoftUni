// Напишете програма, която изчислява колко часа ще са необходими на един архитект, 
// за да изготви проектите на няколко строителни обекта. 
// Изготвянето на един проект отнема три часа.
// Вход
// От конзолата се четат 2 реда:
// 1.	Името на архитекта - текст
// 2.	Брой на проектите, които трябва да изготви - цяло число в интервала [0 … 100]
// Изход
// На конзолата се отпечатва:
// •	"The architect {името на архитекта} will need {необходими часове} hours to complete {брой на проектите} project/s."

function projectsCreation(input){

    let name = input[0];
    let numProjects = Number(input[1]);

    let hours = numProjects * 3;

    console.log(`The architect ${name} will need ${hours} hours to complete ${numProjects} project/s.`);
}

projectsCreation(["George", "4"])