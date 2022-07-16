//NOTE best solution
//you can think in it as a sliding window
function birthday(s, d, m) {
  let i = 0,
    sum = 0,
    count = 0;
  while (i < s.length) {
    sum += s[i];
    if (i >= m - 1) {
      if (i >= m) sum -= s[i - m];
      if (sum == d) count++;
    }
    i++;
  }
  return count;
}
//------------------------------------------------------------------------------
// function sumArray(arr) {
//   return arr.reduce((previous, current) => previous + current, 0);
// }
// function birthday(s, d, m) {
//   // Write your code here
//   if (s.length == 0) return 0;
//   else if (sumArray(s.slice(0, m)) == d) return 1 + birthday(s.slice(1), d, m);
//   else return 0 + birthday(s.slice(1), d, m);
// }
// function birthday(s, d, m) {
//   let res = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s.slice(i, i + m).reduce((a, b) => a + b) == d) res++;
//   }
//   return res;
// }
console.log(birthday([1, 2, 1, 3, 2], 3, 2));
