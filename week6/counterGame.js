// function getNearestPowerOf2(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     if (num - arr[i] < 0) return arr[i - 1];
//   }
// }
function counterGame(n) {
  // Write your code here
  let counter = 0;
  let originalN = n;
  //   let powersOfTwo = new Array(63);
  //   for (let i = 1; i <= 63; i++) {
  //     powersOfTwo[i] = 2 ** i;
  //   }
  while (n != 1) {
    //instead of powersOfTwo.includes(n)
    if (Number.isInteger(Math.log2(n))) {
      n = n / 2;
    } else {
      //instead of getNearestPowerOf2(powersOfTwo, n);
      n -= 2 ** Math.floor(Math.log2(n));
    }
    counter++;
  }
  return originalN == 1 || counter % 2 == 1 ? "Louise" : "Richard";
}
console.log(counterGame(6));
console.log(counterGame(132));
