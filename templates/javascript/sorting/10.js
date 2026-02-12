/**
 * 가장 먼저, 문제에서 요구하는 내용에 대한 예시를 고려해 보자.
 * ex) 2143 ->(정렬 수행) -> 4321
 * 총 10개의 숫자(digit)이 존재하며, 문제 해결 과정은 다음과 같다.
 * 1. 0부터 9까지의 모든 숫자에 대하여, 빈도수를 센다.
 * 2. 각 숫자를 내림차순으로 하나씩 확인하며, [빈도수 만큼]출력한다.
 * ex)
 * 입력: 9792382
 * 2번 이후에 9번부터 0까지의 숫자를 하나씩 확인하며, "빈도수 만큼" 출력한다.
 * 0 1 2 3 4 5 6 7 8 9
 * 0 1 2 1 0 0 0 1 1 2
 * 출력: 9987322(뒤에서부터 몇 번 나왔는지 빈도수 만큼 숫자 출력하기)
 */

// case 1
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let arr = input[0].split("");

arr.sort((a, b) => b - a);

let answer = "";
for (x of arr) answer += x;

console.log(answer);

// case 2
let n = input[0]; // 수(N) 입력받기
// 0부터 9까지 각 숫자(digit)의 출현 빈도를 담을 배열(array) 선언
let cnt = Array(10).fill(0); // 초기 빈도 값은 0으로 초기화

for (x of n) {
  // 한 자리씩 숫자(digit)를 확인하며
  cnt[Number(x)]++;
}

let answer1 = "";
// 9부터 0까지 하나씩 숫자(digit)를 확인하며
for (let i = 9; i >= 0; i--) {
  // 출현 빈도만큼 출력하기
  for (let j = 0; j < cnt[i]; j++) {
    answer1 += i;
  }
}
console.log(answer1);
