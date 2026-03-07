/**
 * 정렬 이후에 K번째 수를 구하는 것이 목표다. K = 14라고 가정해 보자. 답은 12다.
 * <정렬된 값>
 * [1, 2, 2, 3, 3, 4, 4, 4, 6, 6, 8, 8, 9, 12, 12, 16]
 * 이분 탐색으로 정잡 자체를 mid로 찾는다고 가정하자.
 * -> mid가 K번째 수가 되려면?
 * "현재 mid보다 작거나 같은 데이터의 수가 K개 이상이 되는 조건"을 만족하는 mid 중에서 가장 작은 값을 구하면 된다.
 * [초기 설정] left = 1, right = 16
 * <mid 보다 작거나 같은 원소의 개수>
 *      mid = 8          mid= 12             mid = 11
 *   4 (1, 2, 3, 4)    4 (1, 2, 3, 4)     4 (1, 2, 3, 4)
 *   4 (2, 4, 6, 8)    4 (2, 4, 6, 8)     4 (2, 4, 6, 8)
 *   2 (3, 6)          4 (3, 6, 9, 12)    4 (3, 6, 9)       ...
 *   2 (4, 8)          3 (4, 8, 12)       2 (4, 8)
 *   => 12 < 14        => 15 >= 14        => 13 < 14
 */

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]); // 배열의 크기(N)
let k = Number(input[1]); // 인덱스 k

let start = 1; // 배열에 존재할 수 있는 가장 작은 값
let end = 10 ** 10; // 인덱스 k

let result = 0;
while (start <= end) {
  // 이진 탐색 수행(반복적)
  let mid = parseInt((start + end) / 2); // 현재의 중간점
  let total = 0; // mid보다 작거나 같은 데이터의 개수
  for (let i = 1; i <= n; i++) {
    // 각 행마다 계산
    total += Math.min(parseInt(mid / i), n);
  }
  if (total >= k) {
    //mid보다 작거나 같은 데이터의 개수가 k 이상이라면
    result = mid; // result에 기록
    end = mid - 1;
  }
  // mid보다 작거나 같은 데이터의 개수가 k미만이라면
  else start = mid + 1;
}
console.log(result);
