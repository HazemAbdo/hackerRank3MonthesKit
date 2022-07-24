function pylons(k, arr) {
  // Write your code here
  let allZeros = new Array(arr.length).fill(0);
  let afterAddingCurrent = [];
  let start, end;
  let previous = new Array(arr.length).fill(0);
  let counter = 0;
  let total = new Array(arr.length).fill(0);
  arr.forEach(function (element, index) {
    if (element == 1) {
      start = index - (k - 1) >= 0 ? index - (k - 1) : 0;
      end =
        index + (k - 1) <= arr.length - 1 ? index + (k - 1) : arr.length - 1;
      afterAddingCurrent = allZeros.slice();
      afterAddingCurrent = [
        //from 0 to start is 0
        //from start to end is 1
        //from end to arr.length-1 is 0
        ...allZeros.slice(0, start),
        ...allZeros.slice(start, end + 1).fill(1),
        ...allZeros.slice(end + 1, arr.length),
      ];
      if ((+previous.join("") ^ +afterAddingCurrent.join("")) != 0) counter++;
      total = +previous.join("") | +afterAddingCurrent.join("");
      previous = afterAddingCurrent;
    }
  });
  if (toString(total).includes("0")) return -1;
  return counter;
}
console.log(pylons(2, [0, 1, 1, 1, 1, 0]));
