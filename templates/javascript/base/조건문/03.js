let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [a, b] = input[0].split(" ").map(Number);
let c = Number(input[1]);

let totalMinute = 60 * a + b + c;
totalMinute %= 1440;
let hour1 = parseInt(totalMinute / 60);
let minute1 = totalMinute % 60;

console.log(hour1 + "" + minute1);
