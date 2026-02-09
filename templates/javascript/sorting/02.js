/**
 * 이 문제는 JavaScript에서 제공하는 sort() 메서드를 이용해 해결할 수 있다.
 * 단순히 N개의 수를 입력 받아, 이를 오름차순 정렬한 결과를 반환할 수 있다.
 * N의 값이 최대 1,000이므로, 시간 복잡도O(N^2)의 알고리즘을 사용할 수 있다.
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
