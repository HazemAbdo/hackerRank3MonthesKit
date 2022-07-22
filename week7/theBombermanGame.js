function bomberMan(n, grid) {
  // Write your code here.
  String.prototype.replaceAt = function (index, replacement) {
    return (
      this.substring(0, index) +
      replacement +
      this.substring(index + replacement.length)
    );
  };
  //------------------------------------------
  let allBombsGrid = grid.slice(0);
  let row = new Array(grid[0].length).fill("O").join("");
  for (let i = 0; i < grid.length; ++i) {
    allBombsGrid[i] = row;
  }
  //------------------------------------------
  let afterFirstBombsDetonate = allBombsGrid.slice(0);
  for (let i = 0; i < grid.length; ++i) {
    for (let j = 0; j < grid[0].length; ++j) {
      if (
        (j < grid[0].length - 1 && grid[i][j + 1] == "O") ||
        (j >= 1 && grid[i][j - 1] == "O") ||
        (i < grid.length - 1 && grid[i + 1][j] == "O") ||
        (i >= 1 && grid[i - 1][j] == "O") ||
        grid[i][j] == "O"
      ) {
        afterFirstBombsDetonate[i] = afterFirstBombsDetonate[i].replaceAt(
          j,
          "."
        );
      }
    }
  }
  //------------------------------------------
  let afterSecondBombsDetonate = allBombsGrid.slice(0);
  for (let i = 0; i < grid.length; ++i) {
    for (let j = 0; j < grid[0].length; ++j) {
      if (
        (j < grid[0].length - 1 && afterFirstBombsDetonate[i][j + 1] == "O") ||
        (j >= 1 && afterFirstBombsDetonate[i][j - 1] == "O") ||
        (i < grid.length - 1 && afterFirstBombsDetonate[i + 1][j] == "O") ||
        (i >= 1 && afterFirstBombsDetonate[i - 1][j] == "O") ||
        afterFirstBombsDetonate[i][j] == "O"
      ) {
        afterSecondBombsDetonate[i] = afterSecondBombsDetonate[i].replaceAt(
          j,
          "."
        );
      }
    }
  }
  //------------------------------------------
  if (n == 1) {
    return grid;
  }
  return n % 2 == 0
    ? allBombsGrid
    : n % 4 == 1
    ? afterSecondBombsDetonate
    : afterFirstBombsDetonate;
}
console.log(
  bomberMan(3, [
    ".......",
    "...O...",
    "....O..",
    ".......",
    "OO.....",
    "OO.....",
  ])
);
