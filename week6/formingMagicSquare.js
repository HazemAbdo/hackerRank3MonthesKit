function formingMagicSquare(s) {
  // Write your code here
  let minTotalCost = Infinity;
  let magicMatrix = [
    [8, 1, 6],
    [3, 5, 7],
    [4, 9, 2],
  ];

  for (let i = 0; i < allPossibleMagicSquares.length; i++) {
    if (minTotalCost > totalMatricesDiff(s, allPossibleMagicSquares[i])) {
      minTotalCost = totalMatricesDiff(s, allPossibleMagicSquares[i]);
    }
  }
  return minTotalCost;
}

function totalMatricesDiff(mat1, mat2) {
  let sum = 0;
  for (let i = 0; i < mat1.length; i++) {
    for (let j = 0; j < mat1[i].length; j++) {
      sum += Math.abs(mat1[i][j] - mat2[i][j]);
    }
  }
  return sum;
}
console.log(
  formingMagicSquare([
    [4, 5, 8],
    [2, 4, 1],
    [1, 9, 7],
  ])
);
console.log(
  formingMagicSquare([
    [4, 1, 5],
    [7, 6, 4],
    [7, 2, 2],
  ])
);
