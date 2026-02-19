/**
 * 예시를 확인해 보며 문제 해결을 위한 아이디어를 생각해 보자
 * 거리: [2, 3, 1, 2]
 * 주유 비용: [5, 2, 4, 7, 8]
 * [핵심 아이디어] 주요 비용을 비오름차순으로 변경한다.
 * 자기보다 뒤에 있는 비싼 주요소에 대해서 미리 결제하는 것으로 이해할 수 있다.
 * 예시 1)
 * 5원-거리:2->2원-거리:3->4원-거리:1->7원-거리:2->8원
 * 5원-2원->2원->2원->2원
 *
 * 예시 2)
 * 7원-거리:2->5원-거리:3->8원-거리:1->4원-거리:2->9원
 * 5원-5원->5원->4원->4원
 */
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let dist = input[1].split(" ").map(Number);
let cost = input[2].split(" ").map(Number);

// 주유 비용(cost) 배열의 값을 비오름차순이 되도록 변환
// [5, 2, 4, 1] -> [5, 2, 2, 1]
let minCost = cost[0];
for (let i = 0; i < n; i++) {
  minCost = Math.min(minCost, cost[i]);
  cost[i] = minCost;
}

// 도로당 이동 비용의 합 계산
let answer = BigInt(0);
for (let i = 0; i < n - 1; i++) {
  // Javascript에서 큰 정수를 처리할 때는 BigInt를 사용
  answer += BigInt(cost[i]) * BigInt(dist[i]);
}

console.log(String(answer));
