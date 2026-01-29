let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let a = Number(input[0]);
let answer = "";

for (let i = 1; i <= a; i++) {
  const b = Number(input[i].split(" ")[0]);
  const c = Number(input[i].split(" ")[1]);
  answer += b + c + "\n";
}

console.log(answer);
