let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let testCase = Number(input[0]);

for (let i = 1; i <= testCase; i++) {
  let [r, s] = input[i].split(" ");
  let result = "";
  for (let a = 0; a < s.length; a++) {
    // r번 반복한 문자열을 뒤에 이어붙이기
    result += s.charAt(a).repeat(r);
  }
  console.log(result);
}
