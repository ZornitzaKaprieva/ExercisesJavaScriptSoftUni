// Отпечатайте на конзолата таблицата за умножение за числата от 1 до 10 във формат:
// "{първи множител} * {втори множител} = {резултат}".

function multiplicationTable() {
    
  for (let x = 1; x <= 10; x++) {
    for (let y = 1; y <= 10; y++) {
      let result = x * y;
      console.log(`${x} * ${y} = ${result}`);
    }
  }
}

multiplicationTable();
