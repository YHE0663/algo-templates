let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let testCase = Number(input[0]);

for (let i = 1; i <= testCase; i++) {
  let data = input[i].split(" ").map(Number);
  let n = data[0];
  let summary = 0;
  for (let a = 1; a <= n; a++) {
    summary += data[a];
  }
  let average = summary / n;
  let count = 0;
  for (let b = 1; b <= n; b++) {
    if (data[b] > average) {
      count += 1;
    }
  }
  console.log(`${((count / n) * 100).toFixed(3)}%`);
}
