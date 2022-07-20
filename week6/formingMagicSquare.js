function formingMagicSquare(s) {
  // Write your code here
  let minTotalCost = Infinity;
  let allPossibleMagicSquares = [
    [
      [8, 1, 6],
      [3, 5, 7],
      [4, 9, 2],
    ],
    [
      [6, 1, 8],
      [7, 5, 3],
      [2, 9, 4],
    ],
    [
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 6],
    ],
    [
      [2, 9, 4],
      [7, 5, 3],
      [6, 1, 8],
    ],
    [
      [8, 3, 4],
      [1, 5, 9],
      [6, 7, 2],
    ],
    [
      [4, 3, 8],
      [9, 5, 1],
      [2, 7, 6],
    ],
    [
      [6, 7, 2],
      [1, 5, 9],
      [8, 3, 4],
    ],
    [
      [2, 7, 6],
      [9, 5, 1],
      [4, 3, 8],
    ],
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
