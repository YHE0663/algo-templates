/**
 * 이 문제는 JavaScript에서 제공하는 sort()메서드를 이용해 해결할 수 있다.
 * JavaScript의 경우 원하는 기준에 따라서 객체에 대한 정렬을 수행하는 기능을 제공한다.
 * JavaScript에서 제공하는 sort()는 시간 복잡도 O(NlogN)을 보장한다.
 * 따라서, 본 문제에서는 N의 최대 크기가 100만이라는 점에서 sort()로 문제를 해결할 수 있다.
 * 본 문제는 시간 복잡도 O(N^2)의 정렬 알고리즘으로 시간 초과를 받는다.
 */
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// case 1
let n = Number(input[0]);

let arr = input.slice(1, n + 1).map(Number);
// 정렬
arr.sort((a, b) => a - b);

console.log(arr.join("\n"));

// case 2
let a = Number(input[0]);
let setArr = [];
for (let i = 1; i <= n; i++) {
  setArr.push(Number(input[i]));
}
setArr.sort(function (a, b) {
  return a - b;
});

let answer = "";
for (let i = 0; i < setArr.length; i++) {
  answer += setArr[i] + "\n";
}

console.log(setArr);
