function equalStacks(h1, h2, h3) {
  // Write your code here
  let map = new Map();
  let acc = 0;
  let accSumH1 = [];
  let accSumH2 = [];
  let accSumH3 = [];
  for (let i = h1.length - 1; i >= 0; i--) {
    acc += h1[i];
    accSumH1[i] = acc;
    if (!map.has(accSumH1[i])) {
      map.set(accSumH1[i], 1);
    } else {
      map.set(accSumH1[i], map.get(accSumH1[i]) + 1);
    }
  }
  acc = 0;
  for (let i = h2.length - 1; i >= 0; i--) {
    acc += h2[i];
    accSumH2[i] = acc;
    if (!map.has(accSumH2[i])) {
      map.set(accSumH2[i], 1);
    } else {
      map.set(accSumH2[i], map.get(accSumH2[i]) + 1);
    }
  }
  acc = 0;
  for (let i = h3.length - 1; i >= 0; i--) {
    acc += h3[i];
    accSumH3[i] = acc;
    if (!map.has(accSumH3[i])) {
      map.set(accSumH3[i], 1);
    } else {
      map.set(accSumH3[i], map.get(accSumH3[i]) + 1);
    }
  }
  //get max key with value =3
  let maxKey = 0;
  for (let [key, value] of map) {
    if (value === 3 && key > maxKey) {
      maxKey = key;
    }
  }
  return maxKey;
}
console.log(equalStacks([1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [10, 1, 2, 3, 4, 5]));
console.log(equalStacks([], [], []));
console.log(equalStacks([1, 2, 3, 4, 5], [1, 2, 3, 4, 5], []));
console.log(equalStacks([5, 4, 3], [1, 1, 1], [1, 1, 1]));
