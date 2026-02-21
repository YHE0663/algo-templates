let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, k] = input[0].split(" ").map(Number);

let sum = 0;
for (let i = 1; i <= k; i++) {
  sum += i;
}

// if (sum > n) result = -1;
// else if ((k % n) == 0) result = k;
// else result = k - 1;
// console.log(result);

/**
 * 각 바구니에 담긴 공의 개수가 모두 달라야 한다.
 * 가장 많이 담긴 바구니와 가장 적게 담긴 바구니의 공의 개수 차이가 최소가 되려면?
 * 바로 공의 개수가 최대한 연속적이게 만들면 된다.
 * - 예를 들어 N = 15이고, k = 5일 때, 각 바구니에 공의 개수로 1, 2, 3, 4, 5를 가질 수 있다.
 * - 예를 들어 N = 16이고, k = 5일 때, 각 바구니에 공의 개수로 1, 2, 3, 4, 6를 가질 수 있다.
 * - 예를 들어 N = 17이고, k = 5일 떼, 각 바구니에 공의 개수로 1, 2, 3, 5, 6를 가질 수 있다.
 * 항상 정답은 k-1 혹은 k인 것을 알 수 있다.
 * N이 너무 작으면 목표를 만족할 수 없다. -> 조건: 1+...+k <= n
 * => k가 3일 때는 N은 최소 6보다는 크거나 같아야 된다.
 * N이 충분히 크면 목표를 만족할 수 있다.
 */

if (sum > n) {
  // 공의 개수가 부족한 경우
  console.log(-1);
} else {
  // 공의 개수가 충분한 경우
  n -= sum;
  if (n % k == 0)
    console.log(k - 1); // k개에 각각 1씩 더하기
  else console.log(k);
}
