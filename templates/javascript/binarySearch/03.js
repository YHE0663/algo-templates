/**
 * 나무 자르기 문제의 목표: 적절한 높이 값을 찾기
 * 높이를 15로 설정한 경우, 총 7만큼의 나무를 얻을 수 있다.
 * 1. 절단기의 높이가 올라가는 경우: 일반적으로 얻을 수 있는 나무의 양이 감소한다.
 * 2. 절단기의 높이가 내려가는 경우: 일반적으로 얻을 수 있는 나무의 양이 증가한다.
 *
 * M 이상의 나무를 얻을 수 있는 조건을 만족하는 높이의 최댓값을 구하는 문제다.
 * -> 파라메트릭 서치를 이용한다.
 */
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [_, m] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number); // 각 나무의 높이

let start = 0; // 이진 탐색을 위한 시작점(start)과 끝점(end) 설정
let end = Math.max(...arr);
let answer = 0;

/** 내 틀린 생각
 * 1. min = 10, result = 22 m = 7 while 0
 * 2. min = 11, result = 19 m = 7 while 0
 * 3. min = 12, result = 16 m = 7 while 0
 * 4. min = 13, result = 13 m = 7 while 0
 * 5. min = 14, result = 10 m = 7 while 0
 * 6. min = 15, result = 7 m = 7 while X
 */

/**
 * 1. mid = 10, start = 0, end = 20, answer = 10 sum = 22
 * 2. mid = 15, start = 11, end = 20, answer = 15 sum = 7
 * 2. mid = 18, start = 16, end = 20, answer = 15 sum = 2
 * 3. mid = 16, start = 16, end = 15, answer = 15 sum = 5
 */

while (start <= end) {
  // 이진 탐색 수행(반복문)
  let mid = parseInt((start + end) / 2); // 현재의 중간점(높이)

  let sum = 0; // mid로 잘랐을 때 얻을 수 있는 나무의 양 계산
  for (let x of arr) {
    if (x > mid) sum += x - mid;
  }

  if (sum >= m) {
    // 나무의 양이 충분한 경우 덜 자르기 (높이 키우기)
    answer = mid; //최대한 덜 잘랐을 때가 정답이므로, result에 기록
    start = mid + 1;
  } else {
    end = mid - 1; // 나무의 양이 부족한 경우 더 많이 자르기 (높이 줄이기)
  }
}

console.log(answer);
