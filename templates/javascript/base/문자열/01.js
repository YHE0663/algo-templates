let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// case 1
let data = input[1].split("").map(Number);

let result = data.reduce((sum, score) => sum + score, 0);
console.log(result);

// case 2
let n = Number(index[0]);
let string = input[1];

let anwer = 0;
// 문자열에 포함된 문자를 하나씩 확인하며
for (let x of string) {
  anwer += Number(x);
}
console.log(anwer);
