let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// 결과만 맞고, 과정은 틀림,,,
let n = Number(input[0]);
let data = input[1].split(" ").map(Number);

let cnt = 1;
for (let i = 0; i < n - 1; i++) {
  if (data[i] <= data[i + 1]) {
    cnt++;
  }
}

console.log(cnt);

/**
 * 왼쪽부터 하나씩 풍선을 확인한다.
 * [핵심 아이디어] 해당 높이에 존재하는 화살이 없다면 화살을 새롭게 사용한다.
 * 5개의 풍선의 높이가 각각[4, 5, 2, 1, 4]일 때는 다음과 같다.
 * 4 - 사용
 * 5 -> 4 - 사용
 * 2 -> 1 - 사용
 * 총 3개의 화살 필요
 * 
 * 
2
1
5
4
3

// 1) - 2
arrow[1] = 1;
result = 1;
// 2) -1
arrow[1] = 0;
arrow[0] = 1;
// 3) - 5
arrow[4] = 1;
result = 2;
// 4) - 4
arrow[4] = 0;
arrow[3] = 1;
// 5) - 3
arrow[3] = 0;
arrow[2] = 1;
 */

let result = 0;

let arrow = new Array(1000001).fill(0); // 각 높이에 화살이 몇 개 있는지
for (let x of data) {
  if (arrow[x] > 0) {
    // 해당 높이에 화살이 있다면
    arrow[x - 1] += 1;
    arrow[x] -= 1;
  } else {
    // 해당 높이에 화살이 없다면
    arrow[x - 1] += 1; // 화살 쏘기
    result++;
  }
}

console.log(result);

/**
let idx = 0;
const num = Number(input[idx++]);

let result = 0;
const arrow = new Array(1000001).fill(0);

for (let i = 0; i < num; i++) {
  const x = Number(input[idx++]);

  if (arrow[x] > 0) {
    arrow[x]--;
    arrow[x - 1]++;
  } else {
    result++;
    arrow[x - 1]++;
  }
}

console.log(result);
 */
