let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let a = Number(input[0]);

// case 1
let sum = 0;

for (let i = 1; i <= a; i++) {
  sum += i;
}

console.log(sum);

// case 2
console.log((a * (a + 1)) / 2);
