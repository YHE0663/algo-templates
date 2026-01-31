let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let arr = input[1].split(" ").map(Number);

let maxValue = Math.max(...arr);
let minValue = Math.min(...arr);

//case 2
// let n = Number(input[0]);

/**
 * 모든 정수는 -1,000,000보다 크거나 같고,
 * 1,000,000보다 작거나 같은 정수이다.
 */
// let minValue = 1000001;
// let maxValue = -1000001;
// for (let i = 0; i < n; i++) {
//   if (minValue > arr[i]) minValue = arr[i];
//   if (maxValue < arr[i]) maxValue = arr[i];
// }

// case 3
let data = input[1].split(" ").map((x) => Number(x));

// let minValue = data.reduce((a, b) => Math.min(a, b));
// let maxValue = data.reduce((a,b) => Math.max(a, b))

console.log(minValue, maxValue);
