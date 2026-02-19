/**
 * 피보나치 수: 0, 1, 1, 2, 3, 5, 8, 13, 21, ... , 34, 55, 89, ...
 * 명제: 양의 정수는 하나 혹은 그 이상의 서로 다른 피보나치 수들의 합으로 나타낼 수 있다.
 * 예를 들어, 정수 100은 다음과 같은 조합으로 표현할 수 있다.
 * 100 = 3 + 8 + 89
 * 100 = 1 + 2 + 8 + 89
 * 100 = 3 + 8 + 34 + 55
 * [문제 해결 방법] 가능한 가장 큰 피보나치 수부터 빼 나갈 때 최소 개수를 만족할 수 있다.
 * 이유: X - A는 A보다 작은 서로 다른 피보나치 수들의 합으로 표현 가능하다.
 * 이때 A는 가능한 가장 큰 피보나치 수를 의미한다.
 *
 * [문제 해결 방법] 가능한 가장 큰 피보나치 수부터 빼 나갈 때 최소 개수를 만족할 수 있다.
 * 명제: 양의 정수는 하나 혹은 그 이상의 서로 다른 피보나치 수들의 합으로 나타낼 수 있다.
 */

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 피보나치 수들 계산
pibo = [];
pibo.push(0);
pibo.push(1);
while (pibo[pibo.length - 1] < 1e9)
  pibo.push(pibo[pibo.length - 2] + pibo[pibo.length - 1]);

let testCase = Number(input[0]);
for (let tc = 1; tc <= testCase; tc++) {
  let n = Number(input[tc]);
  let result = [];
  let i = pibo.length - 1; // 가장 큰 피보나치 수의 인덱스
  while (n > 0) {
    // n이 0이 될 때까지
    if (n >= pibo[i]) {
      // 가능한 큰 피보나치 수부터 빼기
      n -= pibo[i];
      result.push(pibo[i]);
    }
    i--;
  }
  result.reverse(); // 큰 것부터 들어가 있으니 뒤집어서 오름차순
  console.log(result.join(" "));
}
