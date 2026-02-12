let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// case 1
let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

arr.sort((a, b) => a - b);

let sum = 0;
//[1, 2, 3, 3, 4]
// 1, 1+2 = 3, 1+2+3 = 5, 1+2+3+3 = 9
for (let i = 0; i < n; i++) {
  let cnt = 0;
  for (let j = 0; j < i + 1; j++) {
    cnt += arr[j];
  }
  sum += cnt;
}

console.log(sum);

// case 2
/**
 * 각 사람이 돈을 인출하는데 필요한 시간의 합의 최솟값을 계산한다.
 * [문제 해결 아이디어] 시간이 적게 소요되는 사람부터 처리할 때, 필요한 시간의 합이 최소가 된다.
 * 따라서 오름차순 정렬 이후에 누적 합을 계산하여 해결할 수 있다.
 * 1. 가장 먼저 오름차순 정렬을 수행한다.
 * [1단계] 현재 시간: 1 / 기다린 시간의 총 합: 1
 * [2단계] 현재 시간: 3 / 기다린 시간의 총 합: 1 + 3
 * [3단계] 현재 시간: 6 / 기다린 시간의 총 합: 1 + 3 + 6 + 9
 * [4단계] 현재 시간: 9 / 기다린 시간의 총 합: 1 + 3 + 6 + 9
 * [5단계] 현재 시간: 13 / 기다린 시간의 총 합:1 + 3 + 6 + 9 + 13
 */
let a = Number(input[0]); // 사람의 수
let b = input[1].split(" ").map(Number); // 모든 처리 시간 입력받기

// 오름차순 정렬
b.sort((a, b) => a - b);
let answer = 0;
let summary = 0;
for (let i = 0; i < a; i++) {
  summary += b[i]; // i번째 사람이 기다린 총 시간
  answer += summary; // 지금까지 소요된 총 시간
}

console.log(answer);
