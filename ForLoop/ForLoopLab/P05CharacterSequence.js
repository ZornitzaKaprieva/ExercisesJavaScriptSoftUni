// Напишете функция, която получава текст (стринг) и печата всеки символ от текста на отделен ред

function characterSequence(input) {
  let text = input[0];

  // console.log(text);
  // console.log(text[0]);

  let txtLength = text.length;

  for (i = 0; i < txtLength; i++) {
    console.log(text[i]);
    //console.log(text.charAt(i));
  }
}

characterSequence(["zornitza"]);
