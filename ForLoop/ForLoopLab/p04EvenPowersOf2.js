// Да се напише функция, която получава число n и печата четните степени на 2 ≤ 2n: 20, 22, 24, 26, …, 2n.

function evenPowersOf2(input) {
  
  //Solution 1:
  let n = Number(input[0]);

  for (i = 0; i <= n; i += 2) {
    console.log(Math.pow(2, i));
  }

  //Solution 2:
  //let n = Number(input[0]);
  // for (let i = 0; i <= n; i++) {
  //   if (i % 2 === 0) {
  //     let num = Math.pow(2, i);
  //     console.log(num);
  //   }
  // }
}

evenPowersOf2(["4"]);
