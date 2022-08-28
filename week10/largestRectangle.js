//Naive solution(o(n^2))
function largestRectangle(insertEntries) {
  //for each element in the array get the index of the next smaller element
  let nextSmallerIndex = [];
  //for each element in the array get the index of the previous smaller element
  let prevSmallerIndex = [];
  let areas = [];
  for (let i = 0; i < insertEntries.length; i++) {
    nextSmallerIndex.push(getNextSmallerIndex(insertEntries, i));
  }
  for (let i = 0; i < insertEntries.length; i++) {
    prevSmallerIndex.push(getPreviousSmallerIndex(insertEntries, i));
  }
  for (let i = 0; i < insertEntries.length; i++) {
    //at each element I can extend a rectangle with height equal to the element's height
    //until I reach an element with a smaller height (even before or after the current element)
    let height = insertEntries[i];
    let width = nextSmallerIndex[i] - prevSmallerIndex[i] + 1;
    areas.push(height * width);
  }
  return Math.max(...areas);
}
function getNextSmallerIndex(insertEntries, i) {
  //if there is an element smaller than me after me at index i
  //then I want the element before it then return i-1
  //else return len-1(all the next all larger than me)
  for (let j = i; j < insertEntries.length; j++) {
    if (insertEntries[j] < insertEntries[i]) {
      return j - 1;
    }
  }
  return insertEntries.length - 1;
}
function getPreviousSmallerIndex(insertEntries, i) {
  //if there is an element smaller than me before me at index i
  //then I want the element after it then return i+1
  //else return 0(all the previous all larger than me)
  for (let j = i; j >= 0; j--) {
    if (insertEntries[j] < insertEntries[i]) {
      return j + 1;
    }
  }
  return 0;
}
console.log(largestRectangle([11, 11, 10, 10, 10]));
//o(n) solution using //* monotonic stack
function largestRectangleArea(A) {
  //11 11 10 10 10 0
  A.push(0);
  //6
  N = A.length;
  res = 0;
  //0
  let s = [];
  for (let i = 0; i < N; ++i) {
    while (A[i] <= A[s[0]]) {
      let height = A[s[0]];
      s.shift();
      let left = s.length ? s[0] : -1; // Take the element left on the stack as the left edge
      res = Math.max(res, (i - left - 1) * height);
    }
    //0
    s.unshift(i);
  }
  return res;
}
console.log(largestRectangleArea([11, 11, 10, 10, 10]));
