function twoArrays(k, A, B) {
  // Write your code here
  A = A.sort((a, b) => a - b);
  B = B.sort((a, b) => b - a);
  let flag = true;
  for (let index = 0; index < A.length; index++) {
    if (A[index] + B[index] < k) {
      flag = false;
    }
  }
  return flag == true ? "YES" : "NO";
}
