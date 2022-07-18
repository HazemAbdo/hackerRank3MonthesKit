function countSort(arr) {
  // Write your code here
  let result = [];
  arr.forEach(function ([order, string], index) {
    let str = index > Math.floor(arr.length / 2) - 1 ? string : "-";
    if (result[order] === undefined) {
      result[order] = str;
    } else {
      result[order] += ` ${str}`;
    }
  });
  console.log(result.join(" ").trim());
}
countSort([
  [1, "a"],
  [2, "b"],
  [3, "c"],
  [1, "d"],
  [2, "e"],
  [3, "f"],
  [1, "g"],
  [2, "h"],
  [3, "i"],
  [1, "j"],
  [2, "k"],
]);
