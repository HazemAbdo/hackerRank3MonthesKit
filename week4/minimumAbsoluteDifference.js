function minimumAbsoluteDifference(arr) {
  // Write your code here
  let a = arr.sort((a, b) => a - b);
  let minDifference = Infinity;
  let result = new Array();
  for (let i = 0; i < a.length - 1; i++) {
    if (a[i + 1] - a[i] < minDifference) {
      minDifference = a[i + 1] - a[i];
    }
  }
  return minDifference;
}
