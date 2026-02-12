/**
 * [문제 해결 아이디어] B에서 A로 이동한다고 생각해 보자.
 * 현재의 B값이 정해져 있을 때, 취할 수 있는 행동은 항상 정해져 있다.
 * 1. 값이 2로 나누어 떨어지는 경우 -> 2로 나누는 연산만 사용 가능하다.
 * 2. 그렇지 않고, 일의 자릿수가 1인 경우 -> 10으로 나누는 연산만 사용 가능하다.
 * 3. 위 경우가 모두 해당되지 않는 경우 -> 더 이상 이동이 불가능하므로, 종료한다.
 * => 이외의 다른 경우의 수가 아예 존재하지 않는 것을 알 수 있다.
 * 매 상황에서 이동 경로는 단 하나만 존재하므로, 그리디 알고리즘에 해당한다.
 */

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [a, b] = input[0].split(" ").map(Number); // A와 B 입력
let flag = false;
let reult = 1;

while (a <= b) {
  if (a == b) {
    flag = true;
    break;
  }
  if (b % 2 === 0)
    b = parseInt(b / 2); // 2로 나누어 떨어지는 경우
  else if (b % 2 === 1) resulr = true;
}
