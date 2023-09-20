// Дадени са n цели числа в интервала [1…1000].
// От тях някакъв процент p1 са под 200, друг процент p2 са от 200 до 399,
// друг процент p3 са от 400 до 599, друг процент p4 са от 600 до 799
// и останалите p5 процента са от 800 нагоре.
//  Да се напише програма, която изчислява и отпечатва процентите p1, p2, p3, p4 и p5.

function histogram(input) {
  let countNum = Number(input[0]);

  let p1Count = 0;
  let p2Count = 0;
  let p3Count = 0;
  let p4Count = 0;
  let p5Count = 0;

  for (let i = 1; i <= countNum; i++) {
    let currentNum = Number(input[i]);
   
    if (currentNum < 200) {
      p1Count++;
    } else if (currentNum < 400) {
      p2Count++;
    } else if (currentNum < 600) {
      p3Count++;
    } else if (currentNum < 800) {
      p4Count++;
    } else {
      p5Count++;
    }
  }

  let p1Percent = (p1Count / countNum) * 100;
  let p2Percent = (p2Count / countNum) * 100;
  let p3Percent = (p3Count / countNum) * 100;
  let p4Percent = (p4Count / countNum) * 100;
  let p5Percent = (p5Count / countNum) * 100;

  console.log(p1Percent.toFixed(2) + "%");
  console.log(p2Percent.toFixed(2) + "%");
  console.log(p3Percent.toFixed(2) + "%");
  console.log(p4Percent.toFixed(2) + "%");
  console.log(p5Percent.toFixed(2) + "%");
}

histogram(["3", "1", "2", "999"]);
