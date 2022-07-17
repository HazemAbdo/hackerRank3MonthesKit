function closestNumbers(arr) {
  const sortedArray = arr.sort((a, b) => a - b);
  let min = +Infinity;
  let map = {};
  for (let i = 0; i < sortedArray.length - 1; i++) {
    let diff = sortedArray[i + 1] - sortedArray[i];
    map[diff] = map[diff]
      ? map[diff].concat([sortedArray[i], sortedArray[i + 1]])
      : [sortedArray[i], sortedArray[i + 1]];
    if (diff < min) min = diff;
  }
  return map[min];
}
//------------------------------
// function closestNumbers(arr) {
//   // Write your code here
//   let a = arr.sort((a, b) => a - b);
//   let minDifference = Infinity;
//   let result = new Array();
//   for (let i = 0; i < a.length - 1; i++) {
//     if (a[i + 1] - a[i] < minDifference) {
//       minDifference = a[i + 1] - a[i];
//     }
//   }
//   for (let i = 0; i < a.length - 1; i++) {
//     if (a[i + 1] - a[i] === minDifference) {
//       result.push(a[i]);
//       result.push(a[i + 1]);
//     }
//   }
//   return result;
// }
// //------------------------------
// function closestNumbers(arr) {
//   // Write your code here
//   let a = arr.sort((a, b) => a - b);
//   let minDifference = Infinity;
//   let result = new Array();
//   for (let i = 0; i < a.length - 1; i++) {
//     if (a[i + 1] - a[i] < minDifference) {
//       minDifference = a[i + 1] - a[i];
//       result = [];
//       result.push(a[i], a[i + 1]);
//     } else if (a[i + 1] - a[i] === minDifference) {
//       result.push(a[i], a[i + 1]);
//     }
//   }
//   return result;
// }
//------------------------------
console.log(
  closestNumbers([
    -20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594,
    266854,
  ])
);
