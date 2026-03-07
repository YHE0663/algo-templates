/**
 * 다음과 같이 N개의 카드 데이터가 존재한다.
 * 6 3 2 10 10 10 -10 -10 -10 7 3
 * 이진 탐색을 위해 먼저 데이터를 오름차순 정렬한다.
 * 이 과정에서 O(NlogN)의 시간 복잡도가 요구된다.
 * -10 -10 -10 2 3 3 6 7 10 10 10
 * 데이터의 수(N)및 쿼리의 수(M)는 모두 최대 50만인 것을 알 수 있다.
 * 다음과 같이 쿼리가 있다고 해보자.
 * 쿼리: 10   9   -5   2   3    4   5   -10
 * 개수: 3개  0개  0개  1개  2개  0개  0개  3개
 * 각 쿼리에 대하여 O(logN)으로 해결한다면, 전체 시간 복잡도는 O(MlogN)이다.
 *
 * 아래의 2가지 이진 탐색 함수가 제공하는 기능을 이해할 필요가 있다.
 * lowerBound(arr, x): 정렬된 순서를 유지하면 배열 arr에 x를 넣을 가장 왼쪽 인덱스를 반환
 * upperBound(arr, x): 정렬된 순서를 유지하면서 배열 arr에 x를 넣을 가장 오른쪽 인덱스를 반환
 // 정렬된 순서를 유지하면서 배열에 삽입할 가장 왼쪽 인덱스 반환
  function lowerBound(arr, target, start, end) {
    while (start < end) {
      let mid = paresInt((start + end) / 2);
      if (arr[mid] >= target)
        end = mid; // 최대한 왼쪽으로 이동하기
      else start = mid + 1;
    }
  }
  // 정렬된 순서를 유지하면서 배열에 삽입할 가장 오른쪽 인덱스 반환
  function upperBound(arr, target, start, end) {
    while (start < end) {
      let mid = parseInt((start + end) / 2);
      if (arr[mid] > target) end = mid;
      else start = mid + 1; // 최대한 오른쪽으로 이동하기
    }
  }
 * countByRange(): 정렬된 배열에서 값이 특정 범위에 속하는 원소의 개수를 계산한다.
 * 앞서 정의한 lowerBound()함수와 lowerBound()함수를 이용해 구현할 수 있다.
 * 
 * 데이터의 수(N)및 쿼리의 수(M)는 모두 최대 50만인 것을 알 수 있다.
 * -10 -10 -10 2 3 3 6 7 10 10 10
 * [예시] 값이 3인 데이터의 개수를 구하는 예시를 확인해 보자.
 * lowerBound(): 4
 * upperBound(): 6
 * 따라서 값이 3인 데이터의 개수는 6-4=2이다.
 */

// case 1
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let arr = input[1].split(" ").map(Number);
let m = Number(input[2]);
let query = input[3].split(" ").map(Number);

const countMap = new Map();

// 카드 숫자 개수 세기
for (const card of arr) {
  countMap.set(card, (countMap.get(card) || 0) + 1);
}

// 질문 숫자에 대한 답 만들기
let result = [];
for (const find of query) {
  result.push(countMap.get(find) || 0);
}

console.log(result.join(" "));

// case 2
//정렬된 순서를 유지하면서 배열에 삽입할 가장 왼쪽 인덱스 반환
function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
}
// 정렬된 순서를 유지하면서 배열에 삽일할 가장 오른쪽 인덱스 반환
function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] < target) end = mid;
    else start = mid + 1;
  }
}

// 값이 [leftValue. rightValue]인 데이터의 개수를 반환하는 함수
function countByRange(arr, leftValue, rightValue) {
  // 유이: lowerBound와 upperBound는 end 변수의 값을 배열의 길이로 설정
  let rightIndex = upperBound(arr, rightValue, 0, arr.lenght);
  let leftIndex = lowerBound(arr, leftValue, 0, arr.length);
  return rightIndex - leftIndex;
}

// 배열 선언
let arrTest = [1, 2, 3, 3, 3, 3, 4, 4, 8, 9];
// 값이 4인 데이터 개수 출력
console.log(countByRange(arrTest, 4, 4));
// 값이 [-1, 3] 범위에 있는 데이터 개수 출력
console.log(countByRange(arrTest, -1, 3));

answer = "";
for (let i = 0; i < m; i++) {
  // 값이 query[i]인 데이터의 개수 계산
  let cnt = countByRange(arr, query[i], query[i]);
  answer += cnt + "";
}
