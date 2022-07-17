// function pickingNumbers(a) {
//   a = a.sort((a, b) => a - b);
//   // Write your code here
//   let lastMaxLen = 0,
//     currentMaxLen = 0,
//     minOfCurrent = 0;
//   let enter = true;
//   for (let i = 0; i < a.length; i++) {
//     //entering current subArray
//     if (Math.abs(a[i] - a[i + 1]) <= 1 && enter) {
//       currentMaxLen += 2;
//       minOfCurrent = a[i];
//       i++;
//       enter = false;
//     }
//     //iterating through subArr
//     else if (Math.abs(a[i] - minOfCurrent) <= 1 && !enter) {
//       currentMaxLen++;
//     }
//     if (Math.abs(a[i + 1] - minOfCurrent) > 1 && !enter) {
//       enter = true;
//       if (currentMaxLen > lastMaxLen) lastMaxLen = currentMaxLen;
//       currentMaxLen = 0;
//     } else if (currentMaxLen > lastMaxLen) lastMaxLen = currentMaxLen;
//   }
//   return lastMaxLen;
// }
//NOTE much better solution
function pickingNumbers(a) {
  let freq = new Array(99).fill(0);
  a.forEach((element) => {
    freq[element]++;
  });
  let max = freq[1] + freq[2];
  for (let i = 2; i < 100; i++) {
    if (freq[i] + freq[i + 1] > max) {
      max = freq[i] + freq[i + 1];
    }
  }
  return max;
}
console.log(pickingNumbers([1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5]));
console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));
console.log(pickingNumbers([1, 2, 2, 3, 1, 2]));
console.log(pickingNumbers([1, 1, 2, 2, 3, 3]));
console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));
console.log(pickingNumbers([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]));
console.log(
  pickingNumbers([
    4, 2, 3, 4, 4, 9, 98, 98, 3, 3, 3, 4, 2, 98, 1, 98, 98, 1, 1, 4, 98, 2, 98,
    3, 9, 9, 3, 1, 4, 1, 98, 9, 9, 2, 9, 4, 2, 2, 9, 98, 4, 98, 1, 3, 4, 9, 1,
    98, 98, 4, 2, 3, 98, 98, 1, 99, 9, 98, 98, 3, 98, 98, 4, 98, 2, 98, 4, 2, 1,
    1, 9, 2, 4,
  ])
);
console.log(
  pickingNumbers([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2])
);
console.log(
  pickingNumbers([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3])
);
console.log(
  pickingNumbers([
    3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
  ])
);
console.log(
  pickingNumbers([
    98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98,
    98, 99,
  ])
);
console.log(pickingNumbers([98, 3, 99, 1, 97, 2]));
