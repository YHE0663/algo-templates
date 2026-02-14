/**
 * [문제의 요구사항]S를 알 때, 자연수 N의 최댓값은 얼마일까?
 * 문제 해결 아이디어: 가능한 작은 수부터 더하는 것이 좋다.
 * 예를 들어, S=200일 때, 1부터 시작하여 차례대로 더하면서, 합이 S를 넘어가지 않도록 한다.
 * 1. 1, 2, 3, ...순서대로 더해갈 때, S를 넘지 않도록 하되, 최대한 많이 더한다.
 * 2. 그때까지의 수의 개수가 정답이다.
 * 검증: S = 200일 때, 1, 2, 3, 4, 5, ..., 19까지 더하면 190이다.
 * 이때 19대신에 29로 바꾸어 주면 합이 200이다. -> 따라서 정답은 19이다.
 * [S=1일 때] 자연수 집합: 1
 * [S=2일 때] 자연수 집합: 2
 * [S=3일 때] 자연수 집합: 1 + 2
 * [S=4일 때] 자연수 집합: 1 + 3
 * [S=5일 때] 자연수 집합: 1 + 4
 * [S=6일 때] 자연수 집합: 1 + 2 + 3
 * [S=10일 때] 자연수 집합: 1 +2 + 3 + 4
 * 1부터 출발하여, 가능한 작은 개수로 S를 표현하는 것이 문제 해결 방법이다.
 * 따라서, 단순히 1부터 증가시켜가며 누적 합을 계산한다.
 * 누적 합이 S보다 커지는 순간 반복 문법을 탈출한다.
 */

// case 1
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let sum = 0;
let num = 1;
let count = 0;

while (sum + num <= n) {
  sum += num;
  count += 1;
  num++;
}

console.log(count);

// case 2
let s = Number(input[0]);
let sum1 = 0;
let current = 0;

while (sum1 <= s) {
  current += 1;
  sum1 += current;
}

console.log(current - 1);
