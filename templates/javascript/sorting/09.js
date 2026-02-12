/**
 * 입력이 들어왔을 떄, 일종의 객체로 이를 처리한다.
 * 다음과 같이 7명의 정보가(나이, 이름)형태로 주어진다고 가정하자.
 */

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = [];

for (let i = 1; i <= n; i++) {
  // 각 사람의 (나이, 이름) 정보를 입력받기
  let [age, name] = input[i].split(" ");
  arr.push([Number(age), name]);
}

// Node.js의 정렬은 기본적으로 stable
arr.sort((a, b) => a[0] - b[0]);

let answer = "";
for (x of arr) answer += x[0] + " " + x[1] + "\n";
console.log(answer);
