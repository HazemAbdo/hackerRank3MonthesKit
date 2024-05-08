//NOTE best solution
//you can think in it as a sliding window
function birthday(s, d, m) {
  // Write your code here
  let count = 0;
  const n = s.length;
  if (n == 1) {
    return s[0] == d && m == 1 ? 1 : 0;
  } else {
    for (let l = 0; l < n; l++) {
      let subArrSum = s[l];
      for (let r = l + 1; r < l + m; r++) {
        subArrSum += s[r];
      }
      if (subArrSum == d) {
        count++;
      }
    }
    return count;
  }
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
