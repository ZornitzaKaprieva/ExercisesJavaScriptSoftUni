// Напишете функция, която получава текст (стринг) и печата всеки символ от текста на отделен ред

function characterSequence(input) {
  let text = input[0];

  let txtLength = text.length;

  for (i = 0; i < txtLength; i++) {
    console.log(text[i]);
  }
}

characterSequence(["zornitza"]);
