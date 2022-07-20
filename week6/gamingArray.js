function gamingArray(arr) {
  // Write your code here
  let sortedArr = [];
  let count = 0;
  arr.forEach(function (element, index) {
    sortedArr.push([element, index]);
  });
  sortedArr = sortedArr.sort(function (a, b) {
    return a[0] - b[0];
  });
  for (let i = sortedArr.length - 1; i >= 0; i--) {
    if (sortedArr[i][1] < arr.length) {
      arr.length = sortedArr[i][1];
      count++;
    }
  }
  return count % 2 == 0 ? "ANDY" : "BOB";

}

console.log(gamingArray([5, 4, 3, 2, 1]));
console.log(gamingArray([1, 2, 3, 4, 5]));
console.log(gamingArray([1, 2, 5, 3, 4]));
console.log(
  gamingArray([
    65194, 8115, 6117, 29036, 32362, 61968, 33097, 8933, 48404, 20798, 22878,
    79156, 12529, 85569, 6694, 2312, 95138, 48680, 83657, 61801, 67326, 14165,
    92214, 4546, 84948, 27986, 88208, 57285, 60345, 19284, 2502, 81434, 95271,
    64223, 38949, 53020, 26690, 15360, 95263, 53404, 36099, 43951, 58886, 53245,
    42341, 71994, 74035, 66042, 78917, 26868, 23754, 47366,
  ])
);
console.log(
  gamingArray([
    2156, 90629, 23857, 94325, 33447, 78537, 48772, 35902, 47202, 79445, 63982,
    4784, 68417, 3497, 90081, 36426, 86918, 30739, 95728, 31932, 7775, 14575,
  ])
);
