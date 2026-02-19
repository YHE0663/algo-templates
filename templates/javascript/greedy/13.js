let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let testCase = Number(input[0]);

// 1) 양 끝을 비교하자
// 2) 틀리는 순간 양 끝을 지워보자(왼쪽, 오른쪽)
// case 1
function isPal(s, l, r) {
  while (l < r) {
    if (s[l] != s[r]) return false;
    l++;
    r--;
  }
  return true;
}

for (let i = 1; i <= testCase; i++) {
  let l = 0;
  let r = input[i].length - 1;
  let s = input[i].trim();
  while (l < r && s[l] == s[r]) {
    l++;
    r--;
  }

  if (l >= r) console.log(0);
  else if (isPal(s, l + 1, r) || isPal(s, l, r - 1)) console.log(1);
  else console.log(2);
}

// case 2
/**
 * 유사회문: 한 문자를 삭제하여 회문으로 만들 수 있는 문자열
 * 문자열의 앞에서부터 한 문자씩 확인하면서 회문이 성립하는지 확인한다.
 * 만약 회문이 성립하지 않은 위치를 찾는다면 다음의 과정으로 유사회문이 가능한지 여부를 판별한다.
 * 1. 해당 문자를 지웠을 때 유사회문이 될 수 있는지 확인한다.
 * 2. 대칭된 위치에 있는 문자를 지웠을 때 유사회문이 될 수 있는지 확인한다.
 */

function palindrome(params) {
  return params === params.split("").reverse().join("");
}

// 문자열을 하나씩 입력받아 처리
for (let tc = 1; tc <= testCase; tc++) {
  let data = input[tc];
  if (palindrome(data))
    console.log(0); // 회문인 경우
  else {
    // 회문이 아닌 경우, 유사 회문인지 검사
    let found = false;
    let n = data.length; // 문자열의 길이
    for (let i = 0; i < parseInt(n / 2); i++) {
      // 대칭이 아닌 인덱스를 찾은 경우
      if (data[i] != data[n - i - 1]) {
        // 앞쪽에 있는 해당 원소를 제거해 본 뒤에 회문 검사
        if (palindrome(data.slice(0, i) + data.slice(i + 1, n))) found = true;
        // 뒤쪽에 있는 해당 원소를 제거해 본 뒤에 회문 검사
        if (palindrome(data.slice(0, n - i - 1) + data.slice(n - i, n)))
          found = true;
        break;
      }
    }
    if (found)
      console.log(1); // 유사 회문인 경우
    else console.log(2); // 회문도 유사 회문도 아닌 경우
  }
}
