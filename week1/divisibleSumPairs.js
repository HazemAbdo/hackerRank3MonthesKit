//o(n^2) solution
// function divisibleSumPairs(n, k, ar) {
//   // Write your code here
//   let pairsNum = 0;
//   ar.forEach(function (element, index) {
//     let subArr = ar.slice(index + 1);
//     subArr.forEach((subElement) => {
//       if ((element + subElement) % k == 0) pairsNum++;
//     });
//   });
//   return pairsNum;
// }
//--------------------------------------------------------------
//o(n) solution

// console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));
