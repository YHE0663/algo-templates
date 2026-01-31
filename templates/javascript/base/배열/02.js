let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// case1
let maxValue = 0;
let count = 0;

for (let i = 0; i < 9; i++) {
  const n = Number(input[i]);
  if (maxValue < n) {
    maxValue = n;
    count = i + 1;
  }
}

console.log(maxValue + "\n" + count);

// case 2
let data = input.map((x) => Number(x));
let max = Math.max(...data);

console.log(max);
console.log(input.indexOf(max) + 1);
