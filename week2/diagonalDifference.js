function diagonalDifference(arr) {
  let maxIndex = arr[0].length - 1;
  let primaryDiagonal = 0;
  let secondaryDiagonal = 0;
  for (let i = 0; i < arr.length; i++) {
    primaryDiagonal += arr[i][i];
    secondaryDiagonal += arr[i][maxIndex - i];
  }
  return Math.abs(primaryDiagonal - secondaryDiagonal);
}
console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);
