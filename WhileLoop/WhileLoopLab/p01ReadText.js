// Напишете функция, която чете елементите на масив, докато не получи командата "Stop".

function readText(input) {
  let index = 0;
  let text = input[index];

  while (!(text === "Stop")) {
    console.log(text);
    index++;
    text = input[index];
  }
}

readText([
  "Nakov",
  "SoftUni",
  "Sofia",
  "Bulgaria",
  "SomeText",
  "Stop",
  "AfterStop",
  "Europe",
  "HelloWorld",
]);
