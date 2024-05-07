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
function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let pairsNum = 0;
    //map contains numMod and counter for its ocuurence
    let map = new Map();
    for (let i = 0; i < n; i++) {
        let numMode = ar[i] % k;
        let numRemainder = (k - numMode) % k;
        if (map.has(numRemainder)) {
            pairsNum += map.get(numRemainder);
        }
        if (!map.has(numMode)) {
            map.set(numMode, 1);
        } else {
            map.set(numMode, map.get(numMode) + 1);
        }

    }
    return pairsNum;
}
