let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 틀린 코드
let [x, y, h] = input[0].split(" ").map(Number);
let sum = x * y * h;
let n = Number(input[1]);
let count = 0;

for (let i = n + 1; i >= 2; i--) {
  let [a, b] = input[i].split(" ").map(Number);
  let total = 1;
  for (let j = 0; j < a; j++) {
    total *= 2;
  }
  total = total * total * total;
  for (let j = 0; j < b; j++) {
    if (sum >= total) {
      sum -= total;
      count++;
    } else break;
  }
  if (sum < 0) {
    console.log(-1);
    break;
  }
  if (sum == 0) {
    console.log(count);
    break;
  }
}

if (sum !== 0) console.log(-1);

/**
 * 큐브의 길이(length), 너비(width), 높이(height)는 항상 2의 제곱 형태를 보인다.
 * [문제 해결 아이디어] 큰 큐브는 항상 자기보다 작은 큐브로 채울 수 있다.
 * 결과적으로, 큰 큐브부터 차근차근 채워 나가면 해결할 수 있다.
 * 그리디 알고리즘 유형의 대표적인 예시인 [거스름 돈] 문제와 유사하다.
 * 각 큐브를 몇 개 넣을 수 있는지 계산하기 위해 (2^i * 2^i * 2^i) 격자로 전체 박스를 나누어 확인한다.
 * 해결 방법: 최대한 큰 큐브부터 박스에 넣고, 다음 크기의 큐브도 박스에 넣을 수 있는지 단계적으로 확인한다.
 * [예시] 가지고 있는 큐브의 개수가 (1 * 1 * 1) 32개, (2 * 2 * 2) 5개, (4 * 4 * 4) 1개라면?
 * 444 - 빈 공간: 2개, 삽입 가능 개수: 1개
 * 222 - 빈 공간: 8개, 삽입 가능 개수: 5개
 * 111 - 빈 공간: 24개, 삽입 가능 개수: 24개
 */

// x보다 작거나 같으면서 가장 가까운 2^i를 찾는 함수
function nearestSquare(x) {
  let i = 1;
  while (2 ** i < x) {
    i += 1;
  }
  return i - 1;
}

let [length, width, height] = input[0].split(" ").map(Number);
let cubes = Array(20).fill(0);

for (let i = 2; i <= n + 1; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  cubes[a] = b;
}
