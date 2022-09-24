function flippingMatrix(matrix) {
  // Write your code here
  let n = matrix.length / 2;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let max = Math.max(
        matrix[i][j],
        matrix[i][2 * n - 1 - j],
        matrix[2 * n - 1 - i][j],
        matrix[2 * n - 1 - i][2 * n - 1 - j]
      );
      sum += max;
    }
  }
  return sum;
}
