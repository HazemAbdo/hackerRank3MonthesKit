function maxMin(k, arr) {
  // Write your code here
  arr = arr.sort((a, b) => a - b);
  let minUnfairness = Infinity;
  for (let i = 0; i <= arr.length - k; i++) {
    if (arr[i + (k - 1)] - arr[i] < minUnfairness)
      minUnfairness = arr[i + (k - 1)] - arr[i];
  }
  return minUnfairness;
}
