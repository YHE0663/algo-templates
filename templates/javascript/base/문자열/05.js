let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// trim() 메서드는 문자열 양 끝의 공백을 제거한다.
let arr = input[0].trim().split(" ");

if (arr == "") {
  console.log(0);
} else {
  console.log(arr.length);
}
