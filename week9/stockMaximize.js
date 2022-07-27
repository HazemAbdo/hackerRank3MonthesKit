function stockmax(prices) {
  //A B C D max1 E F G max2 H max3
  //-A -B -C + 3*max1 as max1>A&&B&&C
  //-E -F -G + 3*max2 as max2>E&&F&&G
  //   -H    +   max3 as max3>H
  let totalShares = 0;
  let maxProfit = 0;
  let max = Math.max(...prices);
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] === max) {
      maxProfit += totalShares * prices[i];
      totalShares = 0;
      //not always the global max is at the end of the array
      max = Math.max(...prices.slice(i + 1));
    } else {
      totalShares++;
      maxProfit -= prices[i];
    }
  }
  return maxProfit;
}
console.log(stockmax([1, 2]));
console.log(stockmax([1, 2, 3, 4, 5]));
console.log(stockmax([5, 3, 2]));
console.log(stockmax([1, 2, 100]));
console.log(stockmax([1, 3, 1, 2]));
console.log(stockmax([5, 4, 3, 4, 5]));
