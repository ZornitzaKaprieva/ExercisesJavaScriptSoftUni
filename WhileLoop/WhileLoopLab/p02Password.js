// Напишете функция, която първоначално прочита име и парола на потребителски профил. След това чете парола за вход.
// •	при въвеждане на грешна парола: потребителя да се подкани да въведе нова парола.
// •	при въвеждане на правилна парола: отпечатваме "Welcome {username}!".

function password(input) {
  let name = input[0];
  let pass = input[1];

  let index = 2;
  let enteredPass = input[index];

  while (!(pass === enteredPass)) {
    enteredPass = input[index];
    index++;
  }

  console.log(`Welcome ${name}!`);
}

password(["Gosho", "secret", "secret"]);
