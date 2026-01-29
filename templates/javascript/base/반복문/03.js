let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let b = "";

for (let i = 1; i <= n; i++) {
  for (let a = 1; a <= i; a++) {
    b += "*";
  }
  b += "\n";
}

console.log(b);
