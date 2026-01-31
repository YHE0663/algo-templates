let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// case 1
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let maxValue = Math.max(...arr);

let summary = 0;
for (let i = 0; i < n; i++) {
  summary += (arr[i] / maxValue) * 100;
}

console.log(summary / n);

// case 2
const result = arr.reduce((sum, score) => sum + (score / maxValue) * 100, 0);
console.log(result);
