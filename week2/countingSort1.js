function countingSort(arr) {
  // Write your code here
  let countingArr = new Array(100).fill(0);
  arr.forEach((element) => {
    countingArr[element]++;
  });
  return countingArr;
}
console.log(countingSort([1, 4, 1, 2, 7, 5, 2]));
