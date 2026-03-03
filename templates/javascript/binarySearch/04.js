/**
 * [문제의 요구사항] 랜선의 개수 N개 이상을 얻을 수 있는 길이의 최댓값 구하기
 * 1. 길이를 키우면, 얻을 수 있는 랜선의 수는 감소한다.
 * 2. 길이를 줄이면, 얻을 수 있는 랜선의 수는 증가한다.
 *       길이: 200  길이: 100
 * 802      4개        8개
 * 743      3개        7개
 * 457      2개        4개
 * 539      2개        5개
 *          11개       24개
 */
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [k, n] = input[0].split(" ").map(Number);
let arr = []; // 각 랜선의 길이

for (let i = 1; i <= k; i++) {
  arr.push(Number(input[i]));
}

// [802, 743, 457, 539]

let start = 1; // 이진 탐색을 위한 시작점(start)과 끝점(end) 설정
let end = arr.reduce((a, b) => Math.max(a, b));
let answer = 0;

while (start <= end) {
  // 이진 탐색 수행(반복문)
  let sum = 0; // 가지고 있는 각 랜선을 잘라서 길이가 mid인 랜선을 몇 개 만들 수 있는지
  let mid = parseInt((start + end) / 2); // 현재의 중간점(길이)
  for (x of arr) {
    sum += parseInt(x / mid);
  }
  if (n > sum) {
    // 만들 수 있는 랜선의 개수가 부족한 경우 길이 줄이기
    end = mid - 1;
  } else {
    // 만들 수 있는 랜선의 개수가 충분한 경우 길이 늘리기
    answer = mid; // 최대 길이를 찾아야 하므로, result에 기록
    start = mid + 1;
  }
}

console.log(answer);
