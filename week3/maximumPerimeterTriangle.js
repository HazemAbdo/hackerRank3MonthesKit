function maximumPerimeterTriangle(sticks) {
  // Write your code here
  sticks = sticks.sort((a, b) => b - a);
  let result = new Array(3).fill(0);
  for (let index = 0; index < sticks.length - 2; index++) {
    if (sticks[index + 2] < sticks[index] + sticks[index + 1]) {
      result[0] = sticks[index];
      result[1] = sticks[index + 1];
      result[2] = sticks[index + 2];
      return;
    }
  }
  return result.join("") == "000" ? [-1] : result;
}
console.log(maximumPerimeterTriangle([2, 1, 2]));
console.log(maximumPerimeterTriangle([1, 2, 1]));
console.log(maximumPerimeterTriangle([3, 2, 3, 4]));
console.log(maximumPerimeterTriangle([3, 6, 2, 3]));
console.log(maximumPerimeterTriangle([1, 2, 3, 4]));
console.log(maximumPerimeterTriangle([1, 3, 2, 2, 2, 3]));
