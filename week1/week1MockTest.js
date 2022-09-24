function findMedian(arr) {
  let length = arr.length;
  let sortedArr = arr.sort((a, b) => a - b);
  return sortedArr[Math.floor(length / 2)];
}
