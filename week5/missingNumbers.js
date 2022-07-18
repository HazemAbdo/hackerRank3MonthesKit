function missingNumbers(arr, brr) {
  let map = new Map();
  let missing = [];
  brr.forEach((element) => {
    if (!map.has(element)) {
      map.set(element, [1, 0]);
    } else {
      map.set(element, [map.get(element)[0] + 1, 0]);
    }
  });
  arr.forEach((element) => {
    if (!map.has(element)) {
      map.set(element, [map.get(element)[0], 1]);
    } else {
      map.set(element, [map.get(element)[0], map.get(element)[1] + 1]);
    }
  });
  for (const [key, value] of map) {
    if (value[0] != value[1]) missing.push(key);
  }
  missing = missing.sort((a, b) => a - b);
  return missing;
}
console.log(
  missingNumbers(
    [203, 204, 205, 206, 20, 208, 203, 204, 205, 206],
    [203, 203, 204, 204, 205, 206, 207, 205, 208, 206, 205, 206, 204]
  )
);
