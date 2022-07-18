function gridChallenge(grid) {
  //a-z--> 97-122
  let len = grid.length;
  let result = new Array(len).fill("Z");
  let orderedGrid = "";
  let resultFlag = "YES";
  // Write your code here
  grid.forEach((row) => {
    orderedGrid += row.split("").sort().join("");
  });
  for (let i = 0; i < orderedGrid.length; i++) {
    if (orderedGrid[i] >= result[i % len]) {
      result[i % len] = orderedGrid[i];
    } else {
      resultFlag = "NO";
    }
  }
  return resultFlag;
}
console.log(gridChallenge(["eabcd", "fghij", "tlkmn", "orpqs", "xywuv"]));
